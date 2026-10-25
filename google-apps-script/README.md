# Contact form → Google Sheets

The contact form on the site posts to a Google Apps Script web app, which writes each submission into a Google Sheet. No server of our own is involved, so this works on GitHub Pages.

- Frontend: `src/services/contactForm.service.ts`
- Script: `Code.gs` in this folder
- Endpoint URL: `VITE_GOOGLE_SCRIPT_URL` (build-time env var). If unset, the service falls back to the deployment URL hardcoded in the service file.

## Deploying / updating the script

1. Open the Google Sheet that collects submissions (or create one named "SynApp Contact Form Submissions").
2. Put these headers in row 1:
   `Timestamp | Name | Email | Company | Role | Team Size | Message | Page | Language`
3. **Extensions → Apps Script**, replace the editor contents with `Code.gs`, save.
4. **Deploy → New deployment** (first time) or **Deploy → Manage deployments → ✏️ → New version** (updates).
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Authorize when prompted and copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`).
6. Put that URL in `.env` as `VITE_GOOGLE_SCRIPT_URL=…` (or update the default in the service file) and rebuild.

Updating an existing deployment keeps the same URL, so step 6 is only needed for a brand-new deployment.

## Notes

- The browser sends the request with `mode: 'no-cors'`, so the frontend cannot read the script's reply. A submission counts as sent when the request itself succeeds; check the sheet to confirm rows arrive.
- The previously deployed script (from the old static site) expects the fields `phone`, `plan`, `subject` and rejects the current form. Redeploy it with this `Code.gs` before relying on it.
- To get an email per submission, uncomment the `MailApp.sendEmail` block in `Code.gs`, set the recipient, and redeploy a new version.
