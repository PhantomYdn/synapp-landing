/**
 * SynApp contact form -> Google Sheets
 *
 * Receives POST requests from the website contact form
 * (src/services/contactForm.service.ts) and appends a row to the active
 * sheet. Ported from the previous version of synapp.us and updated for the
 * current form fields.
 *
 * Expected header row (row 1) of the sheet:
 *   Timestamp | Name | Email | Company | Role | Team Size | Message | Page | Language
 */

var REQUIRED_FIELDS = ['name', 'email', 'company', 'message'];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var missing = REQUIRED_FIELDS.filter(function (key) {
      return !data[key] || String(data[key]).trim() === '';
    });
    if (missing.length > 0) {
      return jsonResponse_({ success: false, message: 'Missing required fields: ' + missing.join(', ') });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      sanitize_(data.name),
      sanitize_(data.email),
      sanitize_(data.company),
      sanitize_(data.role),
      sanitize_(data.teamSize),
      sanitize_(data.message),
      sanitize_(data.page),
      sanitize_(data.language),
    ]);

    // Optional: email notification. Uncomment and set the recipient.
    /*
    MailApp.sendEmail({
      to: 'your-email@example.com',
      subject: 'New SynApp contact form submission from ' + data.company,
      body:
        'Name: ' + data.name + '\n' +
        'Email: ' + data.email + '\n' +
        'Company: ' + data.company + '\n' +
        'Role: ' + (data.role || '-') + '\n' +
        'Team size: ' + (data.teamSize || '-') + '\n\n' +
        data.message + '\n\n' +
        'Page: ' + (data.page || '-'),
    });
    */

    return jsonResponse_({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    Logger.log('Error: ' + error);
    return jsonResponse_({ success: false, message: 'Server error: ' + error });
  }
}

// Health check: open the web app URL in a browser.
function doGet() {
  return jsonResponse_({ status: 'active', message: 'Contact form endpoint is working' });
}

function sanitize_(value) {
  if (value === undefined || value === null) return '';
  var str = String(value).replace(/[<>]/g, '').trim();
  // Prevent spreadsheet formula injection (=, +, -, @ at the start of a cell).
  return /^[=+\-@]/.test(str) ? "'" + str : str;
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
