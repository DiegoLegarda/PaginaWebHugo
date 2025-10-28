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
import Categorias from './pages/categorias12';
import Categorias6 from './pages/categorias6';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Premiacion from './components/Premiacion';

function App() {
  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/premiacion" element={<Premiacion />} />
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

