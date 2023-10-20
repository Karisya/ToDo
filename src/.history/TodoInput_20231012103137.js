export const TodoInput = ({ sendTodo,  handleSubmit }) => {
    return (
        <div className="list__input-conteiner">
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={sendTodo} />
                <button type='submit'  >Add task</button>
            </form>
        </div>
    )
}