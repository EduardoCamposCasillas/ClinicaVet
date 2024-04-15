// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  const [token, setToken] = useState(null);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Definir la ruta para la página de inicio */}
        <Route path="/" element={<Home token={token} />} />
        {/* Resto de las rutas */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
