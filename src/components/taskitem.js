import React, { useState } from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(task.text);

    const toggleComplete = () =>
        onUpdate({ ...task, completed: !task.completed });

    const saveEdit = () => {
        onUpdate({ ...task, text });
        setEditing(false);
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            onDelete();
            // TODO: trigger notification
        }
    };

    return (
        <div
            className={`task-item ${task.completed ? "completed" : ""}`}
            role="listitem"
            aria-label={task.text}
            tabIndex={0}
            onKeyDown={e => {
                if (e.key === 'Enter' && !editing) setEditing(true);
            }}
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={toggleComplete}
                aria-checked={task.completed}
                aria-label={task.completed ? `Mark '${task.text}' as incomplete` : `Mark '${task.text}' as complete`}
            />
            {editing ? (
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    aria-label="Edit task text"
                    onKeyDown={e => {
                        if (e.key === 'Enter') saveEdit();
                        if (e.key === 'Escape') setEditing(false);
                    }}
                    autoFocus
                />
            ) : (
                <span>{task.text}</span>
            )}
            {editing ? (
                <button onClick={saveEdit} aria-label="Save task">Save</button>
            ) : (
                <button onClick={() => setEditing(true)} aria-label="Edit task">Edit</button>
            )}
            <button onClick={handleDelete} aria-label={`Delete task '${task.text}'`}>Delete</button>
        </div>
    );
};

export default TaskItem;