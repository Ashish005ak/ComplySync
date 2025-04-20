# 🛡️ Compliance Alert System from Gmail & SMS

A automation system that reads emails, detects compliance-related alerts (like GST, ITR, PF), extracts due dates and amounts, and creates calendar reminders, sends WhatsApp/voice alerts, and logs to Notion.

---

## 🚀 Features

- ✅ Polls Gmail for compliance-related emails
- 🔍 Detects keywords like GST, PF, ITR, Penalty, etc.
- 🧠 Extracts due date, amount, and penalty using regex
- 📅 Creates Google Calendar events with multiple reminders
- 💬 Sends WhatsApp & voice alerts via Twilio
- 📝 Logs details into a Notion database
- 🔁 Can be scheduled to run periodically (cron/APScheduler)

## 🧰 Tech Stacks

Automation Platform – We used “n8n”
Gmail Trigger – Email source
Custom Code Modules –  Regex logic
Twilio – SMS + Voice Call alerts
Google Calendar API – Event creation
Notion API – Compliance logging
Frontend –React+firebase(OAuth)



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


