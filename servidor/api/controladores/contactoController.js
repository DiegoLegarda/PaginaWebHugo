const Contacto = require('../modelos/contactoModel');

// Crear un mensaje
const enviarMensaje = async (req, res) => {
  try {
    const { nombre, correo, asunto, mensaje } = req.body;

    if (!nombre || !correo || !asunto || !mensaje) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    const nuevoMensaje = new Contacto({ nombre, correo, asunto, mensaje });
    await nuevoMensaje.save();

    res.status(201).json({ message: 'Mensaje enviado correctamente', data: nuevoMensaje });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el mensaje', error });
  }
};

// Obtener mensajes con paginación y filtro por estado
const obtenerMensajes = async (req, res) => {
  try {
    const { page = 1, limit = 10, estado } = req.query;

    // Construir el filtro dinámico
    const filtro = {};
    if (estado && estado !== 'todos') {
      filtro.estado = estado;
    }

    const mensajes = await Contacto.find(filtro)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Contacto.countDocuments(filtro);

    res.status(200).json({
      mensajes,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener mensajes', error });
  }
};

// Obtener un mensaje por ID
const obtenerMensajePorId = async (req, res) => {
  try {
    const mensaje = await Contacto.findById(req.params.id);
    if (!mensaje) return res.status(404).json({ message: 'Mensaje no encontrado' });

    res.status(200).json(mensaje);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el mensaje', error });
  }
};

// Actualizar estado y respuesta de un mensaje
const actualizarMensaje = async (req, res) => {
  try {
    const { estado, respuesta } = req.body;

    const mensajeActualizado = await Contacto.findByIdAndUpdate(
      req.params.id,
      { estado, respuesta },
      { new: true }
    );

    if (!mensajeActualizado) return res.status(404).json({ message: 'Mensaje no encontrado' });

    res.status(200).json({ message: 'Mensaje actualizado', data: mensajeActualizado });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar mensaje', error });
  }
};

// Eliminar un mensaje
const eliminarMensaje = async (req, res) => {
  try {
    const mensajeEliminado = await Contacto.findByIdAndDelete(req.params.id);
    if (!mensajeEliminado) return res.status(404).json({ message: 'Mensaje no encontrado' });

    res.status(200).json({ message: 'Mensaje eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar mensaje', error });
  }
};

module.exports = {
  enviarMensaje,
  obtenerMensajes,
  obtenerMensajePorId,
  actualizarMensaje,
  eliminarMensaje
};
