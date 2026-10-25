# EventHub — Event & Workshop Management Portal

A beginner-friendly React frontend assignment project built with Vite, React Router, Bootstrap, React Icons, and browser Local Storage.

## Features
- Responsive event listing with search, category filtering, and date sorting
- Event details page
- Registration form with basic validation and duplicate-registration prevention per event/email
- Registration confirmation page
- Dynamic seat count updates
- Admin dashboard with event and registration counts
- Create, edit, and delete events
- Local Storage persistence in the current browser

## Run locally
1. Install Node.js LTS.
2. Open this folder in VS Code.
3. In the terminal run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Notes and limitations
- This is a frontend demo. It has no backend, database, secure admin login, or server-side duplicate-registration protection.
- Local Storage is tied to the current browser and origin. Clearing browser data can remove saved events and registrations.
- Sample event images require an internet connection.
- Use a backend and database before using this for real registrations or personal information.
