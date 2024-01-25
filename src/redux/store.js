import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import todosSlice from './slices/todosSlice'
import editSlice from './slices/editSlice'
import editingTextSlice from './slices/editingTextSlice'

const store = configureStore({
    reducer: {
        todo: todoSlice,
        todos: todosSlice,
        edit: editSlice,
        editingText: editingTextSlice,
    }
})

export default store