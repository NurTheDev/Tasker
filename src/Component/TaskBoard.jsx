import React, {useState} from 'react';
import SearchTask from "./Task/SearchTask.jsx";
import TaskAction from "./Task/TaskAction.jsx";
import TaskList from "./Task/TaskList.jsx";
import TaskModal from "./Task/TaskModal.jsx";
import EmptyMessage from "./EmptyMessage.jsx";

function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Learn Express.js",
        description: "Learn Express.js from scratch",
        tags: ["Express.js", "Node.js"],
        priority: "High",
        isFavorite: false
    }
    const [showModal, setShowModal] = useState(false);
    const [tasks, setTask] = useState([defaultTask])
    const [editTask, setEditTask] = useState(null);
    const handleAddTask = (task, isEdit) => {
        if (isEdit) {
            setTask([...tasks, task]);
        } else {
            const updatedTask = tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                }
                return t;
            })
            setTask(updatedTask);
        }
        console.log("from Edit Task:", isEdit);
        setShowModal(false);
    }
    const handleEditTask = (task) => {
        setEditTask(task);
        setShowModal(true);
    }
    const handleDelteTask = (task) => {
        // Logic to delete a task
        // This function can be implemented later
        console.log("Delete Task", task);
        const updatedTasks = tasks.filter(t => t.id !== task.id);
        setTask(updatedTasks);
    }
    const handleDeleteAllTasks = () => {
        // Logic to delete all tasks
        // This function can be implemented later
        console.log("Delete All Tasks");
        setTask([]);
    }
    const handleFavoriteTask = (task) => {
        // Logic to favorite a task
        // This function can be implemented later
        console.log("Favorite Task", task);
        const updatedTasks = tasks.map(t => {
            if (t.id === task.id) {
                return {...t, isFavorite: !t.isFavorite}
            }
            return t;
        })
        setTask(updatedTasks);
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
                    <TaskAction onTaskAdd={setShowModal} onDeleteAll={handleDeleteAllTasks}/>
                    <div className="overflow-auto">
                        {tasks.length > 0 ?
                            <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDelteTask} onFavorite={handleFavoriteTask}/> :
                            <EmptyMessage/>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaskBoard;
