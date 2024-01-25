import { useDispatch, useSelector } from 'react-redux';
import { sendTodo } from '../../redux/slices/todoSlice';
import { addTodo } from '../../redux/slices/todosSlice';

export const TodoInput = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo)
    console.log(todo)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo !== '') {
            dispatch(addTodo(todo));
            dispatch(sendTodo(''))
        }
    }
    return (
        <div className="list__input-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' value={todo} onChange={(e) => dispatch(sendTodo(e.target.value))} />
                <button type='submit'>Add task</button>
            </form>
        </div>
    )
}
