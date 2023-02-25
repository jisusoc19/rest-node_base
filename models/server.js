const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.usuariosRoutePath = '/api/usuarios'
        

        // middleware
        this.middleware();
        //toutas
        this.routes();
    }
    middleware(){

        //cors
        this.app.use(cors());
        //parese y reader
        this.app.use(express.json());
        
        this.app.use(express.static('public'));
    }

    routes (){
       this.app.use(this.usuariosRoutePath, require('../routes/user'))       
    }
    listen(){
        
        this.app.listen(this.port,()=>{
            console.log(`Server is running on port `, this.port);
        })
    }

}

module.exports = Server;