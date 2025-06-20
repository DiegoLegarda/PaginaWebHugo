const Registro = require('../modelos/registroModel');

// Crear un registro
const registrarUsuario = async (req, res) => {
  try {
    const { nombreCompleto, correo, identificacion, categoria } = req.body;

    if (!nombreCompleto || !correo || !identificacion || !categoria) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const nuevoRegistro = new Registro({ nombreCompleto, correo, identificacion, categoria });
    await nuevoRegistro.save();

    res.status(201).json({ message: 'Registro exitoso', data: nuevoRegistro });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar', error });
  }
};

// Obtener todos los registros
const obtenerRegistros = async (req, res) => {
  try {
    const registros = await Registro.find();
    res.status(200).json(registros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener registros', error });
  }
};

// Obtener un registro por ID
const obtenerRegistroPorId = async (req, res) => {
  try {
    const registro = await Registro.findById(req.params.id);
    if (!registro) return res.status(404).json({ message: 'Registro no encontrado' });

    res.status(200).json(registro);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener registro', error });
  }
};

// Actualizar un registro
const actualizarRegistro = async (req, res) => {
  try {
    const registroActualizado = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!registroActualizado) return res.status(404).json({ message: 'Registro no encontrado' });

    res.status(200).json({ message: 'Registro actualizado', data: registroActualizado });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar registro', error });
  }
};

// Eliminar un registro
const eliminarRegistro = async (req, res) => {
  try {
    const registroEliminado = await Registro.findByIdAndDelete(req.params.id);
    if (!registroEliminado) return res.status(404).json({ message: 'Registro no encontrado' });

    res.status(200).json({ message: 'Registro eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar registro', error });
  }
};

module.exports = {
  registrarUsuario,
  obtenerRegistros,
  obtenerRegistroPorId,
  actualizarRegistro,
  eliminarRegistro
};
