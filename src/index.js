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
api.post("/api/novel", async (req, res) => {
    const { title, author, year, gender } = req.body;
    const connection = await getDBConnection();
    const queryNovel = "INSERT INTO novels (title, author, year, gender) VALUES (?, ?, ?, ?)";
    const [result] = await connection.query(queryNovel, [title, author, year, gender]);
    console.log(result);
    connection.end();
    res.status(200).json({ succes: true })

    //res.json({});
})

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
api.put("/api/novel/:idNovel", async (req, res) => {
    const id = req.params.idNovel;
    //console.log(req.body);
    const { title, author, year, gender } = req.body;
    const connection = await getDBConnection();
    const queryId = "UPDATE novels SET title= ?, author= ?, year = ?, gender = '?' WHERE idNovel = ?";
    const [result] = await connection.query(queryId, [title, author, year, gender, id]);
    //console.log(result);
    connection.end();
    res.json({ succes: true });

})




//Eliminar una entrada existente.
