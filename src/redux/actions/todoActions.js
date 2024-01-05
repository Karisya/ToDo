import { v4 as uuidv4 } from 'uuid';

export const deleteTodo = (id) => {
    return {
        type: 'DELETE',
        payload: id,
    }
}

export const completed = (id) => {
    return {
        type: 'COMPLETED',
        payload: id,
    }
}

export const submitEdits = (id) => {
    return {
        type: 'SUBMITEDITS',
        payload: id,
    }
}

export const setEdit = (value) => {
    return {
        type: "EDIT",
        payload: value,
    }
}


export const setValue = (value) => {
    return {
        type: "VALUE",
        payload: value,
    }
}

export const sendTodo = (value) => {
    return {
        type: 'SEND',
        payload: value,
    };
};

export const addTodo = (todo) => {
    return {
        type: 'ADD',
        payload: {
            key: uuidv4(),
            text: todo,
            isCompleted: false,
        },
    };
};

