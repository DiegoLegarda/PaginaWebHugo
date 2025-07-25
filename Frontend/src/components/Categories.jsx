function Categories() {
  return (
    // Aplicamos el fondo azul y el color de texto blanco directamente a la sección
    <section id="categories" className="bg-blue-600 text-white py-12">
      {/* El título se centrará automáticamente dentro de la sección */}
      <h2 className="text-3xl font-bold text-center mb-8">Distancias</h2>
      
      {/* La lista de ítems también se centrará y los ítems serán simples textos blancos */}
      <ul className="flex flex-col items-center space-y-4">
        {/* Solo el texto, sin fondo individual para cada <li> */}
        <li className="text-xl font-semibold">6K Recreativa</li>
        <li className="text-xl font-semibold">12K Competitiva</li>
      </ul>
    </section>
  )
}

export default Categories;