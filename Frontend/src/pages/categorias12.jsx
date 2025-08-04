import { Link } from "react-router-dom";

function Categorias() {
  const categorias = [
    {
      nombre: "12K Libre",
      grupo: "Damas y Varones",
      edades: "15 - 39 años",
      premios: [
        "1° puesto: $1.000.000",
        "2° puesto: $800.000",
        "3° puesto: $600.000",
        "4° puesto: $400.000",
        "5° puesto: $300.000",
        "6° puesto: $200.000",
      ],
    },
    {
      nombre: "Master A",
      grupo: "Damas y Varones",
      edades: "40 - 49 años",
      premios: [
        "1° puesto: $600.000",
        "2° puesto: $500.000",
        "3° puesto: $300.000",
      ],
    },
    {
      nombre: "Master B",
      grupo: "Damas y Varones",
      edades: "50 años en adelante",
      premios: [
        "1° puesto: $500.000",
        "2° puesto: $400.000",
        "3° puesto: $200.000",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-white py-10 px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Categorías de Competencia</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-1">{cat.nombre}</h2>
            <p className="text-gray-600 mb-1">{cat.grupo}</p>
            <p className="text-sm text-gray-500 mb-4">Edad: {cat.edades}</p>
            <ul className="text-gray-700 space-y-1">
              {cat.premios.map((premio, i) => (
                <li key={i}>🏅 {premio}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-xl transition"
        >
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
}

export default Categorias;