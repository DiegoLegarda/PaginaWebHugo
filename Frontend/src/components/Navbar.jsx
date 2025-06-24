import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaRunning, FaEdit, FaImage, FaMap, FaNewspaper, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full bg-gray-800 text-white flex items-center justify-between px-6 py-4 z-50">
      {/* Logo con animación */}
      <div className="flex items-center gap-2">
        <motion.img
          src="/LogoRunning.png"
          alt="Logo 21K"
          className="h-20 w-20 object-contain"
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <span className="text-2xl font-bold">12K Running Popayán</span>
      </div>

      {/* Icono de menú para móviles y tablets */}
      <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menú desktop */}
      <div className="hidden lg:flex gap-6">
        <a href="#hero" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaHome />Inicio</a>
        <a href="#about" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaInfoCircle />Sobre el Evento</a>
        <a href="#categories" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaRunning />Categorías</a>
        <a href="#register" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaEdit />Inscripción</a>
        <a href="#gallery" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaImage />Galería</a>
        <a href="#route" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaMap />Ruta</a>
        <a href="#news" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaNewspaper />Noticias</a>
        <a href="#contact" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaEnvelope />Contacto</a>
      </div>

      {/* Menú móvil y tablet */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 lg:hidden">
          <a onClick={toggleMenu} href="#hero" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaHome />Inicio</a>
          <a onClick={toggleMenu} href="#about" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaInfoCircle />Sobre el Evento</a>
          <a onClick={toggleMenu} href="#categories" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaRunning />Categorías</a>
          <a onClick={toggleMenu} href="#register" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaEdit />Inscripción</a>
          <a onClick={toggleMenu} href="#gallery" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaImage />Galería</a>
          <a onClick={toggleMenu} href="#route" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaMap />Ruta</a>
          <a onClick={toggleMenu} href="#news" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaNewspaper />Noticias</a>
          <a onClick={toggleMenu} href="#contact" className="flex items-center gap-2 hover:text-yellow-400 transition"><FaEnvelope />Contacto</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
