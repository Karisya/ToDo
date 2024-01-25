import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ key: uuidv4(), text: action.payload, isCompleted: false })
        },
        completed: (state, action) => {
            const task = state.find(task => task.key === action.payload)
            if (task) {
                task.isCompleted = !task.isCompleted
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(task => task.key !== action.payload)
        },
        submitEdits: (state, action) => {
            return state.map((todo) => {
                if (todo.key === action.payload.key) {
                    return {
                        ...todo, text: action.payload.text
                    }
                }
                return todo

            });
        }
    }
})

export const { addTodo, deleteTodo, completed, submitEdits } = todosSlice.actions 
export default todosSlice.reducer
