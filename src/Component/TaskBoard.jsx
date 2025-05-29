import React, {useState} from 'react';
import SearchTask from "./Task/SearchTask.jsx";
import TaskAction from "./Task/TaskAction.jsx";
import TaskList from "./Task/TaskList.jsx";
import TaskModal from "./Task/TaskModal.jsx";

function TaskBoard() {
    const defaultTask ={
        id: crypto.randomUUID(),
        title: "Learn Express.js",
        description: "Learn Express.js from scratch",
        tags: ["Express.js", "Node.js"],
        priority: "High"
    }
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTask] = useState([defaultTask])
    const [editTask, setEditTask] = useState(null);
    const handleAddTask = (task, isEdit) => {
        if(isEdit){
            setTask([...tasks, task]);
        }
        else{
            const updatedTask = tasks.map((t)=>{
                if(t.id === task.id){
                    return task;
                }
                return t;
            })
            setTask(updatedTask);
        }
        console.log("from Edit Task:", isEdit);
        setShowModal(false);
    }
    const handleEditTask = (task)=>{
        setEditTask(task);
        setShowModal(true);
        console.log("Edit Task:", isEdit);
    }
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
                            <TaskModal handleModal={setShowModal} onSave={handleAddTask} tasks={editTask}/>
                        </div>
                    </>
                )}
                <div
                    className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction onTaskAdd={setShowModal}/>
                    <div className="overflow-auto">
                        <TaskList tasks={tasks} onEdit={handleEditTask}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaskBoard;
