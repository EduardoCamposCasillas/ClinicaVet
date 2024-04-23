import { useState } from 'react';
import { supabase } from '../helpers/supabase';
import { useNavigate } from 'react-router-dom';

function CrearCita() {
  const [formData, setFormData] = useState({
      pet_name: '',
      species: '',
      gender: '',
      age: '',
      weight: '',
      medical_history: '',
      problem_description: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setSuccess('');
      setError('');

      if (formData.age <= 0 || formData.weight <= 0) {
          setError('La edad y el peso deben ser valores positivos.');
          return;
      }

      const { data, error } = await supabase
          .from('pets')
          .insert([formData]);

      if (error) {
          setError('Error al registrar la mascota: ' + error.message);
      } else {
          setSuccess('Mascota registrada con éxito!');
          setFormData({
              pet_name: '',
              species: '',
              gender: '',
              age: '',
              weight: '',
              medical_history: '',
              problem_description: ''
          }); // Limpiar el formulario
      }
  };

  return (
    <div>    
    <form onSubmit={handleSubmit}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {success && <div style={{ color: 'green' }}>{success}</div>}
          <input type="text" name="pet_name" value={formData.pet_name} onChange={handleChange} placeholder="Nombre de la mascota" required />
          <input type="text" name="species" value={formData.species} onChange={handleChange} placeholder="Especie" required />
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Sexo" required />
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Edad" required />
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Peso" required />
          <textarea name="medical_history" value={formData.medical_history} onChange={handleChange} placeholder="Historia médica" />
          <textarea name="problem_description" value={formData.problem_description} onChange={handleChange} placeholder="Descripción del problema" required />
          <button type="submit">Registrar Cita</button>
      </form>
        
      </div>
  
  );
}

export default CrearCita;