//importacion de las librerias necesarias a utilizar
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const mercadopago = require("mercadopago");
const database = require("./src/database");// Importación de un módulo personalizado para la base de datos

//middlewares
// Configuración de CORS para permitir ciertos orígenes
app.use(cors({
  origin:["http://127.0.0.7:5501","http://127.0.0.7:5500"]
}))
// Registro de solicitudes HTTP con Morgan
app.use(morgan("dev"));

// Análisis de datos JSON y URL codificada
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Configuración de rutas estáticas para servir archivos desde una carpeta "front"
app.use(express.static(path.join(__dirname, "../front")));
app.use(cors());

// REEMPLAZAMOS CON TU TOKEN DE ACCESO DISPONIBLE EN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: "TEST-5397765485790054-102111-48ef2db9170a74cb10c8f1b1e1055206-742117903",
});
// Ruta raíz que envía un archivo HTML
app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "../front", "cart.html");
  res.sendFile(filePath);
});
// Ruta para crear una preferencia de pago con MercadoPago
app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:8080",
      failure: "http://localhost:8080",
      pending: "",
    },
    auto_return: "approved",
  };
// Crear la preferencia
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});
// Ruta para recibir información de confirmación de pago desde MercadoPago
app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});
// Configuramos del puerto y el inicio del servidor
app.set("port",8080);
app.listen(app.get("port"));
console.log("escuchando el puerto "+app.get("port"));

// Ruta para obtener datos de productos desde una base de datos
app.get("/productos", async (req, res) =>{
  try {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * from producto");
    console.log(result);
    res.json(result); // Enviar los resultados como respuesta a Postman
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la consulta a la base de datos" });
  }
})

