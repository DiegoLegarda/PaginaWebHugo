require('dotenv').config();
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = process.env.PORT || 3002;

// Configuración del bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
const userStates = {}; // Aquí vamos a guardar el estado de cada usuario
// Cuando el usuario envía un mensaje de texto
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  // Si el usuario está esperando su tiempo
  if (userStates[chatId] === 'esperando_tiempo') {
    // Aquí puedes hacer la consulta real a MongoDB más adelante
    bot.sendMessage(chatId, `Tu tiempo registrado para la carrera es: 1 hora 45 minutos. ¡Felicidades! 🏅`);
    delete userStates[chatId]; // Se borra el estado para volver al menú principal después
    return;
  }

  // Menú inicial
  if (text.includes('hola') || text.includes('buenas')) {
    bot.sendMessage(chatId, '¡Hola! Bienvenido a 27k Running Popayán 🏃‍♂️. ¿Qué deseas consultar?', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Inscripción 📝', callback_data: 'inscripcion' }],
          [{ text: 'Ruta 📍', callback_data: 'ruta' }],
          [{ text: 'Contacto 📞', callback_data: 'contacto' }],
          [{ text: 'Consultar Tiempo ⏱️', callback_data: 'tiempo' }]
        ]
      }
    });
  } else {
    bot.sendMessage(chatId, 'Por favor escribe "Hola" para comenzar el menú.');
  }
});

// Cuando el usuario presiona un botón
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const option = query.data;

  if (option === 'inscripcion') {
    bot.sendMessage(chatId, 'Puedes inscribirte aquí 👉 https://tusitio.com');
  } else if (option === 'ruta') {
    bot.sendMessage(chatId, 'La ruta de la competencia es: Popayán - [Ver Mapa](https://goo.gl/maps/xxxx)', { parse_mode: 'Markdown' });
  } else if (option === 'contacto') {
    bot.sendMessage(chatId, 'Puedes contactarnos al correo: contacto@mediamaratonpopayan.com o al número: +57 312 345 6789');
  } else if (option === 'tiempo') {
    userStates[chatId] = 'esperando_tiempo';
    bot.sendMessage(chatId, 'Por favor envíame tu número de inscripción para consultar tu tiempo.');
  }
});

// Backend funcionando
app.get('/', (req, res) => {
  res.send('Servidor Backend y Telegram Bot Activos ✅');
});

// Arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
