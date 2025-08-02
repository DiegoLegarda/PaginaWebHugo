// src/components/RegistrationForm.jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correo: '',
    identificacion: '',
    categoria: ''
  });
  const [qrAbierto, setQrAbierto] = useState(false);

  const [archivo, setArchivo]       = useState(null);
  const [aceptaTerminos, setAcepta] = useState(false);
  const [mensaje, setMensaje]       = useState('');

  /* --- handlers --- */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = (e) => setArchivo(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!archivo)        { setMensaje('Adjunta tu comprobante de pago.'); return; }
    if (!aceptaTerminos) { setMensaje('Debes aceptar los Términos y Condiciones.'); return; }

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));
      data.append('comprobante', archivo);
      data.append('pagado', false); // pendiente de validación

      await axios.post('http://localhost:3002/api/registro', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setMensaje('Registro recibido. Validaremos tu pago en las próximas 24 h.');
      setFormData({ nombreCompleto:'', correo:'', identificacion:'', categoria:'' });
      setArchivo(null); setAcepta(false);
      e.target.reset();
    } catch (err) {
      setMensaje(err.response?.data?.message || 'Error al registrar. Intenta de nuevo.');
    }
  };

  return (
    <section id="register" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Registro de Corredores</h2>

      {/* ---------- Datos bancarios + QR ---------- */}
      <div className="max-w-xl mx-auto mb-10 grid sm:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
        <div className="text-gray-700 text-sm space-y-1">
          <h3 className="text-lg font-semibold mb-2">Datos para la transferencia</h3>
          <p><span className="font-medium">Banco:</span> Bancolombia</p>
          <p><span className="font-medium">Cuenta Ahorros:</span> 123 456 789‑01</p>
          <p><span className="font-medium">Titular:</span> Fundación Corriendo por el Cauca</p>
          <p><span className="font-medium">NIT:</span> 900 123 456‑7</p>
          <p className="text-xs text-gray-500 mt-2">
            *Realiza la transferencia y adjunta tu comprobante abajo.*
          </p>
        </div>

        {/* ---------- Datos bancarios + QR ---------- */}
 <div className="flex-shrink-0 flex justify-center">
  {/* Datos … */}
  <div className="flex justify-center">
    <img
      src="/QrBancolombia.jpeg"
      alt="QR Bancolombia"
      className="max-w-[180px] w-full aspect-square object-cover rounded shadow-md cursor-pointer"
      onClick={() => setQrAbierto(true)}
    />
  </div>
</div>

{/* ---------- Overlay para ampliar QR ---------- */}
{qrAbierto && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
    onClick={() => setQrAbierto(false)}          // cerrar al hacer clic afuera
    onKeyDown={(e)=>e.key==='Escape' && setQrAbierto(false)}
    tabIndex={-1}                                // para que onKeyDown funcione
  >
    <img
      src="/QrBancolombia.jpeg"
      alt="QR ampliado"
      className="max-w-[90%] max-h-[90%] rounded shadow-lg"
    />
  </div>
)}
      </div>

      {/* ---------- Formulario de inscripción ---------- */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col gap-4"
        encType="multipart/form-data"
      >
        <input name="nombreCompleto" placeholder="Nombre completo" value={formData.nombreCompleto}
               onChange={handleChange} required className="p-3 border rounded" />
        <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo}
               onChange={handleChange} required className="p-3 border rounded" />
        <input name="identificacion" placeholder="Número de identificación" value={formData.identificacion}
               onChange={handleChange} required className="p-3 border rounded" />
        <select name="categoria" value={formData.categoria} onChange={handleChange}
                required className="p-3 border rounded">
          <option value="">Selecciona categoría</option>
          <option value="5K">5K</option>
          <option value="10K">10K</option>
          <option value="21K">21K</option>
        </select>

        {/* Comprobante */}
        <label className="text-sm text-gray-700">
          Comprobante de pago (PNG/JPG/PDF) *
          <input type="file" accept=".png,.jpg,.jpeg,.pdf" onChange={handleFile}
                 required className="mt-1" />
        </label>

        {/* Términos */}
        <label className="flex items-start text-sm text-gray-700">
          <input type="checkbox" checked={aceptaTerminos}
                 onChange={e => setAcepta(e.target.checked)}
                 className="mt-1 mr-2" required />
          <span>
            Acepto los{' '}
            <a href="/terminos" target="_blank" rel="noopener noreferrer"
               className="text-blue-600 underline">Términos y Condiciones</a>.
          </span>
        </label>

        <button type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Enviar registro
        </button>

        {mensaje && <p className="text-center mt-2">{mensaje}</p>}
      </form>
    </section>
  );
}

export default RegistrationForm;

