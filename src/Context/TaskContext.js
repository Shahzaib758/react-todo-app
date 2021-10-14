import { createContext, useReducer } from "react";
import { TaskReducer } from "./TaskReducer";

const initialState = {
    tasks: []
}

export const TaskContext = createContext(initialState);

export const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Actions
    const addTask = (task) => {
        dispatch({
            type: 'ADD TASK',
            payload: task
        })
    }

    const toggleTask = (id) => {
        dispatch({
            type: 'TOGGLE TASK',
            payload: { id }
        })
    }

    const editTask = (text, id) => {
        dispatch({
            type: 'EDIT TASK',
            payload: { text, id }
        })
    }

    const deleteTask = (id) => {
        dispatch({
            type: 'Delete TASK',
            payload: { id }
        })
    }

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            addTask,
            toggleTask,
            editTask,
            deleteTask,

        }}>
            {children}
        </TaskContext.Provider>
    )
}

