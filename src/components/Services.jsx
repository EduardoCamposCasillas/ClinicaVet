import Navbar from './Navbar';

const Services = () => {
  return (
    <div>
      <Navbar />
      {/* Contenido de la página de servicios */}
      <div className='relative z-0 filter'>
        <img src='/images/banner.jpg' className='w-full h-auto '></img>
        <h2 className='text-4xl font-bold text-center text-[#004f6f]'>Servicios</h2>
        <p className='pt-4 text-center text-balance text-xl'>En Clínica Veterinaria Ciudad Guzman ofrecemos una asistencia completa y de calidad a tu mascota. Nuestro principal objetivo es mantener la salud y el bienestar de nuestros animales y ayudarlos a restablecerse cuando están enfermos. Para ello, contamos con un personal altamente cualificado e instalaciones modernas y bien equipadas.</p>

      </div>
      <div className=''>
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shaddow'>
          <a href='#'>
            <img className='rounded-t-lg' src='/images/servicios/consulta-veterinaria.jpg' />
          </a>
          <div className='p-5'>
            <a>
              <h5 className='mb-3 text-2xl font-bold tracking-tight text-gray-900'>Consulta General</h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 '>
              Atención veterinaria completa para tu mascota. Consultas generales disponibles.
            </p>
            <a href='' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg'>Agendar Cita</a>
          </div>
        </div>
        {/* */}

      </div>
    </div>
  );
};

export default Services;
