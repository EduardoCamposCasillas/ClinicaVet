import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white bg-[#0d6efd]'>
      {/* Logo */}
      <div className="flex items-center">
        <img src=".\public\logo.png" alt="Logo" className="h-10 w-auto mr-2" />
        <h1 className='text-3xl font-bold text-[#fff]'>Clinica Veterinaria Ciudad Guzman</h1>
      </div>
      {/* Menu principal que se va cuando la pantalla es pequeña */}
      <ul className="hidden md:flex">
        <li className="p-4">Inicio</li>
        <li className="p-4">Servicios</li>
        <li className="p-4">La clinica</li>
        <li className="p-4">Contacto</li>
        <li className="p-4">Iniciar sesión</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <IoMdMenu size={20} /> : <RxCross1 size={20} />}
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      <ul className={`fixed left-0 top-0 w-[35%] h-full border-r-2 border-r-white bg-[#0d6efd] ease-in-out transition-transform duration-500 ${nav ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        {/* Logo */}
        <div className="flex items-center justify-center my-4">
          <img src=".\public\logo.png" alt="Logo" className="h-16 w-auto" />
        </div>
        <li className="p-4 mt-3 border-b-2 border-b-white">Inicio</li>
        <li className="p-4 border-b-2 border-b-white">Servicios</li>
        <li className="p-4 border-b-2 border-b-white">La clinica</li>
        <li className="p-4 border-b-2 border-b-white">Contacto</li>
        <li className="flex items-center justify-center pt-4 pb-4 border-b-2 border-b-white">Iniciar sesión</li>
      </ul>
    </div>
  )
}

export default Navbar;
