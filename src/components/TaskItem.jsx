import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  const categoryColors = {
    personal: '#3B82F6',
    work: '#8B5CF6',
    shopping: '#10B981',
    health: '#F59E0B'
  };

  const priorityLabels = {
    low: 'Low',
    medium: 'Medium',
    high: 'High'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <div 
          className="task-category"
          style={{ backgroundColor: categoryColors[task.category] }}
        >
          {task.category}
        </div>
        <div className={`task-priority priority-${task.priority}`}>
          {priorityLabels[task.priority]}
        </div>
      </div>

      <div className="task-content">
        <h4 className="task-title">{task.title}</h4>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <div className="task-date">
          Created: {formatDate(task.createdAt)}
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`btn-icon ${task.completed ? 'btn-complete' : 'btn-pending'}`}
          title={task.completed ? 'Mark as pending' : 'Mark as complete'}
        >
          {task.completed ? '✓' : '○'}
        </button>
        
        <button
          onClick={() => onEditTask(task)}
          className="btn-icon btn-edit"
          title="Edit task"
        >
          ✏️
        </button>
        
        <button
          onClick={() => onDeleteTask(task.id)}
          className="btn-icon btn-delete"
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TaskItem;