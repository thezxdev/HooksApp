import { useState } from "react"

export const CounterApp = () => {

  const [ state, setCounter ] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const { counter1, counter2, counter3 } = state; // Desestructuración del state para obtener los valores individuales.

  return (
    <>
      <h1>Counter: { counter1 }</h1>
      <h1>Counter: { counter2 }</h1>
      <h1>Counter: { counter3 }</h1>

      <hr />

      <button
        className="btn"
        onClick={ () => setCounter( {
          ...state, // Uso del operador spread para asignar las propiedades que no vamos a modificar
          counter1: counter1 + 1,
          // counter2,
          // counter3
        } ) }
      >+1</button>
    </>
  )
}
