import React from 'react';

// Utilizar memo para memorizar el componente
export const ShowIncrement = React.memo(({ increment }) => {

  console.log('Me volvi a llamar');

  return (
    <button
      className="btn btn-primary"
      onClick={ () => increment() }
    >
      Incrementar
    </button>
  )
})