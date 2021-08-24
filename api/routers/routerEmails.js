const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const {google} = require('googleapis');
const {CLIENT_ID,CLIENT_SECRET,CLIENT_URI,REFRESH_TOKEN} = process.env;

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  const contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>Iniciaste sesión</p>
    `;

const oAuthClinent = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,CLIENT_URI);

oAuthClinent.setCredentials({refresh_token:REFRESH_TOKEN});

const sendMail = async() =>{
    try {
        const  TOKEN = await oAuthClinent.getAccessToken();
      const transporter=  nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"OAuth2",
                user:"jczord23@gmail.com",
                clientId:CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken:REFRESH_TOKEN,
                accessToken:TOKEN
            },
        });
        const mailOptions ={
            from:"Pagina Web NodeMailer <Ecommercefastfood@gmail.com>",
            to:`${email}`,
            subject:"Nodemailer FastFood-Ecommece",
            html:contentHTML
        };
        const envio = await transporter.sendMail(mailOptions)
        return envio;
    } catch (error) {
        console.log(error)
    }
};

sendMail()
.then(result => res.json('enviado'))
.catch(error => console.log(error.message))

   
});




module.exports = router;