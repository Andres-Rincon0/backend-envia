const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js')

class Server {
    constructor(){
        this.Server = express();

        
        this.port= process.env.PORT
        this.clientesPath= "/api/clientes";
        //conectar a base de datos 
        this.connectDB(); 

        //middleware
        this.middleware();
        //leer y parsear un json
        this.Server.use(express.json())
        //routting
        this.routes();

    }
    
    async connectDB(){
        await dbConnection();
    }

    middleware(){
        //cors
        this.Server.use(cors());
        this.Server.use(express.static('public'))
    }

    routes(){
        this.Server.use(this.clientesPath, require('../routes/Clientes.routes.js'))
    }

    listen(){
        this.Server.listen(this.port,()=>{
            console.log(`server listening on port ${this.port}`);
        });
    }
}

module.exports = Server;