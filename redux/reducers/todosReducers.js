import { ADD, DELETE, COMPLETED, SUBMITEDITS } from "../store"

const initialState = {
    todos: [],
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, todos: [...state.todos, action.payload] }
        case DELETE:
            return { ...state, todos: state.todos.filter(i => action.payload !== i.key) };
        case COMPLETED:
            return {
                ...state,
                todos: state.todos.map(i => {
                    return i.key === action.payload ? { ...i, isCompleted: !i.isCompleted } : i;
                })
            };
        case SUBMITEDITS:
            return {
                ...state,
                todos: state.todos.map((todo) => {

                    return todo.key === action.payload.key ?
                        { ...todo, text: action.payload.text } :
                        todo;
                }),
            };
        default:
            return state;
    }
};

export default todosReducer;