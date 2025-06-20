const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  nombreCompleto: { type: String, required: true },
  correo: { type: String, required: true },
  identificacion: { type: String, required: true },
  categoria: { type: String, required: true }
}, { timestamps: true }); // Esto agrega automáticamente createdAt y updatedAt

module.exports = mongoose.model('Registro', registroSchema);