const Hero = () => {
  return (
    <div className="relative w-full" style={{
      height: 'calc(100svh - 6rem)',
      marginTop: '6rem',
      overflow: 'hidden'
    }}>
      {/* Contenedor de imagen - Versión mejorada */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/RUNNING2.svg"
          alt="Fondo hero"
          className="min-w-full min-h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">NOVIEMBRE</h1>
          <p className="text-lg md:text-2xl mb-6">
            desde el Cauca corremos por la vida
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;