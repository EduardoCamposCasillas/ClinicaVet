import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const FormLogin = ({handleChange, handleSubmit}) => {

  return (
    <div className='flex w-full h-screen'> 
    <div className='w-full flex items-center justify-center md:w-1/2'>
    {/* Contenido del formulario principal */}
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>    
    <h1 className='text-5xl font-semibold'>Iniciar sesión</h1>
    <p className='font-medium text-lg text-gray-400 mt-3'>Bienvenido de regreso a su clínica de confianza</p>
      <div className='mt-8'>
        <div>
          <label className='text-lg font-medium'>Correo electronico</label>
          <input className='w-full border-2 border-gray-100  rounded-px p-4 mt-1 bg-transparent' placeholder="Ingrese su correo electronico" onChange={handleChange} name='email'/>
        </div>
        
        <div>
          <label className='text-lg font-medium'>Contraseña</label>
          <input className='w-full border-2 border-gray-100  rounded-px p-4 mt-1 bg-transparent' placeholder="Ingrese su contraseña" type="password" onChange={handleChange} name='password'/>
        </div>
        
        <div>
          <div className='mt-8 flex items-center mb-2'>
            <input type="checkbox" id='remember'/>
            <label className='ml-2 font-medium text-base'>Recordar la contraseña</label>
          </div>
          <button className='font-medium text-base text-[#0d6efd]'>Olvide mi contraseña</button>
        </div>
        
        <div className='mt-6 flex flex-col gap-y-4'>
          <button className='py-2 border-2 border-gray-100 rounded-xl bg-[#0d6efd] text-white text-md active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all' onClick={handleSubmit}>Iniciar sesión
          </button>
        </div>
      
        <div className="mt-6 flex justify-center items-center">
          <p className="font-medium text-base">¿No tienes una cuenta?</p>
          <p className="text-[#0d6efd] text-base font-medium ml-2"><Link to='/register'>Crear cuenta</Link></p>
        </div>
      </div>
    </div>
  </div>

    <div className='hidden relative md:flex bg-gray-200 h-full items-center justify-center md:w-1/2'>
      <div className='w-60 h-60 bg-gradient-to-tr from-[#2255a2] to-sky-100 rounded-full'>
      <img src="../images/logo.png"></img>
      <div className='w-full h-1/2 absolute '>

      </div>
      </div> 
    </div>
</div>
  );
};

export default FormLogin;
