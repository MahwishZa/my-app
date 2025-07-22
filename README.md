# React To-Do List App

A modern, user-friendly, and visually interactive To-Do List application built with React.js.

## Features
- **Add, edit, complete, and delete tasks** with a clean, intuitive interface
- **Confirmation dialog** before deleting tasks
- **Animations** for adding and removing tasks
- **Toast/snackbar notifications** for actions (add, delete, clear)
- **Clear completed tasks** with a single click
- **Persistent storage** using localStorage
- **Responsive design** for mobile and desktop
- **Accessibility**: ARIA roles/labels, keyboard navigation, and focus management

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/MahwishZa/my-app.git
   cd my-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Type a new task and click **Add** or press **Enter** to add it.
- Click the **checkbox** to mark a task as complete/incomplete.
- Click **Edit** to modify a task, then **Save** or press **Enter**.
- Click **Delete** to remove a task (confirmation required).
- Click **Clear Completed** to remove all completed tasks.
- Enjoy smooth animations and instant feedback with toast notifications!

## Accessibility
- Fully keyboard navigable
- ARIA roles and labels for screen readers
- Focus management for editing and notifications

## Testing
Run tests with:
```sh
npm test
```

## Build
To create a production build:
```sh
npm run build
```

## License
MIT
