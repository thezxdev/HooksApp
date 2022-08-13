import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'zxzx',
  email: 'zxzx@gmail.com'
}

// Creación del Provider
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user }}>
      { children }
    </UserContext.Provider>
  )
}
