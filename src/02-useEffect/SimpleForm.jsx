import { useEffect, useState } from "react"

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: 'zxzx',
    email: 'zxzx@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [ name ]: value // Propiedades computadas
    })
  }

  // No se recomienda tener un eseEffect sin dependencias
  useEffect( () => {
    console.log( 'useEffect called' );
  }, [] );

  // Se recomienda tener un eseEffect por cada efecto o acción secundaria que se quiera realizar
  useEffect( () => {
    console.log( 'formState changed' );
  }, [ formState ] );

  useEffect( () => {
    console.log( 'email changed' );
  }, [ email ] );

  return (
    <>
      <h1>SimpleForm</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@correo.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

    </>
  )
}
