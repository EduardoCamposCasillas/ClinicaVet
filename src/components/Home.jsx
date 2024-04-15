// Home.jsx
import Navbar from './Navbar';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom'

const Home = ({ token }) => {
  let navigate = useNavigate();
  
  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate('/');
  }
  
  // Verificar si token y sus propiedades están definidas antes de acceder a ellas
  const fullName = token && token.user && token.user.user_metadata ? token.user.user_metadata.full_name : '';

  return (
    <div>
      <Navbar />
      <Hero />
      {/* Aquí puedes añadir el resto*/}
      <div>
        <h2>Contenido adicional de la página de inicio.{fullName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
