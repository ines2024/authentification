const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'ines.lahbib7@gmail.com', // generated ethereal user
    pass: 'mysj cyuw cavj mcqw', // generated ethereal password
  },
});

const sendEmail = (async (req, res) => { 
  const { email } = req.body;
  

  var mailOptions = {
    from: "ines.lahbib7@gmail.com",
    to: email,
    subject: "validation email",
    text: "you have to validate your email",
  };

  const info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send({ms:"Email sent successfully!"});
    }
  });
});

module.exports = { sendEmail };