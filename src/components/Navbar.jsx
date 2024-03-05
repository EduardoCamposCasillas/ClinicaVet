
import {useState} from 'react';
import { IoMdMenu} from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white bg-[#0d6efd]'>
      <h1 className='w-50% text-3xl font-bold text-[#fff]'>Clinica Veterinaria Ciudad Guzman</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Inicio</li>
        <li className="p-4">Servicios</li>
        <li className="p-4">La clinica</li>
        <li className="p-4">Contacto</li>
        <li className="p-4">Iniciar sesión</li>
      </ul>
      <div onClick={handleNav}>
      {!nav ? <IoMdMenu size={20}/>:<RxCross1 size = {20}/>}
    </div>
    <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-[#0d6efd] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold text-[#fff] m-4'>Clinica Veterinaria Ciudad Guzman</h1>
      <li className="p-4 border-b-gray-400">Inicio</li>
        <li className="p-4 border-b-gray-400">Servicios</li>
        <li className="p-4 border-b-gray-400">La clinica</li>
        <li className="p-4 border-b-gray-400">Contacto</li>
        <li className="p-4 border-b-gray-400">Iniciar sesión</li>
      </ul>
   
</div>
  )
}

export default Navbar;