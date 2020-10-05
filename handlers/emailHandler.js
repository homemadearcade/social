const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const sgTransport = require('nodemailer-sendgrid-transport');

exports.sendVerificationEmail = (data) => {
  const { email, _id, username } = data;

  const token = jwt.sign(
    {
      email,
      _id,
    },
    process.env.JWT_KEY
  );

  // config for mailserver and mail, input your data
  const config = {
    mailserver: {
      // host: 'smtp.gmail.com',
      // port: 465,
      // secure: true,
      service: "gmail",
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS,
      },
    },
    mail: {
      from: process.env.EMAILUSER,
      to: email,
      subject: "Account verification",
      template: "emailVerify",
      context: {
        token,
        username,
        host: process.env.HOST,
      },
    },
  };

  const sendMail = async ({ mailserver, mail }) => {
    // create a nodemailer transporter using smtp
    let transporter = nodemailer.createTransport(mailserver);

    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          partialsDir: "./emailViews/",
          defaultLayout: "",
        },
        viewPath: "./emailViews/",
        extName: ".hbs",
      })
    );

    // send mail using transporter
    await transporter.sendMail(mail);
  };

  sendMail(config).catch((err) => console.log(err));
};

exports.sendPasswordResetEmail = (data) => {
  const { email, _id, username } = data;
  const token = jwt.sign(
    {
      email,
      _id,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "10m",
    }
  );

  // config for mailserver and mail, input your data
  const config = {
    mailserver: {
      // host: 'smtp.gmail.com',
      // port: 465,
      // secure: true,
      service: "gmail",
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS,
      },
    },
    mail: {
      from: process.env.EMAILUSER,
      to: email,
      subject: "Password reset",
      template: "passwordReset",
      context: {
        token,
        username,
        host: process.env.HOST,
      },
    },
  };

  const sendMail = async ({ mailserver, mail }) => {
    // create a nodemailer transporter using smtp
    let transporter = nodemailer.createTransport(mailserver);

    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          partialsDir: "./emailViews/",
          defaultLayout: "",
        },
        viewPath: "./emailViews/",
        extName: ".hbs",
      })
    );

    // send mail using transporter
    await transporter.sendMail(mail);
  };

  sendMail(config).catch((err) => console.log(err));
};
