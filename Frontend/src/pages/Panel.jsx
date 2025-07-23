import { Link } from 'react-router-dom';

function Panel() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Panel Administrativo</h1>
      <div className="flex flex-col gap-4">
        <Link to="/panel/registros" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Gestionar Registros
        </Link>
        <Link to="/panel/mensajes" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Gestionar Mensajes
        </Link>
      </div>
    </div>
  );
}

export default Panel;
