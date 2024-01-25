import { useSelector, useDispatch } from 'react-redux'
import { completed, deleteTodo, submitEdits } from '../../redux/slices/todosSlice'
import { setValue } from '../../redux/slices/editingTextSlice'
import { setEdit } from '../../redux/slices/editSlice'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const edit = useSelector(state => state.edit)
    const editingText = useSelector(state => state.editingText)

    console.log(todos)
    const handleEdit = (key) => {
        dispatch(setEdit(key));
        dispatch(setValue(''));
    };

    const handleSaveEdit = (key) => {
        dispatch(submitEdits({ key, text: editingText }));
        dispatch(setEdit(null));
    };

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
