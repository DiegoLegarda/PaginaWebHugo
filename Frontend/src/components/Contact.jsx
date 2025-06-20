import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>

      <div className="max-w-lg mx-auto mb-6 text-center text-gray-700">
        <p className="flex items-center justify-center gap-2"><FaPhone /> +57 123 456 7890</p>
        <p className="flex items-center justify-center gap-2"><FaEnvelope /> contacto@mediamaratonpopayan.com</p>
        <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt /> Popayán, Cauca, Colombia</p>
      </div>

      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Nombre completo" required className="p-3 border rounded" />
        <input type="email" placeholder="Correo electrónico" required className="p-3 border rounded" />
        <input type="text" placeholder="Asunto" required className="p-3 border rounded" />
        <textarea placeholder="Mensaje" required className="p-3 border rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
          Enviar Mensaje
        </button>
      </form>
    </section>
  )
}

export default Contact;
