const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.studentPath = process.env.ENDPOINT_SERVICE_UNIVERSITY;

        //Conectar a BD
        this.conectarDB();

        //Middleware
        this.middlewares();

        //Rutas de la Aplicacion 
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //lectura y parseo del Body para configurar en formato JSON
        this.app.use(express.json());


        //directorio publico
        //this.app.use(express.static('public'));

    };

    routes() {
        this.app.use(this.studentPath, require('../routes/student'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log("Escuchando en el puerto", this.port);
        });
    };
}

module.exports = Server;