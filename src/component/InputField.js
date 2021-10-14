import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export const InputField = () => {
    const { addTask } = useContext(TaskContext);
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({id: Date.now(),text,isCompleted: false});
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <button type='submit' className='btn'><i className="fas fa-list-ul"></i></button>
        </form>
    );
}