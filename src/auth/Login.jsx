// Login.jsx
import { useState, useContext } from 'react';
import { supabase } from "../helpers/supabase";
import FormLogin from './FormLogin';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../context/UserAuthContext';


const Login = () => {
  const navigate = useNavigate();
  const {logIn} = useContext(UserAuthContext);
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

  
  const handleSubmit = (e) => {
    logIn(formData); 
    navigate("/");
  }


  return (
    <FormLogin 
      handleSubmit={handleSubmit} 
      handleChange={handleChange}
    />
  );
};

export default Login;
