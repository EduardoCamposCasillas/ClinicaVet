import Navbar from './Navbar';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();


  function handleLogout() {
    navigate('/');
  }
  
  //Encontrar la forma que mediante el token me de los datos

  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* Aquí puedes añadir el resto*/}
      <div>
        
          <h2>Bienvenido,</h2>
      
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
