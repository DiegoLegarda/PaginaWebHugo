const Hero = () => {
  return (
    <div 
      className="w-full flex items-center justify-center text-white text-center"
      style={{
        minHeight: '100svh',
        backgroundImage: "url('/5.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay oscuro */}
      <div 
        className="absolute inset-0 bg-black opacity-30"
      ></div>

      {/* Contenido */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
          21K POPAYÁN
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-white">
          La carrera más importante de la ciudad
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-base sm:text-lg transition duration-300">
          ¡Inscríbete Ya!
        </button>
      </div>
    </div>
  );
};

export default Hero;
