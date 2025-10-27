const Hero = () => {
  return (
    <section id='hero'
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        height: 'calc(100svh - 6rem)', // ocupa toda la altura menos el header
        marginTop: '6rem',
       
      }}
    >
      {/* Imagen de fondo que se adapta correctamente */}
      <img
        src="/Fondocompleto.jpg"
        alt="Fondo hero"
        className="
          absolute top-0 left-0 w-full h-full
          object-cover md:object-cover   /* siempre llena el fondo */
          object-center                  /* centrada */
        "
      />

      {/* Capa oscura para contraste del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-6">
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          ¡Corremos por el cauca, corremos por la vida!
        </h1>
        <a
          href="https://eventr.id/004jhRiL"
          target="_blank"
          
          rel="noopener noreferrer"
          className="
            bg-blue-600 hover:bg-green-500 text-white font-semibold
            px-8 py-3 rounded-full text-lg md:text-xl shadow-lg
            transition-transform duration-300 transform hover:scale-105
          "
        >
          Inscríbete
        </a>
      </div>
    </section>
  );
};

export default Hero;