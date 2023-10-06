import './index.css'

const TodoItem = props => {
  const {TodoDetails, deleteTodo} = props
  const {title, id} = TodoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
