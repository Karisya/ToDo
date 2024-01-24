import { useSelector, useDispatch } from 'react-redux'
import { completed, deleteTodo, submitEdits } from '../../redux/actions/todosActions'
import { setValue } from '../../redux/actions/editingTextActions'
import { setEdit } from '../../redux/actions/editActions'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos)
    const edit = useSelector(state => state.edit.edit)
    const editingText = useSelector(state => state.editingText.editingText)

    return (
        <div className="list__todo-container" >
            <ul>{todos.map(i =>
                <div key={i.key} className="todo-item">
                    {
                        edit === i.key ?
                            (<div className='editHolder'>
                                <input className='editInput' value={editingText} type='text' onChange={(e) => dispatch(setValue(e.target.value))} />
                                <button className='editButton' type='button' onClick={() => dispatch(submitEdits(i.key, editingText))} >edit</button>
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
