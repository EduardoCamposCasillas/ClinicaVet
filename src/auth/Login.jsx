// Login.jsx
import { useState } from 'react';
import { supabase } from "../helpers/supabase";
import FormLogin from './FormLogin';

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signInWithPassword(
        formData.email,
        formData.password
      );

      if (error) {
        throw error;
      }
      
      // Aquí podrías almacenar el token o hacer cualquier otra lógica necesaria
      setToken(user); // Establecer el usuario como token por ahora, pero puedes ajustarlo según tu necesidad
    } catch (error) {
      alert(error.message);
    }
  }

  // Función para cerrar sesión
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setToken(null); // Limpiar el token
    } catch (error) {
      alert(error.message);
    }
  };

  // Función para registrar un nuevo usuario
  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }
      
      setToken(user); // Establecer el usuario como token después de registrarse
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <FormLogin 
      handleSubmit={handleSubmit} 
      handleChange={handleChange}
      handleSignOut={handleSignOut}
      handleSignUp={handleSignUp}
    />
  );
};

export default Login;
