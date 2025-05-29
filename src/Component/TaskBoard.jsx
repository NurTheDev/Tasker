import React, {useState} from 'react';
import SearchTask from "./Task/SearchTask.jsx";
import TaskAction from "./Task/TaskAction.jsx";
import TaskList from "./Task/TaskList.jsx";
import TaskModal from "./Task/TaskModal.jsx";

function TaskBoard() {
    const [showModal, setShowModal] = useState(false);

    /**
     * TaskBoard component renders the task management section of the application.
     * It includes a search box, task actions (like adding or deleting tasks), and a list of tasks.
     * The component is styled with Tailwind CSS for a modern look.
     */
    const [tasks, setTask] = useState([
        {
            id: crypto.randomUUID(),
            title: "Learn React",
            description: "Learn React from scratch",
            tags:["React", "JavaScript"],
            priority: "Medium"

        },
        {
            id: crypto.randomUUID(),
            title: "Learn Tailwind CSS",
            description: "Learn Tailwind CSS from scratch",
            tags: ["Tailwind CSS", "CSS"],
            priority: "High"
        },
        {
            id: crypto.randomUUID(),
            title: "Learn JavaScript",
            description: "Learn JavaScript from scratch",
            tags: ["JavaScript" , "Programming", "Web Development"],
            priority: "Low"
        },
        {
            id: crypto.randomUUID(),
            title: "Learn Node.js",
            description: "Learn Node.js from scratch",
            tags: ["Node.js", "JavaScript"],
            priority: "Medium"
        },
        {
            id: crypto.randomUUID(),
            title: "Learn Express.js",
            description: "Learn Express.js from scratch",
            tags: ["Express.js", "Node.js"],
            priority: "High"
        }
    ])
    return (
        <section className="mb-20" id="tasks">
            <div className="container mx-auto">
                {/*Search Box*/}
                <div className="p-2 flex justify-end">
                    <SearchTask/>
                </div>
                {/*Search Box Ends*/}
                {showModal && (
                    <>
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"></div>
                        <div className={"fixed inset-0 z-50 flex items-center justify-center top-0 left-0"}>
                            <TaskModal handleModal={setShowModal}/>
                        </div>
                    </>
                )}
                <div
                    className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction onTaskAdd={setShowModal}/>
                    <div className="overflow-auto">
                        <TaskList tasks={tasks}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaskBoard;
