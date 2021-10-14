export const TaskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD TASK':
            return { tasks: [action.payload, ...state.tasks] };

        case 'Delete TASK':
            return {
                tasks: state.tasks.filter(task =>
                    task.id !== action.payload.id
                )
            }
        
        case 'EDIT TASK':
            return {
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, text: action.payload.text } : task
                )
            }

        case 'TOGGLE TASK':
            return {
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, isCompleted: !task.isCompleted } : task
                )
            }
        default:
            return state;
    }
}