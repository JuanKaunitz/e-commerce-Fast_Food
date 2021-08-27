const express = require("express");
const router = express.Router();

const enviarEmail = require('../helpers/emails');

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

await enviarEmail.enviar({
    email,
    name,
    contentHTML
})
.then(result => res.json('enviado'))
.catch(error => console.log(error.message))

   
});


module.exports = router;