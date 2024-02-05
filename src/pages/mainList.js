import { useSelector, useDispatch } from 'react-redux'
import { completed, deleteTodo, submitEdits } from '../redux/slices/todosSlice'
import { setValue } from '../redux/slices/editingTextSlice'
import { setEdit } from '../redux/slices/editSlice'
import { sendTodo } from '../redux/slices/todoSlice';
import { addTodo } from '../redux/slices/todosSlice';
import { TodoList } from '../components/TodoList';
import { TodoInput } from '../components/TodoInput';
import { Link } from 'react-router-dom'

export const MainList = () => {

    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo)
    const todos = useSelector(state => state.todos)
    const edit = useSelector(state => state.edit)
    const editingText = useSelector(state => state.editingText)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo !== '') {
            dispatch(addTodo(todo));
            dispatch(sendTodo(''))
        }
    }

    const handleEdit = (key) => {
        dispatch(setEdit(key));
        dispatch(setValue(''));
    };

    const handleSaveEdit = (key) => {
        dispatch(submitEdits({ key, text: editingText }));
        dispatch(setEdit(null));
    };

    return (
        <div className="App">
            <div className="App__container">
                <div className="App__list-container list">
                    <div className="list__content">
                        <h1>Get things done!</h1>
                        <TodoInput todo={todo} sendTodo={sendTodo} handleSubmit={handleSubmit} />
                        <TodoList todos={todos} deleteTodo={deleteTodo} completed={completed} edit={edit} setValue={setValue} handleSaveEdit={handleSaveEdit} handleEdit={handleEdit} />
                    </div>
                </div>
            </div>
            <div className="logOut" ><Link to='/registrationForm' onClick={localStorage.removeItem("token")}>Log out</Link></div>
        </div>
    )
}