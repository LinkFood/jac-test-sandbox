import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskCard } from './components/TaskCard';
import { TaskStats } from './components/TaskStats';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, stats } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    addTask(newTaskTitle.trim());
    setNewTaskTitle('');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Task Manager</h1>
        <p>A simple task tracker — JAC test sandbox</p>
      </header>

      <form className="add-task" onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task..."
        />
      </form>

      <div className="task-list" style={{ marginTop: '1.5rem' }}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>

      <TaskStats stats={stats} />

      {/* TODO: Add filter by priority */}
      {/* TODO: Add dark/light mode toggle */}
      {/* TODO: Add due dates */}
      {/* TODO: Add local storage persistence */}
    </div>
  );
}

export default App;