function RouteMap() {
  return (
    <section id="route" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">Mapa del Recorrido</h2>
      <div className="flex justify-center">
        <img
          src="mapa.png"
          alt="Mapa del Recorrido"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-lg animate-fadeIn"
        />
      </div>
    </section>
  );
}

export default RouteMap;
