require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

let bot;
const userStates = {};

const iniciarBot = () => {
  bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

  console.log('🤖 Bot de Telegram iniciado');

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text?.toLowerCase();

    if (userStates[chatId] === 'esperando_tiempo') {
      bot.sendMessage(chatId, `Tu tiempo registrado para la carrera es: 1 hora 45 minutos. ¡Felicidades! 🏅`);
      delete userStates[chatId];
      return;
    }

    if (text?.includes('hola') || text?.includes('buenas')) {
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
};

module.exports = { iniciarBot };


