import { useState } from "react";

function RouteMap() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="route" className="p-8 bg-[#B7E300]">
       <h1 className="text-5xl font-extrabold text-[#082E73] mb-12 drop-shadow-lg text-center">
          Mapa del Recorrido
        </h1>      
      <div className="flex justify-center">
        <img
          src="mapa.png"
          alt="Mapa del Recorrido"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={() => setIsZoomed(true)}
        />
      </div>

      {/* Overlay y zoom */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative p-2 max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic sobre la imagen
          >
            <button
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black rounded-full p-2 text-xl z-50"
              onClick={() => setIsZoomed(false)}
            >
              ✕
            </button>
            <img
              src="mapa.png"
              alt="Mapa del Recorrido Ampliado"
              className="rounded-lg shadow-xl max-w-[95vw] max-h-[90vh] animate-zoomIn"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default RouteMap;
