import { VALUE, SUBMITEDITS } from "../store"

export const setValue = (value) => {
    return {
        type: VALUE,
        payload: value,
    }
}
export const submitEdits = (id) => {
    return {
        type: SUBMITEDITS,
        payload: id,
    }
}
