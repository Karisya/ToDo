import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'

export const TodoList = ({ todos, deleteTodo, completed, edit, handleEdit, handleSaveEdit, setValue }) => {

    const dispatch = useDispatch();
    const editingText = useSelector(state => state.editingText)

    return (
        <div className="list__todo-container" >
            <ul>{todos.map(i =>
                <div key={i.key} className="todo-item">
                    {
                        edit === i.key ?
                            (<div className='editHolder'>
                                <input className='editInput' value={editingText} type='text' onChange={(e) => dispatch(setValue(e.target.value))} />
                                <button className='editButton' type='button' onClick={() => handleSaveEdit(i.key)} >edit</button>
                            </div>) :
                            (
                                <div key={i.key} className={i.isCompleted ? 'complete' : 'noComplete'} onClick={() => dispatch(completed(i.key))}>{i.text}</div>)
                    }

                    <div className='todo-item__btn-container'>
                        <div >
                            {i.key !== edit && (
                                <div className='todo-item__icons'>
                                    <EditOutlined style={{ fontSize: '20px' }} onClick={() => handleEdit(i.key)} />
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