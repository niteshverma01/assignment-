# Task Management Application

A simple and intuitive task management application built with React.js that demonstrates core frontend development skills including component design, state management, and user interaction.

## Features

### Core Functionality
- **Task List Display**: View all tasks with title, description, status, and creation date
- **Add New Tasks**: Create tasks with title and description using a validated form
- **Task Management**: Mark tasks as complete/incomplete and delete with confirmation
- **Smart Filtering**: Filter tasks by All, Pending, or Completed status
- **Data Persistence**: Tasks are automatically saved to localStorage
- **Statistics Dashboard**: View total, pending, and completed task counts with progress

### User Experience
- Clean, organized layout with visual distinction between task states
- Responsive design that works seamlessly on mobile and desktop
- Real-time form validation with helpful error messages
- Confirmation dialogs for destructive actions
- Intuitive interface with clear visual feedback

## Technology Stack

- **React.js** - Frontend framework using functional components
- **React Hooks** - useState and useEffect for state management
- **Tailwind CSS** - Utility-first CSS framework for styling
- **localStorage** - Client-side data persistence
- **Vite** - Build tool and development server

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

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
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js

## Component Architecture

### App.jsx
- Main application component managing global state
- Handles task CRUD operations and localStorage persistence
- Coordinates data flow between child components

### TaskForm.jsx
- Controlled form component for task creation
- Real-time validation with error handling
- Clears form after successful submission

### TaskList.jsx
- Renders filtered list of tasks
- Handles empty state display
- Maps task data to TaskItem components

### TaskItem.jsx
- Individual task display and interaction
- Toggle completion status
- Delete confirmation dialog
- Formatted date display

### TaskFilter.jsx
- Filter button group for task status
- Active filter highlighting
- Clean button styling

### TaskStats.jsx
- Statistics dashboard with task counts
- Progress bar visualization
- Responsive grid layout

## Key Features Implementation

### State Management
- Uses React hooks for clean state management
- Centralized state in App component
- Proper state updates with immutable patterns

### Data Persistence
- Automatic localStorage integration
- Error handling for storage operations
- Data restoration on application load

### Form Validation
- Required field validation
- Minimum character length requirements
- Real-time error feedback
- User-friendly error messages

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized for various screen sizes
- Touch-friendly interface elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- Efficient re-rendering with proper key props
- Minimal state updates
- Optimized component structure
- Lightweight dependencies

## Future Enhancements

Potential improvements that could be added:
- Drag and drop task reordering
- Task categories or tags
- Due dates with visual indicators
- Search functionality
- Export/import capabilities
- Dark mode theme

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback about this project, please reach out through the repository issues page.