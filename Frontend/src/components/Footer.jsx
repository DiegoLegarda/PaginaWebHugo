import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ background: '#082E73', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; 2025 Running Popayán. Todos los derechos reservados.</p>
      <p>
        <Link to="/terminos" className="text-blue-300 hover:text-white underline">
          Términos y Condiciones
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
