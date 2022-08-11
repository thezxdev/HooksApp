import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [ counter, setCounter ] = useState(10);

  // Memorizar la funcion
  const incrementFather = useCallback(
    ( value ) => {
      setCounter( ( c ) => c + value );
    },
  [] );

  // useEffect(() => {
  //   incrementFather;
  // }, [ incrementFather ] );
  

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      {/* Enviar la funcion memorizada como parametro */}
      <ShowIncrement increment={ incrementFather } />
    </>
  )
}