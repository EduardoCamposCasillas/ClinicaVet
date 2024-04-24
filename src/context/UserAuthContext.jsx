import { createContext, useState, useEffect } from 'react';
import {supabase} from '../helpers/supabase';


export const UserAuthContext = createContext(null);

function UserAuthProvider({children}){

  const [user, setUser] = useState(null);
  const [token, setToken] = useState();

  useEffect(() => {
    checkUser().catch(error=>console.error(error));
  }, []);

  async function checkUser() {

      const session = await supabase.auth.getSession();
     
      if (session.data.session) {
        const { data: userProfile, error } = await supabase
          .from('users')
          .select('roles(name)')
          .eq('id', session.data.session.user.id)
          .single()

        if (error) throw error;

        setUser({ ...session.data.session.user, role: userProfile.roles.name });
        setToken(session.data.session.access_token)
      }
    
  }



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
    const { data: userProfile, error } = await supabase
    .from('users')
    .select('roles(name)')
    .eq('id', data.session.user.id)
    .single()
      sessionStorage.setItem("token", data.session.access_token);
      setToken(data.session.access_token);
      setUser({ ...data.session.user, role: userProfile.roles.name });
  }
      
  }
  
  const singUp = async(formData)=> {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name:formData.name,
          last_name:formData.last_name,
          phone: formData.phone
          
        }
      } 
    });
  } 

  const logOut = async() => {
    await supabase.auth.signOut();
    setToken(null); 
    setUser(null);
    sessionStorage.removeItem('token');
  }
  
  return(
    
    <UserAuthContext.Provider value={{token, user, logIn, logOut, singUp}}>
      {children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthProvider;