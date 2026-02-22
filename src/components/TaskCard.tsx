import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div
        className={`checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.completed && 'â'}
      </div>
      <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-date">{task.createdAt}</div>
      </div>
      <span className={`task-priority priority-${task.priority}`}>
        {task.priority}
      </span>
      {onDelete && (
        <button 
          onClick={() => onDelete(task.id)} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#666', 
            cursor: 'pointer',
            fontSize: '16px',
            padding: '4px 8px'
          }}
          title="Delete task"
        >
          â
        </button>
      )}
    </div>
  );
}