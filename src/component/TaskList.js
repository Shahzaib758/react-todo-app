import { useState, useContext, useEffect } from "react"
import { TaskContext } from "../Context/TaskContext"
import { Task } from "./Task";

export const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    const [status, setStatus] = useState('All');


    const [filterTask, setFilterTask] = useState([...tasks]);

    useEffect(() => {
        switch (status) {
            case "Completed":
                setFilterTask(tasks.filter(task => task.isCompleted))
                break;
            case "Uncompleted":
                setFilterTask(tasks.filter(task => !task.isCompleted))
                break;
            default:
                setFilterTask([...tasks])
                break;
        }
    }, [status, tasks])

    return (
        <div className='task-list'>
            <div className='task-heading'>
                <h2>{(tasks.length > 0) ? 'Tasks' : 'No Task Assign'}</h2>
                <select value={status} onChange={e => setStatus(e.target.value)} name="cars">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
            {
                filterTask.map(task => <Task key={task.id} task={task} />)
            }
        </div>
    );
}