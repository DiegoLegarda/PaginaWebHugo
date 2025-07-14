const express = require('express');
const connectDB = require('./BaseDatos/conexionmongoDB');
const { iniciarBot } = require('./telegrambot');
const cors = require('cors');
const router = express.Router();

//crear carpeta si no exite
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'uploads');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);


const app = express();
const puerto = process.env.PORT || 3001;

// Middleware para parsear el body de la solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const allowedOrigins = [
  'http://localhost:5173',
  'https://pagina-running-popayan.vercel.app'
  
];


// Iniciar el bot
iniciarBot();

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// archivos estáticos
// antes de express.static
app.use('/uploads', (req, res, next) => {
  console.log('▶️  GET /uploads' + req.url);
  next();
});

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));



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

