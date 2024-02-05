import { useDispatch } from 'react-redux'

export const TodoInput = ({ todo, sendTodo, handleSubmit }) => {
    const dispatch = useDispatch()
    return (
        <div className="list__input-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className='list__input-fuild' type='text' value={todo} onChange={(e) => dispatch(sendTodo(e.target.value))} />
                <button className='list__input-button'type='submit'>Add task</button>
            </form>
        </div>
    )
}