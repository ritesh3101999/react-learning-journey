# React Learning Journey

A hands-on collection of projects documenting my journey from JavaScript beginner to advanced React developer. Each project focuses on building practical skills with React and its ecosystem.

## Projects

### Task Tracker

The first project is a simple daily task tracker built with React and Vite. It lets you:

- Add tasks, including by pressing Enter
- Mark tasks as complete or active
- Delete tasks

Tasks are currently stored in React state, so they are cleared when the page is refreshed.

## Getting Started

You will need [Node.js](https://nodejs.org/) and npm installed.

```bash
cd task-tracker
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

Run these commands from the `task-tracker` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with Oxlint |

## Project Structure

```text
react-learning-journey/
├── README.md
└── task-tracker/
	├── src/
	│   ├── components/
	│   │   └── TaskItem.jsx
	│   ├── App.jsx
	│   └── main.jsx
	├── index.html
	└── package.json
```

## Tech Stack

- React
- Vite
- JavaScript (ES modules)
- Oxlint
