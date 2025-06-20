import PaymentButton from './PaymentButton'
import { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correo: '',
    identificacion: '',
    categoria: ''
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3002/api/registro', formData);
      setMensaje('Registro exitoso. ¡Gracias por inscribirte!');
      setFormData({ nombreCompleto: '', correo: '', identificacion: '', categoria: '' });
    } catch (error) {
      setMensaje('Error al registrar. Intenta de nuevo.');
      console.error(error);
    }
  };
  return (
    <section id="register" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Registro de Corredores</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" name="nombreCompleto" placeholder="Nombre completo" value={formData.nombreCompleto} onChange={handleChange} required className="p-3 border rounded" />
        <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required className="p-3 border rounded" />
        <input type="text" name="identificacion" placeholder="Número de identificación" value={formData.identificacion} onChange={handleChange} required className="p-3 border rounded" />
        <select name="categoria" value={formData.categoria} onChange={handleChange} required className="p-3 border rounded">
          <option value="">Selecciona categoría</option>
          <option value="5K">5K</option>
          <option value="10K">10K</option>
          <option value="21K">21K</option>          
        </select>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition">
          Registrarse
        </button>
        {mensaje && <p className="text-center mt-4">{mensaje}</p>}
      </form>

      {/* Botón de Pago */}
      <div className="text-center mt-6">
        <PaymentButton />
      </div>
    </section>
  )
}

export default RegistrationForm

