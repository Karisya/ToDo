import { useSelector, useDispatch } from 'react-redux'
import { setValue, submitEdits, completed, setEdit, deleteTodo } from '../../redux/actions/todoActions'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.list.todos)
    const edit = useSelector(state => state.list.edit)
    return (
        <div className="list__todo-container" >
            <ul>{todos.map(i =>
                <div key={i.key} className="todo-item">
                    {
                        edit === i.key ?
                            (<div className='editHolder'>
                                <input className='editInput' type='text' onChange={(e) => dispatch(setValue(e.target.value))} />
                                <button className='editButton' type='button' onClick={() => dispatch(submitEdits(i.key))} >edit</button>
                            </div>) :
                            (
                                <div key={i.key} className={i.isCompleted ? 'complete' : 'noComplete'} onClick={() => dispatch(completed(i.key))}>{i.text}</div>)
                    }

                    <div className='todo-item__btn-container'>
                        <div >
                            {i.key !== edit && (
                                <div className='todo-item__icons'>
                                    <EditOutlined style={{ fontSize: '20px' }} onClick={() => dispatch(setEdit(i.key))} />
                                    <DeleteOutlined style={{ fontSize: '20px' }} onClick={() => dispatch(deleteTodo(i.key))} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>)}
            </ul>
        </div>
    )
}
