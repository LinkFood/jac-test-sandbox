import type { TaskStats as TaskStatsType } from '../types';

interface TaskStatsProps {
  stats: TaskStatsType;
}

export function TaskStats({ stats }: TaskStatsProps) {
  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-value">{stats.total}</div>
        <div className="stat-label">Total</div>
      </div>
      <div className="stat">
        <div className="stat-value">{stats.completed}</div>
        <div className="stat-label">Done</div>
      </div>
      <div className="stat">
        <div className="stat-value">{stats.pending}</div>
        <div className="stat-label">Pending</div>
      </div>
      <div className="stat completion-stat">
        <div className="stat-value">{stats.completionPercentage}%</div>
        <div className="stat-label">Complete</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${stats.completionPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}