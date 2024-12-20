//imports
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// crear el servidor
const server = express();

//configuramos para que el servidor acepte peticiones externas
server.use(cors());

//y que va a recibir y enviar datos en formato json
server.use(express.json());

//puerto
const port = 4001;

//si el servidor se levanta bien o no lo comprobamos así:
server.listen(port, () => {
    console.log(`Server is listening in http://localhost:${port}`)
})