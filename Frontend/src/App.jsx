import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './components/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import Registro from './pages/Registros';
import Mensajes from './pages/Mensajes';
import PrivateRoute from './PrivateRoute';
import Terminos from './pages/Terminos';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/terminos" element={<Terminos />} />
          
          {/* RUTAS PROTEGIDAS SEPARADAS */}
          <Route path="/panel" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
          <Route path="/panel/registros" element={<PrivateRoute><Registro /></PrivateRoute>} />
          <Route path="/panel/mensajes" element={<PrivateRoute><Mensajes /></PrivateRoute>} />
        </Routes>
     
    </AuthProvider>
  );
}

export default App;

