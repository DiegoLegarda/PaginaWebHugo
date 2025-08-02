const express = require('express');
const router = express.Router();
const {
  enviarMensaje,
  obtenerMensajes,
  obtenerMensajePorId,
  actualizarMensaje,
  eliminarMensaje
} = require('../controladores/contactoController');

// Crear mensaje
router.post('/', enviarMensaje);

// Obtener todos los mensajes
router.get('/', obtenerMensajes);

// Obtener mensaje por ID
router.get('/:id', obtenerMensajePorId);

// Actualizar estado y respuesta
router.put('/:id', actualizarMensaje);

// Eliminar mensaje
router.delete('/:id', eliminarMensaje);

module.exports = router;
