const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema(
  {
    nombreCompleto  : { type: String, required: true },
    correo          : { type: String, required: true },
    identificacion  : { type: String, required: true },
    categoria       : { type: String, required: true },
    numeroCamiseta  : { type: String, required: true },
    comprobante     : { type: String },                 // ← nombre/URL del archivo
    pagado          : { type: Boolean, default: false } // ← inicia en pendiente
  },
  { timestamps: true }
);

module.exports = mongoose.model('Registro', registroSchema);
