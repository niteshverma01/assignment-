# Task Management App

A simple and intuitive task management application built with **React.js** that demonstrates core frontend development skills such as component design, state management, and user interaction.

---

## Quick overview

* **Purpose:** Lightweight task manager for creating, tracking, and managing daily tasks.
* **Stack:** React (functional components + hooks), Tailwind CSS, Vite, localStorage for persistence.
* **Goals:** Clean UI, good UX, responsive layout, and easy extensibility.

---

## Live Demo & Repository

* **Live Demo:** [assignment-snowy-six.vercel.app](https://assignment-snowy-six.vercel.app/)
* **Source Code:** [GitHub Repository](https://github.com/niteshverma01/assignment-.git)

---

## Features

### Core

* **Task list display** with title, description, status (pending/completed), and creation date.
* **Add tasks** via a validated form (title & description required).
* **Update task status**: Toggle complete / incomplete.
* **Delete tasks** with a confirmation dialog.
* **Filtering**: Show All, Pending, or Completed tasks.
* **Persistence**: Tasks are saved automatically to `localStorage`.

### UX & Quality

* Real-time form validation and helpful error messages.
* Responsive mobile-first design.
* Clear visual distinction between task states.
* Statistics dashboard with total/pending/completed counts and a progress indicator.

---

## Getting started

### Prerequisites

* Node.js v14 or higher
* npm (or yarn)

### Install & run locally

```bash
# clone the repo
git clone <repository-url>
cd task

# install dependencies
npm install

# start dev server
npm run dev
```

Open your browser at `http://localhost:5173` (Vite's default) after running the dev server.

### Build & preview production

```bash
# build for production
npm run build

# preview the production build locally
npm run preview
```

---

## Available scripts

* `npm run dev` — Start development server with hot reloading.
* `npm run build` — Create an optimized production build.
* `npm run preview` — Serve the production build locally for testing.

---

## Project structure

```
task/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskStats.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## Component architecture

* **App.jsx** — Root component. Manages global state (task list, filter), handles CRUD operations, and syncs with `localStorage`.
* **Header.jsx** — App title and optional actions (e.g., clear all).
* **TaskForm.jsx** — Controlled form for creating tasks with validation and user feedback.
* **TaskList.jsx** — Renders tasks according to the active filter; displays an empty state when no tasks exist.
* **TaskItem.jsx** — Shows task details, toggle completion, and delete with confirmation.
* **FilterBar.jsx** — Buttons for switching between All / Pending / Completed filters.
* **TaskStats.jsx** — Dashboard showing counts and a progress bar.

---

## Implementation notes

### State & data

* Global state is centered in `App.jsx` using `useState` and `useEffect`.
* `localStorage` is used to persist tasks. On load, the app restores tasks from `localStorage` and writes back upon changes. Consider adding versioning or migration logic when the data schema evolves.

### Form validation

* Title and description are required.
* Enforce a sensible minimum length for fields and provide inline error messages.

### Performance

* Use `key` props when mapping lists to avoid unnecessary re-renders.
* Keep components small and focused; lift state only when needed.

---

## Browser support

* Modern browsers: latest Chrome, Firefox, Safari, and Edge. The app is client-side and relies on browser `localStorage`.

---



---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-change`.
3. Commit your changes and push: `git push origin feature/my-change`.
4. Open a Pull Request describing your changes.

Please test features locally and add unit or integration tests where appropriate.

---

## License

This project is open source and available under the **MIT License**.

---

## Contact

If you have questions or feedback, please open an issue on the repository.
