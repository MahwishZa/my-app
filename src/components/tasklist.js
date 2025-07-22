import React, { useEffect, useState } from "react";
import TaskItem from "./taskitem";

const Toast = ({ message, onClose }) => (
  <div className="toast" role="status" aria-live="polite">
    {message}
    <button onClick={onClose} aria-label="Close notification">×</button>
  </div>
);

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState("");
    const [toast, setToast] = useState(null);
    const [animatingIds, setAnimatingIds] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(stored);
    }, []);

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(null), 2000);
    };

    const saveTasks = (updated) => {
        localStorage.setItem("tasks", JSON.stringify(updated));
        setTasks(updated);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (!newTaskText.trim()) return;
        const newTask = {
            id: Date.now().toString(),
            text: newTaskText,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        const updated = [...tasks, newTask];
        saveTasks(updated);
        setNewTaskText("");
        setAnimatingIds((ids) => [...ids, newTask.id]);
        showToast("Task added");
        setTimeout(() => setAnimatingIds((ids) => ids.filter(id => id !== newTask.id)), 500);
    };

    const updateTask = (updatedTask) => {
        const updated = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        saveTasks(updated);
        showToast("Task updated");
    };

    const deleteTask = (id) => {
        setAnimatingIds((ids) => [...ids, id]);
        setTimeout(() => {
            const updated = tasks.filter((t) => t.id !== id);
            saveTasks(updated);
            showToast("Task deleted");
            setAnimatingIds((ids) => ids.filter(animId => animId !== id));
        }, 400);
    };

    const clearCompleted = () => {
        const updated = tasks.filter((t) => !t.completed);
        saveTasks(updated);
        showToast("Completed tasks cleared");
    };

    return (
        <div className="task-list-container">
            <h1>My To-Do List</h1>

            <form onSubmit={addTask} className="task-form" aria-label="Add new task">
                <input
                    type="text"
                    placeholder="New task..."
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    aria-label="New task input"
                />
                <button type="submit" aria-label="Add task">Add</button>
            </form>
            <button className="clear-btn" onClick={clearCompleted} aria-label="Clear completed tasks">
                Clear Completed
            </button>
            <div className="task-items" role="list">
                {tasks.length ? (
                    tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`task-anim-wrapper${animatingIds.includes(task.id) ? ' animating' : ''}`}
                        >
                            <TaskItem
                                task={task}
                                onUpdate={updateTask}
                                onDelete={() => deleteTask(task.id)}
                            />
                        </div>
                    ))
                ) : (
                    <p>No tasks found.</p>
                )}
            </div>
            {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </div>
    );
};

export default TaskList;