import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function AdminLogin() {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && password === '1234') {
      login();
      navigate('/panel');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="p-2 border mb-4 w-full" />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border mb-4 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Ingresar</button>
      </form>
    </div>
  );
}

export default AdminLogin;


