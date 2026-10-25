# EventHub – Event Management Web Application

## Project Overview

EventHub is a web application developed using React.js and Vite. It provides an interface for browsing events, viewing event details, registering for events, and managing event information through administrative pages.

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

## Features

- Browse and explore available events.
- View event details, including date, time, venue, category, and available seats.
- Register for events through a registration form.
- View a registration success page.
- Access an administrative dashboard.
- Manage event information through the event management interface.
- Organize event information using reusable React components and pages.

## Project Structure

```text
EventSpace_Project/
├── demo/
│   └── EventHub-Demo.mp4
├── src/
│   ├── components/
│   ├── data/
│   │   └── events.js
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Home.jsx
│   │   ├── ManageEvents.jsx
│   │   ├── Register.jsx
│   │   └── RegistrationSuccess.jsx
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Prerequisites

Before running the project, install:

- Node.js
- npm (included with Node.js)
- Visual Studio Code or another code editor

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/EventHub-Frontend-Assignment.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Open the Project Folder

```bash
cd EventHub-Frontend-Assignment
```

If your repository contains the project directly at its root, continue to the next step.

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open the Application

Open the local URL shown in your terminal. The default Vite development URL is usually:

http://localhost:5173/

## Demo Video

https://drive.google.com/file/d/1-F4V7oYie3wxrD3_EdHI8pjnqk9JFcNg/view
The project demonstration video is available in the `demo` folder of this repository.

Video: `demo/EventHub-Demo.mp4`

## Notes

- The event data is currently defined in `src/data/events.js`.
- This repository contains the frontend implementation.
- The application's data persistence and registration behavior depend on the functionality implemented in the source code.

## Author

Vaishnavi Vijay Bhore

Frontend Developer Candidate
