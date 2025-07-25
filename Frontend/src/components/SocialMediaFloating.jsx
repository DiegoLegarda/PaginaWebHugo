import React from 'react'

// Eliminamos las importaciones de react-icons
// import { FaFacebook, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function SocialMediaFloating() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Links dinámicos (estos no cambian)
  const telegramLink = isMobile
    ? 'tg://resolve?domain=Runningpopabot'
    : 'https://t.me/Runningpopabot';

  const facebookLink = isMobile
    ? 'fb://profile/jugo.listo.9'
    : 'https://facebook.com/jugo.listo.9';

  const instagramLink = isMobile
    ? 'instagram://user?username=TU_USUARIO'
    : 'https://www.instagram.com/runningpopayan1?igsh=c2bzmxcwMTMzemQ1';

  return (
    <div className="fixed left-4 bottom-4 flex flex-col gap-4 z-50">
      {/* Facebook */}
      <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center">
        {/* Aquí pegas tu icono de Facebook */}
        <img src="/facebook.png" alt="Facebook" className="w-8 h-8" /> {/* Ajusta la ruta y el tamaño */}
      </a>

      {/* Instagram */}
      <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 flex items-center justify-center">
        {/* Aquí pegas tu icono de Instagram */}
        <img src="/instagram.png" alt="Instagram" className="w-8 h-8" /> {/* Ajusta la ruta y el tamaño */}
      </a>      

      {/* Telegram */}
      <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center">
        {/* Aquí pegas tu icono de Telegram */}
        <img src="/telegram.png" alt="Telegram" className="w-8 h-8" /> {/* Ajusta la ruta y el tamaño */}
      </a>
    </div>
  );
}

export default SocialMediaFloating;