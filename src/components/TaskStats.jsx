import React from 'react';
import { ChartColumnDecreasing, CircleCheckBig, Target, ClockAlert } from 'lucide-react';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const categoryStats = tasks.reduce((acc, task) => {
    acc[task.category] = (acc[task.category] || 0) + 1;
    return acc;
  }, {});

  const categoryColors = {
    personal: '#3B82F6',
    work: '#8B5CF6',
    shopping: '#10B981',
    health: '#F59E0B'
  };

  return (
    <div className="task-stats space-y-8">
      {/* Stats Grid */}
      <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition">
          <div className="stat-icon p-3 rounded-full bg-blue-500/20 text-blue-400">
            <ChartColumnDecreasing className="w-6 h-6" />
          </div>
          <div className="stat-content">
            <h3 className="stat-number text-2xl font-bold text-white">{totalTasks}</h3>
            <p className="stat-label text-sm text-gray-300">Total Tasks</p>
          </div>
        </div>

        <div className="stat-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition">
          <div className="stat-icon p-3 rounded-full bg-green-500/20 text-green-400">
            <CircleCheckBig className="w-6 h-6" />
          </div>
          <div className="stat-content">
            <h3 className="stat-number text-2xl font-bold text-white">{completedTasks}</h3>
            <p className="stat-label text-sm text-gray-300">Completed</p>
          </div>
        </div>

        <div className="stat-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition">
          <div className="stat-icon p-3 rounded-full bg-yellow-500/20 text-yellow-400">
            <ClockAlert className="w-6 h-6" />
          </div>
          <div className="stat-content">
            <h3 className="stat-number text-2xl font-bold text-white">{pendingTasks}</h3>
            <p className="stat-label text-sm text-gray-300">Pending</p>
          </div>
        </div>

        <div className="stat-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition">
          <div className="stat-icon p-3 rounded-full bg-purple-500/20 text-purple-400">
            <Target className="w-6 h-6" />
          </div>
          <div className="stat-content">
            <h3 className="stat-number text-2xl font-bold text-white">{completionRate}%</h3>
            <p className="stat-label text-sm text-gray-300">Completion Rate</p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      {totalTasks > 0 && (
        <div className="progress-section bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 space-y-4 shadow-lg">
          <h4 className="progress-title text-lg font-semibold text-white">Progress Overview</h4>
          <div className="progress-bar w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="progress-fill h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-700 rounded-full"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
          <div className="progress-text text-sm text-gray-300">
            {completedTasks} of {totalTasks} tasks completed
          </div>
        </div>
      )}

      {/* Category Stats */}
      {Object.keys(categoryStats).length > 0 && (
        <div className="category-stats bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 space-y-4 shadow-lg">
          <h4 className="category-title text-lg font-semibold text-white">Tasks by Category</h4>
          <div className="category-grid grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(categoryStats).map(([category, count]) => (
              <div
                key={category}
                className="category-stat flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <div
                  className="category-color w-3 h-3 rounded-full"
                  style={{ backgroundColor: categoryColors[category] }}
                ></div>
                <span className="category-name capitalize text-sm font-medium text-white">{category}</span>
                <span className="category-count text-sm text-gray-300">({count})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskStats;
