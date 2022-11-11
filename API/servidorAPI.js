import express from 'express'

import {rutas} from '../Routes/rutas.js'

import {conectarConMongo} from '../Database/conexion.js'

import cors from 'cors'


export class servidorAPI{

    constructor(){
        this.app = express() //Atributo de una clase
        this.conectarConBD()
        this.activarBody()
        this.atenderPeticiones()
    }

    //Metodos de la clase servidorAPI
    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Servidor encendido: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutas)
    }

    conectarConBD(){
        conectarConMongo()
    }

    activarBody(){
        this.app.use(cors())
        this.app.use(express.json())
    }

}