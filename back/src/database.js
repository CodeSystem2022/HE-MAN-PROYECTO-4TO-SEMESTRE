//importacion de las librerias necesarias a utilizar
const mysql = require("promise-mysql");
const dotenv = require("dotenv");
dotenv.config();// Cargar las variables de entorno definidas en un archivo .env en el entorno Node.js
// Esto permite acceder a estas variables a través de process.env en el programa.

// Se crea una conexión a la base de datos utilizando variables de entorno
const connection = mysql.createConnection({
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
})

// Se define una función asincrónica para obtener la conexión
const getConnection = async ()=> await connection;
// Exportamos la función getConnection para su uso en otros módulos
module.exports ={
    getConnection
}