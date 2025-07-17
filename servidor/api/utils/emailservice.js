const { google } = require('googleapis');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

console.log('Cargando configuración de correo electrónico desde .env:', process.env.GMAIL_USER);

// 1. Configurar el cliente OAuth2
const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'  // Puedes cambiar si usaste otra redirección
);

// 2. Establecer token de refresco
oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

/**
 * Enviar correo de confirmación
 * @param {Object} registro - Objeto con campos: nombre, email
 */
async function enviarCorreoConfirmacion(registro) {
  try {
    // 3. Obtener accessToken válido
    const accessToken = await oAuth2Client.getAccessToken();

    // 4. Crear el transport
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken?.token || accessToken,
      }
    });

    // 5. Opciones del correo
    const mailOptions = {
      from: `"Carrera Popayán" <${process.env.GMAIL_USER}>`,
      to: registro.email,
      subject: 'Confirmación de pago',
      text: `Hola ${registro.nombre}, hemos verificado tu pago. ¡Gracias por registrarte!`,
    };

    // 6. Enviar correo
    const result = await transport.sendMail(mailOptions);
    console.log('✅ Correo enviado:', result.response);
    return result;
  } catch (error) {
    console.error('❌ Error enviando correo:', error.response || error);
    throw error;
  }
}

module.exports = { enviarCorreoConfirmacion };
