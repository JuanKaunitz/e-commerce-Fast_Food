const express = require('express');
const nodemailer = require('nodemailer');
const htmlTemplate = `
<h1>User Information</h1>
<ul>
    <li>Username: ${name}</li>
    <li>User Email: ${email}</li>
    <li>PhoneNumber: ${phone}</li>
</ul>
<p>${message}</p>
`;

const createTrans = () => {
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 2525,
        auth: {
          user: "639c493510b2cb",
          pass: "cb55199ef662ba"
        }
      });
      return transport;
}


const sendMail = async (user) => {
    const transporter = createTrans();
    const info = await transporter.sendMail({
        from: '"Fast Food :)"  <ecommercefastfood@gmail.com>',
        to: `${user.email}`,
        subject: `Hello ${user.name}! Welcome to Fast Food App, glad to have you with us :)`,
        html: htmlTemplate
    })
    console.log('Message sent: %s', info.messageId)
    return 
}

exports.sendMail = (user) => sendMail(user);
