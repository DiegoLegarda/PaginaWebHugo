const express = require('express');
const connectDB = require('./BaseDatos/conexionmongoDB');
const cors = require('cors');
const router = express.Router();


const app = express();
const puerto = process.env.PORT || 3001;

// Middleware para parsear el body de la solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173','https://pagina-running-popayan.vercel.app/'],
  //origin: 'https://ejemplodesplieguereact.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

//escribir un metodo get
app.get('/inicio', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Rutas
app.use('/api/registro', require('./rutas/registro'));
app.use('/api/contacto', require('./rutas/contacto'));


// Conectar a la base de datos
connectDB();

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor iniciado en http://localhost:${puerto}`);
});

