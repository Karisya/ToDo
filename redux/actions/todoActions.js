import { SEND } from '../store'

export const sendTodo = (value) => {
    return {
        type: SEND,
        payload: value,
    };
};
