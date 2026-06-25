# SynApp User Guide

SynApp is a web console for managing your Telegram groups and channels from one
place. Instead of opening Telegram and configuring every chat by hand, you add
the SynApp bot to your chats and then manage members, permissions, broadcasts,
descriptions, and automation rules through a single admin interface.

This guide explains, page by page, **what each screen does** and **how to use
every function** on it. For end-to-end, real-world scenarios (e.g. onboarding a
new chat, mass-inviting a team), see the companion document
[Use Cases & Walkthroughs](./use_cases.md).
---

## Core concepts

A few ideas appear throughout the app. Understanding them first makes everything
else easier.

- **Chat** — a Telegram group, supergroup, or channel that the SynApp bot has
  been added to. SynApp can only manage chats where the bot is a member (and,
  for most actions, an administrator).
- **User** — a person known to SynApp. Users are discovered automatically when
  they interact with the bot, or can be pre-created by an admin so they are
  linked the moment they join.
- **Tag** — a reusable label you attach to chats and/or users (e.g.
  `Engineering`, `External`, `Blacklisted`). Tags drive organization,
  filtering, and automation.
- **Rule** — an automation: "when this **trigger** happens, perform this
  **action** on the entities carrying these tags." Rules let SynApp work for
  you without manual clicks.
- **Invitation** — a pending request for a user to join one or more chats.
- **Admin** — a SynApp user who is allowed into the admin console. A
  **super admin** has full privileges and is configured at deployment time.

---

## Signing in

Open SynApp in your browser. The login screen offers up to two methods:

- **Login with Telegram** — click the Telegram button and authorize via your
  Telegram account. This is the primary login method.
- **Login with SSO** — appears only when single sign-on (SAML) is enabled by
  your administrator. Click it to authenticate through your identity provider
  (e.g. Okta).

What you see after signing in depends on your role:

- **Admins** land in the admin console (starting on the **Chats** page).
- **Non-admin users** see only their personal **Invitations** page, where they
  can accept invites to chats. They do not have access to management screens.

To sign out, use the **Logout** button (top bar in the admin console, or on the
invitations page for regular users).

---

## The interface at a glance

The admin console has three parts:

- **Sidebar (left)** — the main navigation menu (Chats, Users, Admins, Rules,
  Settings, Invitations, Tags, Tasks, Error Logs).
- **Top bar** — global controls such as theme/appearance and logout.
- **Content area** — the active page. Most pages are powerful data tables with a
  toolbar of actions above them.

A floating appearance configurator lets you switch between light and dark themes
and adjust the look of the console at any time.

---

## Page overview

| Page | What it's for |
|------|----------------|
| **Chats** | Browse and bulk-manage every chat the bot is in: tag them, add/remove members, broadcast messages, export data. |
| **Chat details** | Deep-dive into a single chat: members, tags, internal notes, Telegram description, permissions, messaging. |
| **Users** | Browse and bulk-manage every known user: tag them, add/remove them from chats, message them, create or delete users. |
| **User details** | Full profile of a single user: identity, tags, chat memberships, status. |
| **Admins** | Grant or revoke access to the SynApp admin console. |
| **Rules** | Create automations that react to events and apply actions to tagged entities. |
| **Tags** | Create, edit, and delete the labels used to organize chats and users, and see how widely each is used. |
| **Invitations** | Track, resend, and revoke chat invitations across the system. |
| **Tasks** | Run and monitor long-running background jobs (rescans, presence checks, recalculations). |
| **Error logs** | Monitor, filter, resolve, and export application errors. |
| **Settings** | Configure the bot, messaging, team-validation command, and SSO/SCIM integrations. |

The sections below describe each page and its functions in detail.

---

## Chats

**Menu:** Chats · **Purpose:** the central table of every chat the bot manages.

The page is a table of chats with a toolbar of bulk actions above it. Select one
or more rows (using the row checkboxes) to enable the actions, which then apply
to **all selected chats at once**.

### Add tags to chats
1. Select the chats you want to label.
2. Click **Add tags**.
3. Pick existing tags, or create a new one on the spot.
4. Confirm. The tags are applied to every selected chat.

### Remove tags from chats
1. Select the chats.
2. Click **Remove tags**.
3. Choose which of the chats' current tags to strip, then click **Remove**.

### Add users to chats
1. Select the target chats.
2. Click the **Add users** action.
3. In the dialog, choose the users to add and confirm. SynApp invites/adds those
   users to every selected chat.

### Remove users from chats
1. Select the chats.
2. Open the **Remove users** action.
3. Select the users to remove and confirm.

### Send a message to chats
1. Select the chats you want to broadcast to.
2. Click **Send message**.
3. Compose your message. You can use the Telegram Markdown editor and optionally
   attach an image.
4. (Recommended) Click **Test send** to deliver the message to yourself first
   and verify formatting — you'll see a success notification.
5. Click **Send** to broadcast to all selected chats.

### Configure columns
Click the column-configuration control to choose which columns are visible.
Toggle columns on/off to tailor the table to what you care about. Your choice is
remembered.

### Search and filter
Use the search box to filter chats by name, and apply column/tag filters to
narrow the list (for example, show only chats carrying a specific tag). See
[Working with tables](#working-with-tables-shared-features) for the full set of
shared table features.

### Export to CSV
Export the current chat data to a CSV file for reporting or analysis.

### Open a chat
Click a chat row's link to open its [Chat details](#chat-details) page.

---

## Chat details

**Opened from:** clicking a chat on the Chats page.

This page shows everything about a single chat and lets you manage it
individually. It contains an info card, action buttons, and a members table
(the same powerful user table used elsewhere, scoped to this chat).

### Edit chat tags
Use **Edit tags** to add or remove tags for this specific chat.

### Add users to this chat
Click **Add users**, select the people to add, and confirm.

### Remove users from this chat
Select members in the chat's user table, then use the remove action to take them
out of the chat.

### Internal description / notes
Use **Edit description** to maintain an internal note about the chat. This note
is **visible only to SynApp admins** — it is never shown in Telegram. Use it to
record the chat's purpose, owner, or any context your team needs.

### Edit the Telegram description
Use **Edit Telegram description** to change the chat's actual description **in
Telegram**. The change is pushed to Telegram and visible to chat members.

### Send a message to this chat
Click **Send message**, compose (Markdown + optional image), optionally test-send
to yourself, then send it to the chat.

### Manage members
The members table behaves like the main [Users](#users) table but is limited to
this chat. You can search, filter (e.g. show only **invited** users who haven't
joined yet), tag, message, and remove members from here.

### Manage permissions
The **Bot Rights** button displays the administrative privileges granted
to the bot within the current chat context, while the adjacent **Chat Admins**
button opens a dialog that lists all Telegram administrators in the chat along
with their assigned permissions, allowing you to promote or demote admins with
granular control over individual rights such as manage chat, delete messages,
restrict and promote members, change info, invite users, pin messages, manage
video chats, and—for channels and supergroups—manage topics and stories, with
the available options automatically adapting based on the chat type (group,
supergroup, or channel).

::: danger Important
The bot can only demote administrators that it has previously promoted and can
only grant permissions that are equal to or less than its own current set.
:::

## Users

**Menu:** Users · **Purpose:** the central table of every person SynApp knows.

Like the Chats page, this is a table with bulk actions. Select users to act on
them together.

### Add / remove tags
Select users and use **Add tags** / **Remove tags** to label or unlabel them in
bulk — useful for segmenting your audience (e.g. tag everyone in a department).

### Add users to chats
1. Select users.
2. Click **Add to chats**.
3. Choose the destination chats and confirm. The selected users are added to all
   chosen chats.

### Remove users from chats
Select users, click **Remove from chats**, choose the chats to remove them from,
and confirm.

### Send a message to users
Select users, click **Send message**, compose, and send. Each selected user
receives the message directly from the bot.

### Add a user to the system
Click **Add user** to pre-create a user record from their details. This lets you
proactively assign someone to chats/tags **before** they have interacted with
the bot. When that person later starts the bot via Telegram, SynApp resolves and
links them automatically.

### Delete a user from the system
Select a user and click **Delete user**, then confirm. This removes the user
from SynApp **and** from all chats they belonged to. Use with care.

### Configure columns, search, filter, export
Same controls as the Chats page — customize columns, search by name, filter by
tag/status, and export to CSV. See
[Working with tables](#working-with-tables-shared-features).

### Open a user
Click a user row to open their [User details](#user-details) page.

---

## User details

**Opened from:** clicking a user on the Users page.

A read-at-a-glance profile that consolidates everything about one person:

- Identity — name, surname, Telegram username, and Telegram ID.
- Tags assigned to the user.
- Chats the user belongs to.
- Current status (e.g. active, invited).

Use this page to understand a single user's footprint across all your chats.

---

## Admins

**Menu:** Admins · **Purpose:** control who can access the SynApp admin console.

### Add an admin
Click **Add admin** and complete the dialog to grant a user admin rights. They
will gain access to the management console on next login.

### Revoke an admin ("debunk")
Select an admin and use the revoke/**debunk** action, then confirm. Their admin
access is removed immediately. (The super admin configured at deployment cannot
be removed here.)

---

## Rules

**Menu:** Rules · **Purpose:** automate actions based on conditions, so SynApp
reacts to events 24/7 without manual work.

A rule has three parts:

- **Trigger** — the event that fires the rule (chosen from a predefined list).
- **Action** — what SynApp does when the rule fires (chosen from a predefined
  list), applied to entities carrying the **action tags** you select.
- **Tag-matching condition (AND/OR)** — whether an entity must have **all**
  selected action tags (`AND`) or **any** of them (`OR`) to be affected.

Each rule can be individually **enabled** or **disabled**.

### Create a rule
1. Click **Add rule**.
2. Under **Trigger settings**, choose a trigger.
3. Under **Action settings**, choose an action.
4. Select the **action tags** that determine which chats/users the action
   targets.
5. Choose the **tag-matching condition** (AND/OR).
6. (Optional) Click **View affected entities** to preview exactly which chats
   would be affected before saving.
7. Make sure **Enabled** is on if you want it active, then click **Save**.

### Edit a rule
Open a rule and click **Edit**, adjust the trigger/action/tags/condition, and
save.

### Enable / disable a rule
Toggle a rule's enabled state to pause or resume it **without deleting** it —
ideal for testing or temporarily suspending automation.

### Delete a rule
Select a rule, click **Delete**, and confirm.

### View affected entities
For any rule, preview the list of chats/users it currently affects, so you
always understand its real-world impact before and after changes.

---

## Tags

**Menu:** Tags · **Purpose:** manage the labels that power organization,
filtering, and rules.

The page lists every tag along with **how many entities use it**, so you can see
which labels are active and which are unused.

### Create a tag
Click **Create tag**, enter a name (and description), and confirm.

### Edit a tag
Select a tag, click **Edit tag**, change its name/description, and confirm.

### Delete a tag
Select a tag, click **Delete tag**, and confirm. Removing a tag also removes it
from everything it was attached to (and disables any rules relying solely on it).

> Tip: tags are the glue between manual organization and automation. A clean,
> well-named tag set makes both filtering and [Rules](#rules) far more powerful.

---

## Invitations

**Menu:** Invitations · **Purpose:** a single dashboard for every pending chat
invitation, so no prospective member is lost.

When you add a user to a chat they haven't joined, an invitation is created and
tracked here.

### Resend an invitation
Select a pending invitation and click **Resend** to nudge the user again.

### Revoke an invitation
Select a pending invitation, click **Revoke**, and confirm. The invite is
cancelled and no longer valid.

> **For non-admin users:** regular users see their own invitations on a
> dedicated personal page after login, where they accept invites to join chats.
> If a user is already in a chat but still sees an invite, they should click
> "Yes" under the bot's data-collection message in the chat.

---

## Tasks

**Menu:** Tasks · **Purpose:** run and monitor long-running background jobs that
keep SynApp's data in sync with Telegram.

The page shows a table of tasks with their status (e.g. pending, in progress,
completed, failed). You can start new jobs from the toolbar; most jobs run in
the background, so you can safely navigate away and check back later. Click a
task to open its detail page.

Available jobs:

- **Recalculate members** — recomputes chat membership data across the system.
- **Rescan chats data** — re-reads chat information from Telegram to refresh
  what SynApp stores.
- **Rescan chat admins** — refreshes the list of administrators for chats.
- **Check users presence** — a guided wizard that verifies whether selected
  users are actually present in selected chats. Choose users (or all users),
  choose chats (or all chats), and run the check; progress is reported and you
  can close the dialog while it runs.
- **Reapply system tags** — re-applies default/system tags according to current
  rules and configuration.
- **Rescan users data** — re-reads user information from Telegram.

Use these when you suspect SynApp's view has drifted from Telegram (e.g. after
bulk changes made directly in Telegram).

---

## Error logs

**Menu:** Error Logs · **Purpose:** monitor and manage problems the application
has recorded.

The page shows error statistics, a filterable table of errors, and tools to act
on them.

- **Filter & search** — narrow errors by time range and other criteria.
- **View details** — click an error to open its detail page.
- **Resolve** — mark individual or selected errors as resolved.
- **Import / export** — import errors, export all or only selected errors for
  sharing or analysis.
- **Delete resolved** — clean up by deleting all resolved errors (irreversible).

---

## Settings

**Menu:** Settings · **Purpose:** configure SynApp's behavior and integrations.
Most settings save individually; some sections save as a group with a **Save**
button.

### Bot username
Displays the bot's Telegram username (with a copy-to-clipboard control) so you
can share it when adding the bot to chats.

### General settings
- **Collect users from messages** — when on, SynApp discovers users from
  messages sent in groups/channels.
- **Default page size** — the number of rows shown per page in tables (1–100).
- **Bot description** — the description shown in the chat dialog with the bot.
  You can edit it here or pull the current value from Telegram.
- **Bot about** — the text shown on the bot's profile. Editable here or
  synced from Telegram.

### Bot messaging
- **Data privacy message** — the message the bot sends to a chat when it is
  added and promoted to admin.
- **Pin data privacy message** — when on, that message is pinned in the chat.

### Team validation command
Configure the `/validate` bot command used to check team membership:
- **Enable** the command on/off.
- **Team validation tags** — users carrying any of these tags are recognized as
  team members during `/validate`.
- Options to **include tag names** and **tag descriptions** in the response.

### Blacklisted users validation
- **Blacklisted user tags** — users carrying any of these tags are flagged as
  blacklisted during `/validate`.
- Options to **include blacklisted tag names** and **descriptions** in the
  response.

::: danger Important
When a user carries both a team validation tag and a blacklisted user tag,
the user will always be marked as blacklisted.
:::

### SAML (SSO) settings
Enable and configure single sign-on. You can load settings from the database,
toggle **SSO enabled**, set the SP entity ID and assertion-consumer-service URL,
and either **auto-configure** from a metadata URL or enter the IdP entity ID,
sign-on URL, and X.509 certificate manually.

### SCIM settings
Enable SCIM provisioning and set the **SCIM auth token** used by your identity
provider to provision users automatically.

---

## Working with tables (shared features)

The Chats, Users, and chat-member tables share the same powerful behavior:

- **Row selection** — tick individual rows, or select the whole page, to enable
  the toolbar's bulk actions. Actions apply to every selected row.
- **Search** — type in the search box to filter by name in real time.
- **Filters** — filter by tag, status, and other columns to narrow large lists;
  filters can be reflected in the URL so a filtered view can be shared or
  bookmarked.
- **Column configuration** — show/hide columns to focus on what matters; your
  layout is remembered.
- **Pagination** — large datasets are paged; the default page size is set in
  [Settings](#settings).
- **Export to CSV** — export the current data for reporting.

Mastering these once means you already know how to operate every table-driven
page in SynApp.

---

For complete, scenario-based walkthroughs that combine these features, continue
to [Use Cases & Walkthroughs](./use_cases.md).