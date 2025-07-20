const Hero = () => {
  return (
    <section
      className="relative h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/fotofondo.jpeg')" }} // ⚠️ Asegúrate de usar la ruta correcta
    >
      {/* Logo como marca de agua */}
      <img
        src="logopaginaHero.png"
        alt="Logo"
        className="absolute w-80 md:w-96 opacity-60 drop-shadow-lg animate-fadeIn"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default Hero;

