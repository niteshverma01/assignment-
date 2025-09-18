import React from 'react';

const FilterBar = ({ 
  filter, 
  onFilterChange, 
  searchTerm, 
  onSearchChange, 
  onClearCompleted, 
  completedCount 
}) => {
  const filters = [
    { value: 'all', label: 'All Tasks', icon: '📋' },
    { value: 'active', label: 'Active', icon: '⏳' },
    { value: 'completed', label: 'Completed', icon: '✅' },
    { value: 'personal', label: 'Personal', icon: '👤' },
    { value: 'work', label: 'Work', icon: '💼' },
    { value: 'shopping', label: 'Shopping', icon: '🛒' },
    { value: 'health', label: 'Health', icon: '🏥' }
  ];

  return (
    <div className="filter-bar">
      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
          <div className="search-icon">🔍</div>
        </div>
      </div>

      <div className="filter-tabs">
        {filters.map(filterOption => (
          <button
            key={filterOption.value}
            onClick={() => onFilterChange(filterOption.value)}
            className={`filter-tab ${filter === filterOption.value ? 'active' : ''}`}
          >
            <span className="filter-icon">{filterOption.icon}</span>
            <span className="filter-label">{filterOption.label}</span>
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <div className="clear-completed-container">
          <button
            onClick={onClearCompleted}
            className="btn btn-clear"
          >
            Clear {completedCount} completed task{completedCount !== 1 ? 's' : ''}
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;