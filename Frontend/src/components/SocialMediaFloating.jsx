import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialMediaFloating() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-4 z-50">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700">
        <FaFacebook size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600">
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-500">
        <FaTwitter size={24} />
      </a>
    </div>
  )
}

export default SocialMediaFloating