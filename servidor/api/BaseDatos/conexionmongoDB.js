const mongoose = require('mongoose');
require('dotenv').config();   


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log('Conexión a MongoDB establecida'))            
    }
    catch(err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

module.exports = connectDB;