import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  // Utilización del useContext, recibe como parámetro el contexto que queremos obtener.
  const { user, setUser } = useContext( UserContext );
  console.log( user );

  return (
    <>
      <h1>LoginPage</h1>

      <pre>
        { JSON.stringify( user, null, 3 ) }
      </pre>

      <button
        onClick={ () => setUser( { id: 123, name: 'zxzx', email: 'zxzx@gmail.com' } ) }
        className="btn btn-primary">
        Set User
      </button>
    </>
  )
}
