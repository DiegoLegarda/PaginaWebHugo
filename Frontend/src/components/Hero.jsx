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
    src="/test9.png"
    alt="Fondo hero"
    // Eliminamos las clases min-w-full y min-h-full que la estiraban
    style={{
      width: 'auto', // Deja que el ancho se ajuste proporcionalmente
      height: '150%', // Ajusta esta altura. Puedes probar '50%', '40%', etc.
      maxWidth: '150%', // Limita el ancho máximo para que no se desborde en pantallas grandes
      maxHeight: '150%', // Limita la altura máxima
      objectFit: 'contain', // Usa 'contain' para asegurar que la imagen completa sea visible sin recortarse
      objectPosition: 'center'
    }}
  />
</div>

       {/* Contenido */}
<div className="relative z-10 h-full flex items-start justify-center text-center px-4 md:px-8 animate-fadeIn font-sans pt-28 md:pt-24">
  <div className="text-white max-w-2xl">
    <h1 className="text-5xl md:text-9xl font-bold mb-2">NOVIEMBRE</h1>
    <p className="text-lg md:text-6xl mb-1">
      desde el Cauca corremos por la vida
    </p>
  </div>
</div>
     
    </div>
  );
};

export default Hero;