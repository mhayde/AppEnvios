const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.routes();
    }
    routes(){
        this.app.get('/',(req,res)=>res.send('Inicio'))

        this.app.get('/precios',(req,res)=>res.send('EndPoint para Precios'))
        this.app.post('/precios',(req,res)=>res.send('EndPoint para Precios'))
        this.app.put('/precios',(req,res)=>res.send('EndPoint para Precios'))
        this.app.delete('/precios',(req,res)=>res.send('EndPoint para Precios'))

        this.app.get('/paquetes',(req,res)=>res.send('EndPoint para Paquete'))
        this.app.post('/paquetes',(req,res)=>res.send('EndPoint para Paquete'))
        this.app.put('/paquetes',(req,res)=>res.send('EndPoint para Paquete'))
        this.app.delete('/paquetes',(req,res)=>res.send('EndPoint para Paquete'))

        this.app.get('/envio',(req,res)=>res.send('EndPoint para Envio'))
        this.app.post('/envio',(req,res)=>res.send('EndPoint para Envio'))
        this.app.put('/envio',(req,res)=>res.send('EndPoint para Envio'))
        this.app.delete('/envio',(req,res)=>res.send('EndPoint para Envio'))

        this.app.get('/detalleEnvios',(req,res)=>res.send('EndPoint para DetalleEnvios'))
        this.app.post('/detalleEnvios',(req,res)=>res.send('EndPoint para DetalleEnvios'))
        this.app.put('/detalleEnvios',(req,res)=>res.send('EndPoint para DetalleEnvios'))
        this.app.delete('/detalleEnvios',(req,res)=>res.send('EndPoint para DetalleEnvios'))

        this.app.get('/seguimientos',(req,res)=>res.send('EndPoint para Seguimientos'))
        this.app.post('/seguimientos',(req,res)=>res.send('EndPoint para Seguimientos'))
        this.app.put('/seguimientos',(req,res)=>res.send('EndPoint para Seguimientos'))
        this.app.delete('/seguimientos',(req,res)=>res.send('EndPoint para Seguimientos'))
    }

    listen(){
        this.app.listen(process.env.PORT,()=>
        console.log("El puerto esta corriendo el puerto TPC"+process.env.PORT))
    }
        
}

module.exports=Server