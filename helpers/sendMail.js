"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(fullname, sender, content) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "kodekite@gmail.com", // generated ethereal user
      pass: "f4ls3emercent" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${fullname} 👻" ${sender}`, // sender address
    to: "fajrin.noorrachman11@gmail.com, onesinus231@gmail.com", // list of receivers
    subject: `Contact Us From ${fullname} ✔`, // Subject line
    text: `${content}`, // plain text body
    html: `${content}` // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendMail;

// sendMail().catch(console.error);