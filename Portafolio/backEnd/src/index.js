import express from "express";
import nodemailer from "nodemailer";
import cors from 'cors';
import morgan from 'morgan';
const App = express();

App.use(morgan("dev"));
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

App.post("/mensaje",(req, res) => {
  
  
  // Creamos el objeto de transporte para Gmail
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "conectordemensaje@gmail.com",
      pass: "dzbtzokhbzxfxrsu",
    },
  });

  // Constructor del mensaje
  let mailOptions = {
    from: "conectordemensaje@gmail.com",
    to: "sergiolinareslm@gmail.com",
    subject: req.body.necesidad,
    text: "Correo : "+req.body.correo+ "\nNombre : " +req.body.nombre+ "\nCelular : "+req.body.celular+"\n\n"+req.body.textoEscrito,
  };

  //Enviar correo
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Correo electrónico enviado: ' + info.response);
    }
});

  res.send("Mensaje enviado");
});

//?Default Route

App.get("/", (req, res) => {
  res.send("Saludo desde server");
});

App.listen(3000);

console.log("Server conectado 3000");
