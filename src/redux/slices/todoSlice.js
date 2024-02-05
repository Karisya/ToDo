import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: '',
    reducers: {
        sendTodo: (state, action) => {
            return action.payload
        },
    }
})

export const { sendTodo } = todoSlice.actions
export default todoSlice.reducer




