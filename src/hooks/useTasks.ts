import { useState, useCallback } from 'react';
import type { Task } from '../types';

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Set up project structure', completed: true, priority: 'high', createdAt: '2024-01-15' },
  { id: '2', title: 'Add authentication', completed: false, priority: 'high', createdAt: '2024-01-16' },
  { id: '3', title: 'Write unit tests', completed: false, priority: 'medium', createdAt: '2024-01-17' },
  { id: '4', title: 'Update README', completed: false, priority: 'low', createdAt: '2024-01-18' },
  { id: '5', title: 'Fix login redirect bug', completed: false, priority: 'high', createdAt: '2024-01-19' },
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const addTask = useCallback((title: string, priority: Task['priority'] = 'medium') => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setTasks(prev => [newTask, ...prev]);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }, []);

  // BUG: deleteTask is defined but never exposed/used in the UI
  const deleteTask = useCallback((id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return { tasks, addTask, toggleTask, deleteTask, stats };
}
