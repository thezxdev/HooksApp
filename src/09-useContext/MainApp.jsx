import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

// Componente en el que se van a mostrar todas las rutas
export const MainApp = () => {
  return (
    // Utilización del proveedor | Cualquier elemento dentro de el y sus subcomponentes tendrán acceso a la información del UserProvider
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      <NavBar />
      <hr />
      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="about" element={ <AboutPage /> } />
        {/* Cargar un componente cuando no se encuentre una ruta */}
        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        {/* Mover a una ruta cuando no se encuentre una ruta */}
        <Route path="/*" element={ <Navigate to="/about" />  } />
      </Routes>

    </UserProvider>
  )
}
