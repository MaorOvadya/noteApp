# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Note App

Note App is a simple React application that allows users to add and delete notes. The notes are saved to local storage, so they persist even when the browser is closed or refreshed.

## Features

- Add new notes with a title and body.
- Delete existing notes.
- Notes are saved in local storage for persistence.
- Displays a loading indicator while notes are being loaded.
- Shows a "No notes to show" message when there are no notes.

## Installation

1. Clone the repository: (```bash git clone https://github.com/yourusername/note-app.git)
2. Navigate to the project directory:
3.Install the dependencies

Note.js
This is the main component of the app. It includes the following functionality:

State Management: Manages the state for notes, title, body, and error messages.
Local Storage: Loads notes from local storage on mount and saves notes to local storage whenever they are added or deleted.
Event Handlers: Handles form submission to add notes, input change to reset error messages, and note deletion.
