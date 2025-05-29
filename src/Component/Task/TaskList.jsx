import React from 'react';
import {FaStar} from "react-icons/fa";

function TaskList({tasks, onEdit, onDelete, onFavorite}) {
    return (
        <table className="table-fixed overflow-auto xl:w-full">
            <thead>
            <tr>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title</th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description</th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags</th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority</th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options</th>
            </tr>
            </thead>
            <tbody>
            {tasks?.map((task) => (
                <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                    <td>
                        <div onClick={() => onFavorite(task)} className="cursor-pointer">{
                            task.isFavorite ? <FaStar className={"text-yellow-300"}/> :
                                <FaStar className={"text-gray-600"}/>
                        }</div>
                    </td>
                    <td>{task.title}</td>
                    <td>
                        <div>
                            {task.description.length > 100}
                            <p>{task.description}</p>
                        </div>
                    </td>
                    <td>
                        <ul className="flex justify-center gap-1.5 flex-wrap">
                            {task.tags.map((tag) => (
                                <li>
											<span
                                                className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${Math.random() > 0.5 ? 'bg-[#A3BE8C]' : Math.random() > 0.5 ? 'bg-[#B48EAD]' : 'bg-[#BF616A]'} px-2.5 text-sm capitalize text-[#F4F5F6]`}>{tag}</span>
                                </li>
                            ))}

                        </ul>
                    </td>
                    <td className="text-center">{task.priority}</td>
                    <td>
                        <div className="flex items-center justify-center space-x-3">
                            <button className="text-red-500 cursor-pointer" onClick={() => onDelete(task)}>Delete
                            </button>
                            <button className="text-blue-500 cursor-pointer" onClick={() => onEdit(task)}>Edit</button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TaskList;
