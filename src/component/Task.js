import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";


export const Task = ({ task }) => {
    const { toggleTask, editTask, deleteTask } = useContext(TaskContext)
    const [text, setText] = useState(task.text);

    const [isEditTask, setIsEditTask] = useState(false);


    const handleToggle = () => {
        toggleTask(task.id);
    }

    const handleEdit = () => {
        editTask(text, task.id);
        setIsEditTask(!isEditTask);
    }

    const handleDelete = () => {
        deleteTask(task.id);
    }

    return (
        <>
            <div className='task'>
                {
                    isEditTask
                        ? <input value={text} onChange={e => setText(e.target.value)} />
                        : <p style={{
                            opacity: `${task.isCompleted ? '0.2' : '1'}`,
                            textDecoration: `${task.isCompleted ? 'line-through' : 'none'}`,
                        }}>
                            {task.text} </p>
                }
                <div className='button'>

                    {/* Toggle Button */}
                    <button className='btn'
                        style={{
                            display: `${isEditTask ? 'none' : 'block'}`
                        }}
                        onClick={handleToggle}><i className="fas fa-check"></i></
                    button>

                    {/* Edit Button */}
                    <button className='btn'
                        style={{
                            display: `${isEditTask ? 'none' : 'block'}`
                        }}
                        onClick={() => setIsEditTask(!isEditTask)}><i className="fas fa-pen"></i></
                    button>

                    {/* Save Edit Button */}
                    <button className='btn'
                        style={{
                            display: `${isEditTask ? 'block' : 'none'}`
                        }}
                        onClick={handleEdit}><i className="fas fa-pen"></i></
                    button>

                    {/* Delete Button */}
                    <button className='btn'
                        style={{
                            display: `${isEditTask ? 'none' : 'block'}`
                        }}
                        onClick={handleDelete}><i className="far fa-trash-alt"></i></
                    button>
                </div>
            </div>
        </>
    );
}