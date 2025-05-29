// EmptyTask.jsx
import React from 'react';

function EmptyMessage() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-gray-400 mb-4"
            >
                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
                <path d="M3 7l9-4 9 4"/>
                <path d="M12 21v-8"/>
                <path d="M8 13V9"/>
                <path d="M16 13V9"/>
            </svg>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No tasks yet</h3>
            <p className="text-gray-500 text-center max-w-md">
                You don't have any tasks in your list. Click the "Add Task" button to create a new task.
            </p>
        </div>
    );
}

export default EmptyMessage;
