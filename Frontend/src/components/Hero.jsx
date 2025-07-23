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

      
    </div>
  );
};

export default Hero;
