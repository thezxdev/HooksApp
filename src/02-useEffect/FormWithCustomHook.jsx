import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // });

  // const { username, email, password } = formState;

  // const onInputChange = ({ target }) => {
  //   const { name, value } = target;

  //   setFormState({
  //     ...formState,
  //     [ name ]: value // Propiedades computadas
  //   })
  // }

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  // // No se recomienda tener un eseEffect sin dependencias
  // useEffect( () => {
  //   // console.log( 'useEffect called' );
  // }, [] );

  // // Se recomienda tener un eseEffect por cada efecto o acción secundaria que se quiera realizar
  // useEffect( () => {
  //   // console.log( 'formState changed' );
  // }, [ formState ] );

  // useEffect( () => {
  //   // console.log( 'email changed' );
  // }, [ email ] );

  return (
    <>
      <h1>Form Custom Hook</h1>

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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <button
        onClick={ onResetForm }
        className="btn btn-primary mt-2"
      >
        Borrar
      </button>

    </>
  )
}
