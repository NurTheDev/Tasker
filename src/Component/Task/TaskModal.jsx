import React, {useState} from 'react';
import {IoMdCloseCircleOutline} from "react-icons/io";

function TaskModal({handleModal}) {
    const [addTask, setAddTask] = useState({
        id: crypto.randomUUID(),
        title: '',
        description: '',
        tags: '',
        priority: ''
    });
    const handleInput = (e) => {
        setAddTask({
            ...addTask,
            [e.target.name]: e.target.value
        })
    }
    return (
    <form
            className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
        >
            <div className={"flex items-center justify-between text-2xl font-bold text-white lg:mb-11  mb-9"}>
                <h2
                    className="text-center lg:text-[28px]"
                >
                    Add New Task
                </h2>
                <span className={"cursor-pointer text-[#FEFBFB]/[36%] lg:text-3xl hover:text-[#FEFBFB]/[60%]" +
                    " transition-all"} onClick={() => handleModal(false)}>
               <IoMdCloseCircleOutline/>
                </span>
            </div>

        {/*inputs*/}
            <div className="space-y-9 text-white lg:space-y-10">
                {/*title*/}
                <div className="space-y-2 lg:space-y-3">
                    <label htmlFor="title">Title</label>
                    <input
                        className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={addTask.title}
                        onChange ={handleInput}
                    />
                </div>
                {/*description*/}
                <div className="space-y-2 lg:space-y-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                        type="text"
                        name="description"
                        id="description"
                        onChange ={handleInput}
                        value={addTask.description}
                        required
                    ></textarea>
                </div>
                {/*input group*/}
                <div
                    className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                >
                    {/*tags*/}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="tags">Tags</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="tags"
                            id="tags"
                            value={addTask.tags}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    {/*priority*/}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="priority">Priority</label>
                        <select
                            className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                            name="priority"
                            id="priority"
                            required
                            value={addTask.priority}
                            onChange={handleInput}
                        >
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
            </div>
        {/*inputs ends*/}
            <div className="mt-16 flex justify-center lg:mt-20">
                <button
                    type="submit"
                    className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                >
                    Create new Task
                </button>
            </div>
        </form>
    // Add Task Form Ends
);
}

export default TaskModal;
