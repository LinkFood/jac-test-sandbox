export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  // BUG: No "dueDate" field even though the UI references it
}

export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  completionPercentage: number;
}