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
const Putenvios=(req=request,res=response)=>{
    //res.send('Put Endpoint para Envios')
    let lista=new ListadoEnvios()
    let datosJSON=leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos =lista.listadoArr.map(p=>
        p.id==req.params.id
        ?{"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'envios')
    res.send('Registro Actualizado')
}
const Deleteenvios=(req=request,res=reponse)=>{
    //res.send('Delete Endpoint para Envios')
    let lista=new ListadoEnvios()
    let datosJSON=leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para eliminar
    let data=lista.listadoArr.filter(item=>item.id!=req.params.id)
    guardarDB(data,'envios')
    res.send('Registro Eliminado')
}
module.exports={
    Getenvios,
    Postenvios,
    Putenvios,
    Deleteenvios
}