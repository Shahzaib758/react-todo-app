import './App.css';

// Importing Task Context Provider
import { TaskContextProvider } from './Context/TaskContext';

// Importing Component
import { InputField } from './component/InputField';
import { TaskList } from './component/TaskList';


export const App = () => {
    return (
        <TaskContextProvider>
            <h1 className='main-heading'>Todo App</h1>
            <div className='container'>
                <InputField />
                <TaskList />
            </div>
        </TaskContextProvider>
    )
}