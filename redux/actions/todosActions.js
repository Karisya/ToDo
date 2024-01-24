import { ADD, DELETE, COMPLETED, SUBMITEDITS } from "../store"
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todo) => {
    return {
        type: ADD,
        payload: {
            key: uuidv4(),
            text: todo,
            isCompleted: false,
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE,
        payload: id,
    }
}

export const completed = (id) => {
    return {
        type: COMPLETED,
        payload: id,
    }
}

export const submitEdits = (id, text) => {
    return {
        type: SUBMITEDITS,
        payload: {
            key:id,
            text:text,
        }
    }
}
