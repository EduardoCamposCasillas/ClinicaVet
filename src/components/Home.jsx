import Navbar from './Navbar';
import Hero from './Hero,';

const Home = () => {
   
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Aquí puedes añadir el resto*/}
      <div>
        <h2>Contenido adicional de la página de inicio...</h2>
      </div>
    </div>
  );
};

export default Home;