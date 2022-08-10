// import { memo } from 'react';
import React from 'react';

// Memorizar el componente, solo cuando las propiedades cambian se va a volver a ejecutar el componente
export const Small = React.memo(( { value } ) => {

  console.log('Me volví a generar');

  return (
    <small>{ value }</small>
  )
})
