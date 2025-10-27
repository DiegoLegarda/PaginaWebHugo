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
        <p className="flex items-center justify-center gap-2"><FaPhone />+57 301 4554318</p>
        <p className="flex items-center justify-center gap-2"><FaEnvelope /> running.popayan21@gmail.com</p>
        <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt /> Popayán, Cauca, Colombia</p>
      </div>
     
    </section>
  )
}

export default Contact;
