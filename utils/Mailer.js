const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP,
  port: process.env.EMAIL_PORT || 465,
  secure: process.env.EMAIL_PORT ? process.env.EMAIL_PORT === 465 : true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

exports.sendMail = async (email, subject, html) => {
  await transporter.sendMail({
    from: 'name xxx@xxx.com',
    to: email,
    subject: subject,
    html: html
  });
};
