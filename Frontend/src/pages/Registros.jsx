import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registros() {
  const [registros, setRegistros] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('');
  const [soloPendientes, setSoloPendientes] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const navigate = useNavigate();
  const registrosPorPagina = 10;
  const [identificacionFiltro, setIdentificacionFiltro] = useState('');


  const categorias = ['5K', '10K', '21K', '42K'];

  const obtenerRegistros = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/api/registro?page=${paginaActual}&limit=${registrosPorPagina}`);
      setRegistros(res.data.mensajes);
      setTotalPaginas(res.data.totalPages);
    } catch (error) {
      console.error('Error al obtener registros:', error);
    }
  };

  useEffect(() => {
    obtenerRegistros();
  }, [paginaActual]);

  const registrosFiltrados = registros.filter((r) => {
    const filtroTexto = filtro.toLowerCase();
    const coincideNombre = r.nombreCompleto?.toLowerCase().includes(filtroTexto);
    const coincideIdentificacion = r.identificacion?.includes(identificacionFiltro);
    const coincideCamiseta = r.numeroCamiseta?.toLowerCase().includes(filtroTexto);
    const coincideCategoria = categoriaFiltro ? r.categoria === categoriaFiltro : true;
    const coincidePago = soloPendientes ? !r.pagado : true;
    return (coincideNombre || coincideCamiseta) && coincideCategoria && coincidePago && coincideIdentificacion;
  });

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const exportar = (tipo) => {
    let url = `http://localhost:3002/api/registro/exportar-${tipo}`;
    if (categoriaFiltro) url += `?categoria=${categoriaFiltro}`;
    window.open(url, '_blank');
  };

  const abrirModal = (filename) => setModalUrl(`http://localhost:3002/uploads/${filename}`);

const alternarPago = async (id, pagado) => {
  try {
    if (pagado) {
      const confirmar = window.confirm('¿Estás seguro de que deseas marcar este registro como NO pagado?');
      if (!confirmar) return;
    }

    await axios.patch(`http://localhost:3002/api/registro/${id}/pago`, {
      pagado: !pagado
    });

    obtenerRegistros();
  } catch (error) {
    console.error('Error al cambiar el estado de pago:', error);
  }
};

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Listado de Registros</h1>

      <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Filtrar por nombre o camiseta..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="border border-gray-300 p-2 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Buscar por cédula..."
          value={identificacionFiltro}
          onChange={(e) => setIdentificacionFiltro(e.target.value)}
          className="border border-gray-300 p-2 rounded w-1/4"
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

        <label className="flex items-center text-sm gap-2">
          <input
            type="checkbox"
            checked={soloPendientes}
            onChange={e => setSoloPendientes(e.target.checked)}
          />
          Solo pendientes
        </label>

        <div className="flex gap-2">
          <button onClick={() => navigate('/panel')} className="bg-blue-500 text-white px-4 py-2 rounded">Volver</button>
          <button onClick={cerrarSesion} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar Sesión</button>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Camiseta</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">Correo</th>
              <th className="py-2 px-4 border-b hidden md:table-cell">Identificación</th>
              <th className="py-2 px-4 border-b">Pagado</th>
              <th className="py-2 px-4 border-b">Comprobante</th>
              <th className="py-2 px-4 border-b">Acción</th>
            </tr>
          </thead>
          <tbody>
            {registrosFiltrados.map((r, i) => (
              <tr key={r._id} className="odd:bg-white even:bg-gray-50">
                <td className="text-center">
                  {(paginaActual - 1) * registrosPorPagina + i + 1}
                </td>
                <td>{r.numeroCamiseta}</td>
                <td>
                  <p>{r.nombreCompleto}</p>
                  <p className="md:hidden text-xs text-gray-500">{r.correo}</p>
                  <p className="md:hidden text-xs text-gray-500">ID: {r.identificacion}</p>
                </td>
                <td className="hidden md:table-cell">{r.correo}</td>
                <td className="hidden md:table-cell">{r.identificacion}</td>
                <td>
                  {r.pagado ? (
                    <span className="px-2 py-1 rounded bg-green-600 text-white">✓</span>
                  ) : (
                    <span className="px-2 py-1 rounded bg-yellow-500 text-white">Pend.</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => abrirModal(r.comprobante)}
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    Ver
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => alternarPago(r._id, r.pagado)}
                    className={`px-3 py-1 rounded text-white ${
                      r.pagado
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-yellow-500 hover:bg-yellow-600'
                    }`}
                  >
                    {r.pagado ? '✓ Pagado' : 'Marcar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal comprobante */}
      {modalUrl && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalUrl('')}
        >
          {modalUrl.toLowerCase().endsWith('.pdf') ? (
            <iframe src={modalUrl} className="w-[90%] h-[90%] bg-white rounded" />
          ) : (
            <img src={modalUrl} className="max-w-[90%] max-h-[90%] rounded" />
          )}
        </div>
      )}

      {/* Exportar */}
      <div className="mb-4 flex gap-4 mt-4 justify-center">
        <button onClick={() => exportar('excel')} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Exportar a Excel {categoriaFiltro && `(solo ${categoriaFiltro})`}
        </button>
        <button onClick={() => exportar('pdf')} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Exportar a PDF {categoriaFiltro && `(solo ${categoriaFiltro})`}
        </button>
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => setPaginaActual(p => Math.max(1, p - 1))}
          disabled={paginaActual === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:opacity-50"
        >Anterior</button>
        <span className="px-4 py-2">Página {paginaActual} de {totalPaginas}</span>
        <button
          onClick={() => setPaginaActual(p => Math.min(totalPaginas, p + 1))}
          disabled={paginaActual === totalPaginas}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:opacity-50"
        >Siguiente</button>
      </div>
    </div>
  );
}

export default Registros;
