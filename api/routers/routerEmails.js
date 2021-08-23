const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>Iniciaste sesión</p>
    `;

  
    var transport = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "larissa.upton@ethereal.email",
        pass: "v8jgq6EEMxACWdNP5g",
      },
    });


    const info = await transport.sendMail({
      from: '"Fast Food :)"  <smtp.ethereal.email>',
      to: `${user.email}`,
      subject: `Hello ${user.name}! Welcome to Fast Food App, glad to have you with us :)`,
      html: contentHTML,
    });
    console.log("Message sent: %s", info.messageId);
    return res.json({message: 'Inicio de sesión'})
})




module.exports = router;