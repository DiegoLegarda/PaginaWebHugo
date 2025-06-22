import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function AdminPanel() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Panel de Administración</h1>
      <div className="flex gap-4 mb-4">
        <Link to="registros" className="bg-green-500 text-white px-4 py-2 rounded">Ver Registros</Link>
        <Link to="mensajes" className="bg-blue-500 text-white px-4 py-2 rounded">Ver Mensajes</Link>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar Sesión</button>
      </div>

      {/* Aquí se renderizan las rutas hijas */}
      <Outlet />
    </div>
  );
}

export default AdminPanel;

