const Registro = require('../modelos/registroModel');
const ExcelJS = require('exceljs');
const PDFDocument = require('pdfkit');

const padNumero = (num) => {
  return String(num).padStart(3, '0'); // convierte 1 en "001"
};

const registrarUsuario = async (req, res) => {
  try {
    const { nombreCompleto, correo, identificacion, categoria, pagado } = req.body;

    if (!nombreCompleto || !correo || !identificacion || !categoria) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Validar si ya existe registro por correo o identificación
    const yaExiste = await Registro.findOne({
      $or: [{ correo }, { identificacion }]
    });

    if (yaExiste) {
      return res.status(400).json({ message: 'Este usuario ya se ha registrado.' });
    }

    if (!pagado) {
      return res.status(400).json({ message: 'El registro solo es válido con pago.' });
    }

    // Obtener el siguiente número de camiseta
    const totalRegistros = await Registro.countDocuments();
    const numeroCamiseta = padNumero(totalRegistros + 1);

    const nuevoRegistro = new Registro({
      nombreCompleto,
      correo,
      identificacion,
      categoria,
      numeroCamiseta,
      pagado: true
    });

    await nuevoRegistro.save();

    res.status(201).json({ message: 'Registro exitoso', data: nuevoRegistro });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar', error });
  }
};

// Obtener registros con paginación
const obtenerRegistros = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const registros = await Registro.find()
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 }); // Los más recientes primero

    const total = await Registro.countDocuments();

    res.status(200).json({
      mensajes: registros, // El frontend espera que la propiedad sea "mensajes"
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page)
    });
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

// Exportar registros a Excel
const exportarExcel = async (req, res) => {
  try {
    const registros = await Registro.find().sort({ createdAt: 1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Registros');

    // Cabeceras
    worksheet.columns = [
      { header: 'Número Camiseta', key: 'numeroCamiseta', width: 15 },
      { header: 'Nombre Completo', key: 'nombreCompleto', width: 30 },
      { header: 'Correo', key: 'correo', width: 30 },
      { header: 'Identificación', key: 'identificacion', width: 20 },
      { header: 'Categoría', key: 'categoria', width: 15 },
      { header: 'Fecha Registro', key: 'fecha', width: 25 },
    ];

    // Agregar filas
    registros.forEach(registro => {
      worksheet.addRow({
        numeroCamiseta: registro.numeroCamiseta,
        nombreCompleto: registro.nombreCompleto,
        correo: registro.correo,
        identificacion: registro.identificacion,
        categoria: registro.categoria,
        fecha: new Date(registro.createdAt).toLocaleString(),
      });
    });

    // Configurar headers
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=registros.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ message: 'Error al generar el Excel', error });
  }
};

const exportarPDF = async (req, res) => {
  try {
    const { categoria } = req.query;

    let filtro = {};
    if (categoria) {
      filtro = { categoria };
    }

    const registros = await Registro.find(filtro).sort({ createdAt: 1 });

    if (registros.length === 0) {
      return res.status(400).json({ message: 'No hay registros para exportar.' });
    }

    // Documento tamaño carta en horizontal
    const doc = new PDFDocument({ margin: 40, size: 'LETTER', layout: 'landscape' });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="registros.pdf"');

    doc.pipe(res);

    doc.fontSize(20).text('Listado de Inscritos', { align: 'center' });
    if (categoria) {
      doc.moveDown().fontSize(14).text(`Categoría: ${categoria}`, { align: 'center' });
    }
    doc.moveDown();

    const tableTop = 100;
    const itemHeight = 25;
    const columnWidths = [40, 60, 130, 130, 80, 80, 120];

    const headers = ['No.', 'Camiseta', 'Nombre', 'Correo', 'Cédula', 'Categoría', 'Fecha'];

    // Dibujar encabezados
    let xPos = doc.page.margins.left;
    headers.forEach((h, i) => {
      doc
        .font('Helvetica-Bold')
        .fontSize(11)
        .text(h, xPos, tableTop, { width: columnWidths[i], align: 'left' });
      xPos += columnWidths[i];
    });

    // Dibujar filas con estilo cebra
    let yPos = tableTop + itemHeight;

    registros.forEach((reg, idx) => {
      xPos = doc.page.margins.left;

      if (idx % 2 === 0) {
        doc
          .rect(xPos, yPos - 5, columnWidths.reduce((a, b) => a + b, 0), itemHeight)
          .fill('#f2f2f2')
          .fillColor('black');
      }

      const row = [
        idx + 1,
        reg.numeroCamiseta,
        reg.nombreCompleto,
        reg.correo,
        reg.identificacion,
        reg.categoria,
        new Date(reg.createdAt).toLocaleString()
      ];

      row.forEach((val, i) => {
        doc
          .font('Helvetica')
          .fontSize(10)
          .fillColor('black')
          .text(val, xPos + 2, yPos, { width: columnWidths[i], align: 'left' });
        xPos += columnWidths[i];
      });

      yPos += itemHeight;

      if (yPos > doc.page.height - doc.page.margins.bottom - itemHeight) {
        doc.addPage({ size: 'LETTER', layout: 'landscape' });
        yPos = doc.page.margins.top;
      }
    });

    doc.end();
  } catch (error) {
    console.error('Error al generar el PDF:', error);
    res.status(500).json({ message: 'Error al generar PDF', error });
  }
};

/* PATCH /:id/pagar */
const marcarPagado = async (req,res)=>{
  try{
    const reg = await Registro.findByIdAndUpdate(
      req.params.id,
      { pagado:true },
      { new:true }
    );
    if(!reg) return res.status(404).json({ message:'Registro no encontrado'});
    res.json({ message:'Pago confirmado', data:reg });
  }catch(err){
    res.status(500).json({ message:'Error al confirmar pago', err });
  }
};

const desmarcarPagado = async (req, res) => {
  try {
    const registro = await Registro.findByIdAndUpdate(
      req.params.id,
      { pagado: false },
      { new: true }
    );
    if (!registro) {
      return res.status(404).json({ mensaje: 'Registro no encontrado' });
    }
    res.json({ mensaje: 'Pago desmarcado', registro });
  } catch (error) {
    console.error('Error al desmarcar pago:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
const actualizarPago = async (req, res) => {
  try {
    // se envía { pagado: true/false }
    const { pagado } = req.body;
    const reg = await Registro.findByIdAndUpdate(
      req.params.id,
      { pagado },
      { new: true }
    );
    if (!reg) return res.status(404).json({ message: 'Registro no encontrado' });
    res.json(reg);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar pago', err });
  }
};

module.exports = {
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
};
