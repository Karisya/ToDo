import './App.css'
import { MainRoute } from '../routes/mainRoute'

const App = () => {

  return (
    <div className='App'>
      <MainRoute />
    </div>

  )


  // const logInPath = (nextState, replace) => { 
  //     if (!SignInStorage.isSignedin()) {
  //       replace({
  //         pathname: ‘/ signin’,
  //         state: { nextPathname: nextState.location.pathname }
  //  })
  // }
  // }
  // return (
  //   <div>
  //     <Registration></Registration>
  //     <div>have a acount? <a href='/logIn.js'>log in</a></div>
  //   </div>
  // )
  // const [todo, setToDo] = useState('')
  // const [todos, setToDos] = useState([])
  // const [edit, setEdit] = useState(null)
  // const [editingText, setEditingText] = useState('')
  // const sendTodo = (event) => {
  //   setToDo(event.target.value)
  // }
  // const deleteToDo = (itemIndex) => {
  //   const newList = todos.filter((i, index) => itemIndex !== index)
  //   setToDos(newList)
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newTodos = {
  //     key: uuidv4(),
  //     text: todo,
  //     isCompleted: false,
  //   }
  //   if (todo !== '') {
  //     setToDos([...todos].concat(newTodos))
  //   }
  // }
  // const completed = (id) => {
  //   const newTodos = [...todos].map(i => {
  //     if (i.key === id) {
  //       i.isCompleted = !i.isCompleted
  //     }
  //     return i
  //   })
  //   setToDos(newTodos)
  // }
  // const submitEdits = (id) => {
  //   const updatedTodos = [...todos].map((todo) => {
  //     if (todo.key === id) {
  //       todo.text = editingText;
  //     }
  //     return todo;
  //   });
  //   setToDos(updatedTodos);
  //   setEdit(null);
  // }
  // const setValue = (e) => {
  //   if (e.target.value !== '')
  //     setEditingText(e.target.value)

  // }

  // return (
  //   <div className="App">
  //     <div className="App__container">
  //       <div className="App__list-container list">
  //         <div className="list__content">
  //           <h1>Get things done!</h1>
  //           <TodoInput sendTodo={sendTodo} handleSubmit={handleSubmit} />
  //           <TodoList todos={todos} deleteTodo={deleteToDo} completed={completed} edit={edit} setValue={setValue} setEdit={setEdit} submitEdits={submitEdits} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default App