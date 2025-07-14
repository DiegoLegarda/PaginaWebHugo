// rutas/registro.js
const express = require('express');
const router  = express.Router();
const upload  = require('../Intermediarios/upload');

const {
  exportarExcel,
  exportarPDF,
  registrarUsuario,
  obtenerRegistros,
  obtenerRegistroPorId,
  actualizarRegistro,
  eliminarRegistro,
  marcarPagado,
  desmarcarPagado,
  actualizarPago          
} = require('../controladores/registroController');

/* ---------- exportaciones ---------- */
router.get('/exportar-excel', exportarExcel);
router.get('/exportar-pdf'  , exportarPDF);

/* ---------- CRUD ---------- */
router.post('/', upload.single('comprobante'), registrarUsuario); // ⬅️ multer aquí
router.get ('/',  obtenerRegistros);
router.get ('/:id',  obtenerRegistroPorId);
router.put ('/:id',  actualizarRegistro);
router.delete('/:id', eliminarRegistro);

/* ---------- confirmar pago ---------- */
router.patch('/:id/pagar', marcarPagado);
router.patch('/:id/despagar', desmarcarPagado);
router.patch('/:id/pago', actualizarPago);
module.exports = router;

