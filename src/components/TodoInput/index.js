import { useDispatch, useSelector } from 'react-redux';
import { addTodo, sendTodo } from '../../redux/actions/todoActions';

export const TodoInput = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.list.todo)
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
