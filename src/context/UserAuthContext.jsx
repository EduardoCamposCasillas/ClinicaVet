import { createContext, useState, useEffect } from 'react';
import {supabase} from '../helpers/supabase';

export const UserAuthContext = createContext(null);

function UserAuthProvider({children}){

  const [token, setToken] = useState();

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token');
    if(sessionToken){
      setToken(sessionToken);
    } else {
    }
  }, [])

  const logIn = async(formData) => {
    const { data, error } =  await supabase.auth.signInWithPassword({
    
      email: formData.email,
      password: formData.password,
    });  if (error) {
      console.error('Error de inicio de sesión:', error.message);
  }     else {
      sessionStorage.setItem("token", data.session.access_token);
      setToken(data.session.access_token);
  }
      
  }
  
  const singUp = async(formData)=> {
    const { user, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
  }

  const logOut = async() => {
    await supabase.auth.signOut();
    setToken(null); 
    sessionStorage.removeItem('token');
  }
  
  return(
    
    <UserAuthContext.Provider value={{token, logIn, logOut, singUp}}>
      {children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthProvider;