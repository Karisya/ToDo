import { EDIT, SUBMITEDITS } from "../store"

export const setEdit = (value) => {
    return {
        type: EDIT,
        payload: value,
    }
}

export const submitEdits = (id) => {
    return {
        type: SUBMITEDITS,
        payload: id,
    }
}