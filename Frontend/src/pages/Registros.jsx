import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registros() {
  const [registros, setRegistros] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const navigate = useNavigate();
  const registrosPorPagina = 10;

  const categorias = ['5K', '10K', '21K', '42K'];

  useEffect(() => {
    const obtenerRegistros = async () => {
      try {
        const respuesta = await axios.get(`http://localhost:3002/api/registro?page=${paginaActual}&limit=${registrosPorPagina}`);
        setRegistros(respuesta.data.mensajes);
        setTotalPaginas(respuesta.data.totalPages);
      } catch (error) {
        console.error('Error al obtener registros:', error);
      }
    };

    obtenerRegistros();
  }, [paginaActual]);

  // Filtro por nombre, camiseta y categoría
  const registrosFiltrados = registros.filter((registro) => {
    const coincideNombre = (registro.nombreCompleto || '').toLowerCase().includes(filtro.toLowerCase());
    const coincideCamiseta = (registro.numeroCamiseta || '').toLowerCase().includes(filtro.toLowerCase());
    const coincideCategoria = categoriaFiltro ? registro.categoria === categoriaFiltro : true;
    return (coincideNombre || coincideCamiseta) && coincideCategoria;
  });

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const siguientePagina = () => {
    if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) setPaginaActual(paginaActual - 1);
  };

  const exportar = (tipo) => {
    let url = `http://localhost:3002/api/registro/exportar-${tipo}`;
    if (categoriaFiltro) {
      url += `?categoria=${categoriaFiltro}`;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Listado de Registros</h1>

      {/* Filtros */}
      <div className="mb-4 flex flex-wrap gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Filtrar por nombre o número de camiseta..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="border border-gray-300 p-2 rounded w-1/3"
        />

        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="">Todas las Categorías</option>
          {categorias.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate('/panel')}
        >
          Regresar al Panel
        </button>
        <button onClick={cerrarSesion} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar Sesión</button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Número Camiseta</th>
              <th className="py-2 px-4 border-b">Nombre Completo</th>
              <th className="py-2 px-4 border-b">Correo</th>
              <th className="py-2 px-4 border-b">Identificación</th>
              <th className="py-2 px-4 border-b">Categoría</th>
              <th className="py-2 px-4 border-b">Fecha de Registro</th>
            </tr>
          </thead>
          <tbody>
            {registrosFiltrados.map((registro) => (
              <tr key={registro._id}>
                <td className="py-2 px-4 border-b text-center">{registro.numeroCamiseta}</td>
                <td className="py-2 px-4 border-b">{registro.nombreCompleto}</td>
                <td className="py-2 px-4 border-b">{registro.correo}</td>
                <td className="py-2 px-4 border-b">{registro.identificacion}</td>
                <td className="py-2 px-4 border-b">{registro.categoria}</td>
                <td className="py-2 px-4 border-b">{new Date(registro.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botones de exportación */}
      <div className="mb-4 flex gap-4 mt-4 justify-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => exportar('excel')}
        >
          Exportar a Excel {categoriaFiltro && `(solo ${categoriaFiltro})`}
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => exportar('pdf')}
        >
          Exportar a PDF {categoriaFiltro && `(solo ${categoriaFiltro})`}
        </button>
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={paginaAnterior}
          disabled={paginaActual === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="px-4 py-2">Página {paginaActual} de {totalPaginas}</span>

        <button
          onClick={siguientePagina}
          disabled={paginaActual === totalPaginas}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Registros;
