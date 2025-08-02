const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

async function enviarCorreo(destinatario, asunto, mensajeHtml) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporte = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `Running Popayán 🏃‍♂️ <${process.env.GMAIL_USER}>`,
      to: destinatario,
      subject: asunto,
      html: mensajeHtml,
    };

    const resultado = await transporte.sendMail(mailOptions);
    console.log('✅ Correo enviado:', resultado.response);
  } catch (error) {
    console.error('❌ Error al enviar el correo:', error);
  }
}

module.exports = enviarCorreo;
