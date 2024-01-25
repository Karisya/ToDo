import { SEND } from '../store'

const initialState = {
    todo: '',
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND:
            return { ...state, todo: action.payload }
        default:
            return state;
    }
};

export default todoReducer;
