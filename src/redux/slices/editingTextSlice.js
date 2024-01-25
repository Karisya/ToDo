import { createSlice } from '@reduxjs/toolkit'

const editindTextSlice = createSlice({
    name: 'editingText',
    initialState: '',
    reducers: {
        setValue: (state, action) => {
            return action.payload
        },
        submitEdits: (state, action) => {
            return ''
        }
    }
})

export const { setValue, submitEdits } = editindTextSlice.actions
export default editindTextSlice.reducer