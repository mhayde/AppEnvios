const {request, response}=require('express');
const { leerDB, guardarDB } = require('../helpers/gestorDB');
const Getenvios=(req,res)=>{
    //res.send('Get Endpoint para Envios')
    let lista =new ListadoEnvios()
    let datosJSON =leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
const Postenvios=(req=request,res=response)=>{
    //res.send('Post Endpoint para Envios')
    let lista=new ListadoEnvios()
    let dataJSON=leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvios(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}
const Putenvios=(req,res)=>{
    res.send('Put Endpoint para Envios')
}
const Deleteenvios=(req,res)=>{
    res.send('Delete Endpoint para Envios')
}
module.exports={
    Getenvios,
    Postenvios,
    Putenvios,
    Deleteenvios
}