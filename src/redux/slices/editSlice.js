import { createSlice } from '@reduxjs/toolkit'

const editSlice = createSlice({
    name: 'edit',
    initialState: null,
    reducers: {
        setEdit: (state, action) => {
            return action.payload
        },
        submitEdits: (state, action) => { 
            return null
        }
    }
})

export const { setEdit, submitEdits} = editSlice.actions
export default editSlice.reducer