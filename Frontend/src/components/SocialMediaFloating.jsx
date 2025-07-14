// src/components/SocialMediaFloating.jsx
import { FaFacebook, FaInstagram,  FaTelegramPlane } from 'react-icons/fa';

function SocialMediaFloating() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Links dinámicos
  const telegramLink = isMobile
    ? 'tg://resolve?domain=Runningpopabot' // Este abre la app de Telegram
    : 'https://t.me/Runningpopabot';

  const facebookLink = isMobile
    ? 'fb://profile/jugo.listo.9'  // Este abre la app de Facebook
    : 'https://facebook.com/jugo.listo.9';

  const instagramLink = isMobile
    ? 'instagram://user?username=TU_USUARIO'  // Este abre la app de Instagram
    : 'https://www.instagram.com/runningpopayan1?igsh=c2J6bXdvMTMzemQ1';

  return (
    <div className="fixed left-4 bottom-4 flex flex-col gap-4 z-50">
      {/* Facebook */}
      <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">
        <FaFacebook size={24} />
      </a>

      {/* Instagram */}
      <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600">
        <FaInstagram size={24} />
      </a>      

      {/* Telegram */}
      <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
        <FaTelegramPlane size={24} />
      </a>
    </div>
  )
}

export default SocialMediaFloating;
