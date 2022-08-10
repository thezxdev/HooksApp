import { useRef } from 'react';

export const FocusScreen = () => {

  // Nos permite mantener una referencia, y cuando esa referencia cambia no se vuelva a renderizar el componente.
  const inputRef = useRef();
  // console.log( ref );

  const onClick = () => {
    console.log( inputRef );
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        />

      <button
        onClick={ onClick }
        className="btn btn-primary mt-2"
      >
        Set focus
      </button>
    </>
  )
}