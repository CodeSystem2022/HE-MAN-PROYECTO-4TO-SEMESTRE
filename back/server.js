const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const mercadopago = require("mercadopago");
const database = require("./src/database");

//middlewares
app.use(cors({
  origin:["http://127.0.0.7:5501","http://127.0.0.7:5500"]
}))
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../front")));
app.use(cors());

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: "TEST-5397765485790054-102111-48ef2db9170a74cb10c8f1b1e1055206-742117903",
});

app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "../front", "cart.html");
  res.sendFile(filePath);
});

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

app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.set("port",8080);
app.listen(app.get("port"));
console.log("escuchando el puerto "+app.get("port"));


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

