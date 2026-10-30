---
title: SynApp Use Cases & Walkthroughs
description: Practical SynApp walkthroughs for onboarding users, preparing chat invitations, broadcasting messages, and managing Telegram access.
---

# SynApp Use Cases & Walkthroughs

This document shows **real-world situations** SynApp is built to solve, and walks
through each one step by step. Every step references the matching section of the
[User Guide](./user_guide.md), so you can jump there for the full description of
any individual function.

Each scenario follows the same shape:

- **Situation** — the real-world problem.
- **Goal** — what you want to achieve.
- **Walkthrough** — numbered steps.
- **Result** — what you end up with.

---

## 1. Onboarding a new chat into SynApp

**Situation:** Your team just created a new Telegram group, "Project Phoenix,"
and you want SynApp to manage it.

**Goal:** Get the chat under SynApp's control, organized, and documented.

**Walkthrough:**

1. In Telegram, add the SynApp bot to the group and promote it to
   **administrator**. (Copy the bot's username from
   [Settings → Bot username](./user_guide.md#settings) if you need it.) On being
   promoted, the bot posts its **data privacy message** — configured under
   [Settings → Bot messaging](./user_guide.md#settings).
2. Back in SynApp, open the [Chats](./user_guide.md#chats) page — "Project
   Phoenix" now appears in the table.
3. If it isn't there yet, run **Rescan chats data** from
   [Tasks](./user_guide.md#tasks) to refresh SynApp's view from Telegram.
4. Select the chat and click **Add tags** to label it (e.g. `Engineering`,
   `Active-Projects`) — see
   [Chats → Add tags](./user_guide.md#add-tags-to-chats). Create the tags first
   on the [Tags](./user_guide.md#tags) page if they don't exist.
5. Open the chat's [Chat details](./user_guide.md#chat-details) page and use
   **Edit description** to record an
   [internal note](./user_guide.md#internal-description--notes) (purpose, owner)
   for your admins.
6. (Optional) Use **Edit Telegram description** to set the chat's public
   description in Telegram.

**Result:** The chat is managed, tagged, and documented — ready for member
management, broadcasts, and automation.

---

## 2. Mass-inviting a new team to their chats

**Situation:** Five new engineers are starting Monday. Their chats already
exist, but the new hires haven't joined — some haven't even opened the bot yet.

**Goal:** Pre-provision all five and get them into the right chats with minimal
effort.

**Walkthrough:**

1. On the [Users](./user_guide.md#users) page, click **Add users to system**.
   Paste all five Telegram handles or profile links, one per line, with optional
   comma-separated emails. Check the preview, fix any flagged rows, and click
   **Add 5 users** — see
   [Add a user to the system](./user_guide.md#add-a-user-to-the-system).
2. Select the five new users and click **Add tags** → apply an `Engineering`
   tag (see [Users → Add/remove tags](./user_guide.md#add--remove-tags)).
3. With the five still selected, click **Add to chats** and pick the engineering
   chats — see [Users → Add users to chats](./user_guide.md#add-users-to-chats-1).
4. Share your bot's Telegram link with the new hires. Find its username under
   [Settings → Bot username](./user_guide.md#settings), and ask each person to
   open the bot and press **Start**.
5. As people start the bot, SynApp links their pre-created records and
   automatically sends their chat invitations. Each person uses those
   invitations to join. Review pending invitations on the
   [Invitations](./user_guide.md#invitations) page; use **Resend** if someone
   needs another invitation after starting the bot.

**Result:** All new hires are tagged and assigned to the correct chats in advance.
When they start the bot, they receive their invitations automatically and can
join without an admin assigning their chats again.

---

## 3. Broadcasting an announcement to many chats safely

**Situation:** You need to send a maintenance notice to every "Active-Projects"
chat, formatted nicely, without risking a typo going out to dozens of groups.

**Goal:** Send one well-formatted message to a filtered set of chats — verified
first.

**Walkthrough:**

1. On the [Chats](./user_guide.md#chats) page, **filter** by the
   `Active-Projects` tag so only relevant chats remain (see
   [Working with tables](./user_guide.md#working-with-tables-shared-features)).
2. Select all the filtered chats.
3. Click **Send message** and compose your notice using the Markdown editor;
   attach an image if needed — see
   [Chats → Send a message](./user_guide.md#send-a-message-to-chats).
4. Click **Test send** to deliver the message **to yourself** and confirm the
   formatting looks right.
5. Once happy, click **Send** to broadcast to every selected chat.

**Result:** A consistent, pre-verified announcement reaches exactly the chats you
intended — in one action.

---

## 4. Offboarding a departing employee

**Situation:** An employee is leaving and must be removed from all company chats
immediately.

**Goal:** Revoke their access everywhere, quickly and completely.

**Walkthrough:**

1. On the [Users](./user_guide.md#users) page, **search** for the person by name.
2. Open their [User details](./user_guide.md#user-details) to review every chat
   they belong to and confirm you have the right person.
3. **Fast path — full removal:** back on the Users page, select the user and
   click **Delete user**, then confirm. This removes them from SynApp **and**
   from all their chats — see
   [Users → Delete a user](./user_guide.md#delete-a-user-from-the-system).
4. **Selective path — keep the record:** instead of deleting, select the user,
   click **Remove from chats**, and choose the specific chats to remove them
   from (see
   [Users → Remove users from chats](./user_guide.md#remove-users-from-chats)).
5. If any access was tag-driven, also remove the relevant access tag with
   **Remove tags** so [automation rules](./user_guide.md#rules) don't re-add
   them.

**Result:** The departing employee loses access across all selected chats in a
single, auditable workflow.

---

## 5. Automating access with tags and rules

**Situation:** Every contractor should automatically be added to the "Contractor
Hub" chat, and you don't want to do it by hand each time.

**Goal:** Let SynApp grant chat access automatically based on a tag.

**Walkthrough:**

1. On the [Tags](./user_guide.md#tags) page, create a `Contractor` tag if it
   doesn't exist (see [Tags → Create a tag](./user_guide.md#create-a-tag)).
2. On the [Rules](./user_guide.md#rules) page, click **Add rule**.
3. Choose the **trigger** that fits "a relevant user/tag event occurred."
4. Choose the **action** that adds the matching users to the target chat.
5. Set the **action tags** to `Contractor`, and the **tag-matching condition**
   to `OR` (any contractor qualifies) — see
   [Rules → Create a rule](./user_guide.md#create-a-rule).
6. Click **View affected entities** to preview who/what the rule will touch
   before committing.
7. Ensure **Enabled** is on and **Save**.
8. From now on, simply tagging a user `Contractor` (manually on the
   [Users](./user_guide.md#users) page, or via provisioning) lets the rule do
   the rest.

**Result:** Access is granted automatically by tagging — consistent, hands-off,
and easy to audit by viewing the rule's affected entities. To pause it during
testing, just **disable** the rule instead of deleting it.

---

## 6. Auditing who is actually in your chats

**Situation:** After a busy quarter with lots of manual changes made directly in
Telegram, you're not sure SynApp's data still matches reality.

**Goal:** Reconcile SynApp with Telegram and confirm memberships.

**Walkthrough:**

1. Open the [Tasks](./user_guide.md#tasks) page.
2. Run **Rescan chats data** and **Rescan users data** to refresh chat and user
   information from Telegram.
3. Run **Rescan chat admins** to refresh administrator lists.
4. Run **Check users presence**: in the wizard, choose the users (or all users)
   and chats (or all chats) to verify, then start it. The job reports progress
   in the background — you can close the dialog and check the
   [task status](./user_guide.md#tasks) later.
5. Run **Recalculate members** to recompute membership totals once rescans
   complete.
6. (Optional) Run **Reapply system tags** so default/system tags reflect the
   refreshed data and current rules.

**Result:** SynApp's view is reconciled with Telegram, and you have a clear,
verified picture of who is in which chat.

---

## 7. Validating team membership from inside Telegram

**Situation:** In a shared chat, someone needs to quickly confirm whether a user
is a genuine team member or has been blacklisted — without leaving Telegram.

**Goal:** Use the bot's `/validate` command, backed by your SynApp tags.

**Walkthrough:**

1. On the [Settings](./user_guide.md#settings) page, open **Team validation
   command** and **enable** it.
2. Set the **team validation tags** to the tags that mark real team members
   (e.g. `Employee`, `Engineering`). Optionally turn on **include tag names** /
   **descriptions** so the response is more informative.
3. Open **Blacklisted users validation** and set the **blacklisted user tags**
   (e.g. `Blacklisted`), with the same name/description options if desired.
4. Make sure the relevant users actually carry these tags — apply them in bulk
   from the [Users](./user_guide.md#users) page with **Add tags**.
5. In Telegram, run `/validate` on a user. The bot answers using your configured
   tags, identifying team members and flagging blacklisted users.

**Result:** Anyone in the chat can validate membership on the spot, and the
answer stays consistent with how you've organized users in SynApp.

---

## 8. Preparing chat access before a user starts the bot

**Situation:** Maria is an external collaborator who needs access to "Project
Phoenix" and "Partner Updates." She cannot open the bot until tomorrow, and the
bot has not tracked her yet. You have her Telegram handle, `@maria`, and want to
finish setting up her access today.

**Goal:** Create Maria's record and assign her chats now, so she automatically
receives the right invitations when she starts the bot.

**Walkthrough:**

1. Open [Users](./user_guide.md#users) and search for Maria to check whether she
   already has a record. If she is missing, click **Add users to system**.
2. In **Paste users**, enter `@maria`. If you also have her email, enter
   `@maria, maria@example.com`. You can use her Telegram profile link instead
   of the handle; do not use a numeric Telegram ID.
3. Leave **Separate users by** set to **New line** and **Separate identifier and
   email by** set to **Comma (,)**. Check that **Check preview** shows **1 user**
   and the correct details. Correct any flagged fields, then click **Add 1 user**
   — see [Add a user to the system](./user_guide.md#add-a-user-to-the-system).
4. Once the dialog closes, select Maria in the Users table. Click **Add to
   chats**, select "Project Phoenix" and "Partner Updates," and confirm — see
   [Users → Add users to chats](./user_guide.md#add-users-to-chats-1). If she
   already had a record in step 1, use that record for this step.
5. Share your bot's Telegram link with Maria, using the username shown under
   [Settings → Bot username](./user_guide.md#settings). Ask her to open it and
   press **Start** when she is ready. Her SynApp record and chat assignments
   are already prepared while you wait.
6. Tomorrow, Maria opens the bot and presses **Start**. SynApp links her Telegram
   account to the record and automatically sends invitations to "Project
   Phoenix" and "Partner Updates."
7. Maria uses the invitations to join the two chats. You can review any pending
   invitations on the [Invitations](./user_guide.md#invitations) page.

**Result:** You prepare Maria's chat access before she can interact with the bot.
Starting the bot delivers her invitations automatically; she joins by accepting
them, without you repeating the setup.

---

For per-function reference and detailed descriptions of every page, see the
[User Guide](./user_guide.md).