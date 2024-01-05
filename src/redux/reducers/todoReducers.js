const initialState = {
    todo: '',
    todos: [],
    edit: null,
    editingText: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND':
            return { ...state, todo: action.payload }
        case 'ADD':
            return { ...state, todos: [...state.todos, action.payload] }
        case 'DELETE':
            return { ...state, todos: state.todos.filter(i => action.payload !== i.key) };
        case 'COMPLETED':
            return {
                ...state,
                todos: state.todos.map(i => {
                    return i.key === action.payload ? { ...i, isCompleted: !i.isCompleted } : i;
                })
            };
        case 'SUBMITEDITS':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.key === action.payload) {
                        return { ...todo, text: state.editingText };
                    }
                    return todo;
                }),
                edit: null,
                editingText: '',
            };
        case "VALUE":
            return {
                ...state, editingText: action.payload
            }
        case 'EDIT':
            return {
                ...state, edit: action.payload
            }
        default:
            return state;
    }
};

export default todoReducer;