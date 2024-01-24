import { EDIT, SUBMITEDITS } from "../store"

const initialState = {
    edit: null,
}

const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT:
            return {
                ...state, edit: action.payload
            }
        case SUBMITEDITS:
            return {
                ...state, edit: null
            }
        default:
            return state;
    }
}

export default editReducer;