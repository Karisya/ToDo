export const TodoList = ({ todos, deleteTodo, completed, edit, setEdit, submitEdits, setValue }) => {
    return (
        <div className="list__todo-container" >
            <ul>{todos.map(i =>
                <div key={i.key} className="todo-item">
                    {
                        edit === i.key ?
                            (<div className='editHolder'>
                                <input className='editInput' type='text' onChange={setValue} />
                                <div className='editButton' type='button' onClick={() => submitEdits(i.key)} >edit</div>
                            </div>) :
                            (
                                <div key={i.key} className={i.isCompleted ? 'complete' : 'noComplete'} onClick={() => completed(i.key)}>{i.text}</div>)
                    }

                    <div className='todo-item__btn-container'>
                        <div >
                            {i.key !== edit && (
                                <div className='todo-item__icons'>
                                    <div onClick={() => setEdit(i.key)}> <img className="iconEdit" src={require('../img/pencil.svg').default} /></div>
                                    <img className="iconDelete" onClick={() => deleteTodo(i.key)} src={require('../img/bin.svg').default} />
                                </div>
                            )}
                        </div>
                    </div>

                </div>)}
            </ul>
        </div>
    )
}