import { v4 as uuidv4 } from 'uuid';


export const TodoList = ({ todos, deleteTodo, completed, edit, setEdit, submitEdits, setValue, editingText }) => {

    

    return (
        <div className="list__todo-conteiner" >
            <ul>{todos.map((i, index) =>
                <div key={i.key} className="todo-item">
                    {
                        edit === i.key ?
                            (<div>
                                <input type='text' onChange={setValue} />
                                <button type='button' onClick={() => submitEdits(i.key)} >edit</button>
                            </div>) :
                            (<div key={i.key} className={i.isCompleted ? 'complete' : 'noComplete'} onClick={() => completed(i.key)}>{i.text}</div>)
                    }

                    <div className='todo-item__btn-container'>
                        <div >
                            {i.key === edit ? '' : (
                                <div>
                                    <div onClick={() => setEdit(i.key)}> <img className="iconEdit" src={require('./img/pencil.svg').default} /></div>
                                    <div className='todo-item__icons' key={uuidv4()} onClick={() => deleteTodo(index)}>
                                        <img className="iconDelete" src={require('./img/bin.svg').default} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>)}
            </ul>
        </div>
    )
}