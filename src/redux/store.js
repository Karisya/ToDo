import {
    legacy_createStore as createStore,
    combineReducers,
    // applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// import todoInputReducer from './reducers/todoInputReducer'
import todoReducers from './reducers/todoReducers'


const rootReducer = combineReducers({
    list: todoReducers,
    //example: exampleReducer, (пример, что можно добавлять еще редьюсеры)
})

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store
