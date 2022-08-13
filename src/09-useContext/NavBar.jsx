import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      {/* Enlaces para cambiar de pantalla / componente */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </>
  )
}
