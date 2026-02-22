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
      {/* BUG: No completion percentage shown */}
    </div>
  );
}
