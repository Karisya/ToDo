import { VALUE, SUBMITEDITS } from "../store"

const initialState = {
    editingText: '',
}

const editingTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case VALUE:
            return {
                ...state, editingText: action.payload
            }

        case SUBMITEDITS:
            return {
                ...state, editingText: ''
            }
        default:
            return state;
    }
}

export default editingTextReducer;