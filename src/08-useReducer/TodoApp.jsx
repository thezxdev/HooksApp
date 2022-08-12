import { useEffect } from 'react';
import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './TodoReducer';

const initialState = [
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
];

const initReducer = () => {
  return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, initReducer );

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify( todos ) );
  }, [ todos ] );
  

  const handleTodo = ( todo ) => {
    // console.log({ todo });
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    // Mandar acción al reducer
    dispatchTodo( action );

  }

  return (
    <>
      <h1>TodoApp: (10), <small>Pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList todos={ todos } />
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
