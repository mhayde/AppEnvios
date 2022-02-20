const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.routes();
    }
    routes(){
        this.app.get('/',(req,res)=>res.send('Inicio'))
        this.app.use('/detallesEnvios',require('../routes/detallesEnvios'))
        this.app.use('/envios',require('../routes/envios'))
        this.app.use('/paquetes',require('../routes/paquetes'))
        this.app.use('/precios',require('../routes/precios'))
        this.app.use('/seguimiento',require('../routes/seguimiento'))
    }

    listen(){
        this.app.listen(process.env.PORT,()=>
        console.log("El puerto esta corriendo el puerto TPC"+process.env.PORT))
    }
        
}

module.exports=Server