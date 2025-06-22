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
  const [pagoRealizado, setPagoRealizado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePago = () => {
    // Simulación de pago
    setPagoRealizado(true);
    setMensaje('Pago confirmado. Ahora puedes registrarte.');
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!pagoRealizado) {
    setMensaje('Debes realizar el pago antes de registrarte.');
    return;
  }

  try {
    const res = await axios.post('http://localhost:3002/api/registro', { ...formData, pagado: true });
    setMensaje('Registro exitoso. ¡Gracias por inscribirte!');
    setFormData({ nombreCompleto: '', correo: '', identificacion: '', categoria: '' });
    setPagoRealizado(false);
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      setMensaje(error.response.data.message); // Mostramos el mensaje del backend
    } else {
      setMensaje('Error al registrar. Intenta de nuevo.');
    }
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

        <button 
          type="submit" 
          className={`font-bold py-2 px-4 rounded transition ${pagoRealizado ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`} 
          disabled={!pagoRealizado}
        >
          Registrarse
        </button>

        {mensaje && <p className="text-center mt-4">{mensaje}</p>}
      </form>

      {/* Botón de Pago Simulado */}
      <div className="text-center mt-6">
        <button 
          onClick={handlePago} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Simular Pago
        </button>
      </div>
    </section>
  );
}

export default RegistrationForm;
