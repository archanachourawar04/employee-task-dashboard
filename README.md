# Employee Task Dashboard

A modern, responsive task management dashboard built with React and Vite, designed to help teams track, organize, and manage employee tasks efficiently.

## Screenshots 

<img width="1878" height="912" alt="image" src="https://github.com/user-attachments/assets/e02666e7-d3aa-4e6d-a462-156abea79f28" />




<img width="1891" height="895" alt="image" src="https://github.com/user-attachments/assets/77260290-d08d-4668-bf7f-2311675f953f" />

## Features

1. Task Management — Add, edit, delete, and mark tasks as completed
2. Drag & Drop — Reorder tasks intuitively using @dnd-kit for a smooth drag-and-drop experience
3. Dark / Light Mode — Toggle between dark and light themes for comfortable viewing in any environment
4. Toast Notifications — Get instant visual feedback (e.g., "Task Added Successfully") on key actions
5. Search & Filter — Quickly find tasks by title, or filter by status (Pending / Completed) and priority (High)
6. Dashboard Stats — At-a-glance overview of total, completed, and pending tasks
7. Persistent Storage — Tasks are saved in the browser's localStorage, so your data stays intact even after refreshing or closing the browser
8. Responsive UI — Built with Bootstrap utility classes for a clean layout across devices


## Tech Stack

1. React (with Hooks — useState, useEffect)
2. Vite — fast development build tool
3. @dnd-kit/core & @dnd-kit/sortable — drag-and-drop functionality
4. Bootstrap — responsive styling and grid system
5. Browser localStorage API — client-side data persistence



##  Project Structure


- **src/components/** — Reusable UI components (DashboardStats, FilterBar, Navbar, TaskCard, TaskForm)
- **src/pages/** — Page-level components (AddTask, Dashboard)
- **src/styles/** — CSS files
- **App.jsx** — Root component
- **main.jsx** — Entry point

 ## Usage

1. Add a Task — Fill in the task form with title, description, priority, due date, employee name, and department.
2. Manage Tasks — Use the action buttons on each task card to mark as complete, edit, or delete.
3. Reorder Tasks — Drag and drop task cards to rearrange them.
4. Search & Filter — Use the filter bar to search by title or filter by status/priority.
5. Switch Theme — Toggle dark/light mode from the navbar.
6. Data Persistence — All changes are automatically saved to your browser's local storage.

 ## Future Enhancements

1. Backend integration with a database (replacing localStorage)
2. User authentication and role-based access
3. Task deadlines with reminder notifications
4. Export tasks to PDF/Excel

## Author
Archana Chourawar
