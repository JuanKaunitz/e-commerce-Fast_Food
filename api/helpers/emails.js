const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const util = require('util');
const {CLIENT_ID,CLIENT_SECRET,CLIENT_URI,REFRESH_TOKEN,USER_EMIAL} = process.env;



const oAuthClinent = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,CLIENT_URI);
oAuthClinent.setCredentials({refresh_token:REFRESH_TOKEN});

exports.enviar = async (opciones) => {
    const  TOKEN = await oAuthClinent.getAccessToken();
    let transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            type:"OAuth2",
            user:USER_EMIAL,
            clientId:CLIENT_ID,
            clientSecret:CLIENT_SECRET,
            refreshToken:REFRESH_TOKEN,
            accessToken:TOKEN
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const opcionesEmail = {
        from:'Pagina Web NodeMailer <ecommercefastfood@gmail.com>"',
        to: opciones.email,
        subject : opciones.subject, 
        html: opciones.contentHTML,
        // context: {
        //     resetUrl : opciones.resetUrl
        // },
    };

    const sendMail = util.promisify(transport.sendMail, transport);
    return sendMail.call(transport, opcionesEmail);
}
