import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaTrophy, FaRunning, FaEdit, FaImage, FaMap, FaNewspaper, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 w-full h-24  text-white-500 flex items-center justify-between px-6 py-4 z-50 shadow-md">
      {/* Logo con animación */}
      <div className="flex items-center gap-2">
        <motion.img
          src="/LogoRunning.png"
          alt="Logo 21K"
          className="h-40 w-60 object-contain"
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
      </div>

      {/* Icono de menú para móviles y tablets */}
      <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú desktop */}
      <div className="hidden lg:flex gap-6">
        <a href="#hero" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaHome />Inicio</a>
        <a href="#about" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaInfoCircle />Sobre el Evento</a>
        <a href="#categories" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaRunning />Distancias</a>
        <a href="#premiacion" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaTrophy />Premiacion</a>
        
        <a href="#route" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaMap />Ruta</a>
       
        <a href="#contact" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaEnvelope />Contacto</a>
      </div>

      {/* Menú móvil y tablet */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-gradient-to-r from-[#082E73] to-[#25C2F2] text-white-500 flex flex-col items-center gap-6 py-6 lg:hidden shadow-md">
          <a onClick={toggleMenu} href="#hero" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaHome />Inicio</a>
          <a onClick={toggleMenu} href="#about" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaInfoCircle />Sobre el Evento</a>
          <a onClick={toggleMenu} href="#categories" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaRunning />Distancias</a>
          <a onClick={toggleMenu} href="#premiacion" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaTrophy />Premiacion</a>
          
          <a onClick={toggleMenu} href="#route" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaMap />Ruta</a>

          <a onClick={toggleMenu} href="#contact" className="flex items-center gap-2 hover:text-cyan-700 transition"><FaEnvelope />Contacto</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
