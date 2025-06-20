const express = require('express');
const router = express.Router();
const {
  registrarUsuario,
  obtenerRegistros,
  obtenerRegistroPorId,
  actualizarRegistro,
  eliminarRegistro
} = require('../controladores/registroController');

// Crear un nuevo registro
router.post('/', registrarUsuario);

// Obtener todos los registros
router.get('/', obtenerRegistros);

// Obtener un registro por ID
router.get('/:id', obtenerRegistroPorId);

// Actualizar un registro por ID
router.put('/:id', actualizarRegistro);

// Eliminar un registro por ID
router.delete('/:id', eliminarRegistro);

module.exports = router;
