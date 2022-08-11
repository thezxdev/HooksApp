
// Estado inicial del reducer
const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false
}];

// Usualmente se utilizan los reducers cuando se tiene un objeto elaborado y se quiere realizar varios cambios al mismo
const todoReducer = ( state = initialState, action = {} ) => {

  if( action.type === '[TODO] add todo' ) {
    return [ ...state, action.payload ];
  }

  return state;
}

let todos = todoReducer();

// Valor a añadir al reducer
const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
}

// Acción de agregar del reducer
const addTodoAction = {
  type: '[TODO] add todo', // Nombre de la acción
  payload: newTodo // Valor a agregar

}

// Llamado al reducer
todos = todoReducer( todos, addTodoAction  );

console.log( {state: todos} );