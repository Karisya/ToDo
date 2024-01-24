
import {
    legacy_createStore as createStore,
    combineReducers,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import todoReducer from './reducers/todoReducers'
import todosReducer from './reducers/todosReducers'
import editReducer from './reducers/editReducers'
import editingTextReducer from './reducers/editingTextReducers'

export const SEND = 'SEND';
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const COMPLETED = 'COMPLETED';
export const SUBMITEDITS = 'SUBMITEDITS';
export const EDIT = 'EDIT';
export const VALUE = 'VALUE';

const rootReducer = combineReducers({
    todo: todoReducer,
    todos: todosReducer,
    edit: editReducer,
    editingText: editingTextReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store
