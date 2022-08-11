import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

  const { onInputChange, onResetForm, description } = useForm({
    description: ''
  });

  const onFormSubmit = ( e ) => {
    e.preventDefault();

    if( description <= 1 ) return;

    // Creación del nuevo todo
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    // Llamado al método padre
    onNewTodo( newTodo );

    onResetForm();
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        place="¿Qué hay que hacer?"
        type="text"
        className="form-control"
        name='description'
        value={ description }
        onChange={ onInputChange }
      />

      <button
        className="btn btn-outline-primary mt-1"
        type="submit">
        Agregar
      </button>
    </form>
  )
}