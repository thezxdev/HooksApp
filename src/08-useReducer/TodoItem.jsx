
export const TodoItem = ({ todo, onDeleteTodo }) => {

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{ todo.description }</span>
      <button
        onClick={ () => onDeleteTodo( todo.id ) } // Ejecutar función para eliminar todo
        className="btn btn-danger"
      >Borrar</button>
    </li>
  )
}
