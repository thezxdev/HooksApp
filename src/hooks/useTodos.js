import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/TodoReducer';

const initialState = [];

// Función para iniciar los valores del reducer
const initReducer = () => {
  return JSON.parse( localStorage.getItem('todos')) || []; // Leer los datos del localStorage 
}

export const useTodos = () => {


  const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState, initReducer ); // Añadir función inicializadora del reducer.

  // Guardar datos en el localStorage cada vez que cambian los valores
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

  // Función para eliminar todo por id
  const handleDeleteTodo = ( id ) => {
    // console.log( id );
    dispatchTodo({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    dispatchTodo({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

  return {
    handleTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos
  }
}
