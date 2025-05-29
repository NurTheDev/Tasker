import React from 'react';

function TaskAction({onTaskAdd, onDeleteAll}) {
    /**
     * TaskAction component renders the action buttons for managing tasks.
     * It includes buttons to add a new task and delete all tasks.
     * The component is styled with Tailwind CSS for a modern look.
     */
    const handleAddTask = () => {
        onTaskAdd(true);
    }
    return (
        <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
                <button  className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold cursor-pointer" onClick={handleAddTask}>Add Task
                </button>
                <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold cursor-pointer" onClick={onDeleteAll}>Delete All
                </button>
            </div>
        </div>
    );
}

export default TaskAction;
