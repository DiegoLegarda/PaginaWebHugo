// middlewares/upload.js
const multer = require('multer');
const path   = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename   : (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const nombre = `${Date.now()}-${Math.round(Math.random()*1e9)}${ext}`;
    cb(null, nombre);
  }
});
const fileFilter = (req, file, cb) => {
  const ok = /jpeg|jpg|png|pdf/i.test(file.mimetype);
  cb(null, ok);
};
module.exports = multer({ storage, fileFilter });
