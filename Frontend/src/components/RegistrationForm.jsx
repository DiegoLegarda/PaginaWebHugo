import PaymentButton from './PaymentButton'

function RegistrationForm() {
  return (
    <section id="register" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Registro de Corredores</h2>

      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre completo"
          required
          className="p-3 border rounded"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          required
          className="p-3 border rounded"
        />

        <select required className="p-3 border rounded">
          <option value="">Seleccione categoría</option>
          <option value="5k">5K</option>
          <option value="10k">10K</option>
          <option value="21k">21K</option>          
        </select>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition"
        >
          Registrar
        </button>
      </form>

      {/* Botón de Pago */}
      <div className="text-center mt-6">
        <PaymentButton />
      </div>
    </section>
  )
}

export default RegistrationForm

