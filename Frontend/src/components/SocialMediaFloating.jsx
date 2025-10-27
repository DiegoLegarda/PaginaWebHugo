function SocialMediaFloating() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const telegramLink = isMobile
    ? 'tg://resolve?domain=Runningpopabot'
    : 'https://t.me/Runningpopabot';

  const facebookLink = isMobile
    ? 'fb://facewebmodal/f?href=https://facebook.com/jugo.listo.9'
    : 'https://facebook.com/jugo.listo.9';

  const instagramLink = isMobile
    ? 'instagram://user?username=runningpopayan1'
    : 'https://www.instagram.com/runningpopayan1';

  const whatsappLink = isMobile
    ? 'whatsapp://send?phone=573014554318&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n'
    : 'https://wa.me/573014554318?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n';

  return (
    <div className="fixed left-4 bottom-4 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
      >
        <img src="/logoW.png" alt="WhatsApp" className="w-10 h-10" />
      </a>

      {/* Facebook */}
      <a
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
      >
        <img src="/facebook.png" alt="Facebook" className="w-10 h-10" />
      </a>

      {/* Instagram */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-600 w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 flex items-center justify-center"
      >
        <img src="/instagram.png" alt="Instagram" className="w-10 h-10" />
      </a>

      
    </div>
  );
}

export default SocialMediaFloating;