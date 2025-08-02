import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Mensajes = () => {
  const [mensajes, setMensajes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [filtro, setFiltro] = useState('todos');
  const navigate = useNavigate();

  const obtenerMensajes = async (pagina = 1, estado = 'todos') => {
    try {
      let url = `http://localhost:3002/api/contacto?limit=5&page=${pagina}`;
      if (estado !== 'todos') {
        url += `&estado=${estado}`;
      }
      const response = await axios.get(url);
      setMensajes(response.data.mensajes);
      setTotalPaginas(response.data.totalPages);
      setPaginaActual(response.data.currentPage);
    } catch (error) {
      console.error('Error al obtener mensajes:', error);
    }
  };

  const cambiarEstado = async (id, estadoActual) => {
    try {
      const nuevoEstado = estadoActual === 'pendiente' ? 'respondido' : 'pendiente';
      await axios.put(`http://localhost:3002/api/contacto/${id}`, { estado: nuevoEstado });
      obtenerMensajes(paginaActual, filtro);
    } catch (error) {
      console.error('Error al cambiar estado:', error);
    }
  };

  const eliminarMensaje = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/api/contacto/${id}`);
      obtenerMensajes(paginaActual, filtro);
    } catch (error) {
      console.error('Error al eliminar mensaje:', error);
    }
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      obtenerMensajes(paginaActual - 1, filtro);
    }
  };

  const siguientePagina = () => {
    if (paginaActual < totalPaginas) {
      obtenerMensajes(paginaActual + 1, filtro);
    }
  };

  const regresarPanel = () => {
    navigate('/panel');
  };

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const manejarCambioFiltro = (e) => {
    const nuevoFiltro = e.target.value;
    setFiltro(nuevoFiltro);
    obtenerMensajes(1, nuevoFiltro);
  };

  useEffect(() => {
    obtenerMensajes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mensajes de Contacto</h1>

      <div className="flex justify-end gap-4 mb-4">
        <button onClick={regresarPanel} className="bg-blue-500 text-white px-4 py-2 rounded">Regresar al Panel</button>
        <button onClick={cerrarSesion} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar Sesión</button>
      </div>

      <div className="mb-4">
        <label htmlFor="filtro" className="mr-2">Filtrar por estado:</label>
        <select id="filtro" value={filtro} onChange={manejarCambioFiltro} className="p-2 border rounded">
          <option value="todos">Todos</option>
          <option value="pendiente">Pendientes</option>
          <option value="respondido">Respondidos</option>
        </select>
      </div>

      {mensajes.length === 0 ? (
        <p>No hay mensajes disponibles.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Correo</th>
              <th className="border p-2">Asunto</th>
              <th className="border p-2">Mensaje</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mensajes.map((mensaje) => (
              <tr key={mensaje._id}>
                <td className="border p-2">{mensaje.nombre}</td>
                <td className="border p-2">{mensaje.correo}</td>
                <td className="border p-2">{mensaje.asunto}</td>
                <td className="border p-2">{mensaje.mensaje}</td>
                <td className="border p-2">{mensaje.estado}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    onClick={() => cambiarEstado(mensaje._id, mensaje.estado)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    {mensaje.estado === 'pendiente' ? 'Marcar como Respondido' : 'Marcar como Pendiente'}
                  </button>
                  <button
                    onClick={() => eliminarMensaje(mensaje._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={paginaAnterior}
          disabled={paginaActual === 1}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>Página {paginaActual} de {totalPaginas}</span>
        <button
          onClick={siguientePagina}
          disabled={paginaActual === totalPaginas}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Mensajes;

