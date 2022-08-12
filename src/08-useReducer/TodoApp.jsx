import { useEffect } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

// const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 3,
  //   description: 'Recolectar la piedra del tiempo',
  //   done: false,
  // },
// ];

export const TodoApp = () => {

  const { handleDeleteTodo, handleTodo, handleToggleTodo, todos } = useTodos();

  return (
    <>
      <h1>TodoApp: (10), <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList
            todos={ todos }
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
          {/* Fin TodoList */}
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo( todo ) */}
          <TodoAdd onNewTodo={ handleTodo } />
          {/* Fin TodoAdd */}
        </div>

      </div>

    </>
  )
}
