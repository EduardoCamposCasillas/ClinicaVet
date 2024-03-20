import Navbar from './Navbar';

const Services = () => {
  return (
    <div>
    <Navbar/>
      {/* Contenido de la página de servicios */}
      <div className='relative z-0 filter'>
      <img src='/images/banner.jpg' className='w-full h-auto '></img>
      <h2 className='text-4xl font-bold text-center text-[#004f6f]'>Servicios</h2>
      <p className='pt-4 text-center text-balance text-xl'>En Clínica Veterinaria Ciudad Guzman ofrecemos una asistencia completa y de calidad a tu mascota. Nuestro principal objetivo es mantener la salud y el bienestar de nuestros animales y ayudarlos a restablecerse cuando están enfermos. Para ello, contamos con un personal altamente cualificado e instalaciones modernas y bien equipadas.</p>
      
      </div>
    </div>
  );
};

export default Services;
