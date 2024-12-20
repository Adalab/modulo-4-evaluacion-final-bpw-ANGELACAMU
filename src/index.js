//imports
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// crear el servidor
const api = express();

//para usar variables de entorno
require("dotenv").config();

//configuramos para que el servidor acepte peticiones externas
api.use(cors());

//y que va a recibir y enviar datos en formato json
api.use(express.json());

//conectar con la DB
async function getDBConnection() {
    const connection = await mysql.createConnection({
        host: "graphic-novels-anyo333-8c10.l.aivencloud.com",
        user: "avnadmin",
        password: process.env.PASSWORD_DB,
        database: process.env.DATABASE_DB,
        port: "19367"

    });
    connection.connect();
    return connection;
}


//puerto
const port = 4001;

//si el servidor se levanta bien o no lo comprobamos así:
api.listen(port, () => {
    console.log(`Server is listening in http://localhost:${port}`)
})

//ENDPOINTS

//Insertar una entrada en su entidad principal.
api.post("/api/novels")

//Leer/Listar todas las entradas existentes.
api.get("/api/novels", async (req, res) => {
    const connection = await getDBConnection();
    const queryNovels = "SELECT * FROM novels";
    const [result] = await connection.query(queryNovels);
    console.log(result);
    connection.end();

    //res.json({});
    res.status(200).json({ list: result });
})




//Actualizar una entrada existente.

//Eliminar una entrada existente.
