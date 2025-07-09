// models/contactoModel.js
const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  asunto: { type: String, required: true },
  mensaje: { type: String, required: true },
  estado: { type: String, enum: ['pendiente', 'respondido'], default: 'pendiente' },
  respuesta: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Contacto', contactoSchema);
