function Categories() {
  return (
    <section id="categories" className="py-12 bg-gray-50"> {/* Agregamos un poco de padding vertical y un fondo claro a la sección */}
      <h2 className="text-3xl font-bold text-center mb-8">Distancias</h2> {/* Centramos el título y le damos un margen inferior */}
      
      <ul className="flex flex-col items-center space-y-4"> {/* Contenedor flex para centrar los ítems y darles espacio vertical */}
        <li className="bg-[#030777] text-white p-4 rounded-lg shadow-md w-64 text-center text-xl font-semibold">6K Recreativa</li>
        <li className="bg-[#030777] text-white p-4 rounded-lg shadow-md w-64 text-center text-xl font-semibold">12K Competitiva</li>
      </ul>
    </section>
  )
}

export default Categories;
