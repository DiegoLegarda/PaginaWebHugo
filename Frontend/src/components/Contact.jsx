import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const [alerta, setAlerta] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3002/api/contacto', formData);
      setAlerta('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
      setFormData({ nombre: '', correo: '', asunto: '', mensaje: '' });
    } catch (error) {
      setAlerta('Error al enviar el mensaje. Intenta de nuevo.');
      console.error(error);
    }
  };


  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>

      <div className="max-w-lg mx-auto mb-6 text-center text-gray-700">
        <p className="flex items-center justify-center gap-2"><FaPhone /> +57 312 452 2776</p>
        <p className="flex items-center justify-center gap-2"><FaEnvelope /> running.popayan21@gmail.com</p>
        <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt /> Popayán, Cauca, Colombia</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required className="p-3 border rounded" />
        <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required className="p-3 border rounded" />
        <input type="text" name="asunto" placeholder="Asunto" value={formData.asunto} onChange={handleChange} required className="p-3 border rounded" />
        <textarea name="mensaje" placeholder="Mensaje" value={formData.mensaje} onChange={handleChange} required className="p-3 border rounded" rows="4"></textarea>
        <button type="submit" className="bg-[#030777] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
          Enviar Mensaje
        </button>
        {alerta && <p className="text-center mt-4">{alerta}</p>}
      </form>
    </section>
  )
}

export default Contact;
