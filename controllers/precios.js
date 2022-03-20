const {request, response}=require('express')
const Getprecios=(req,res)=>{
    //res.send('Get Endpoint para Detalle precios')
    let lista =new ListadoPrecios()
    let datosJSON =leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
const Postprecios=(req,res)=>{
    //res.send('Post Endpoint para Detalle precios')
    let lista=new ListadoPrecios()
    let dataJSON=leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPrecios(req.body)
    guardarDB(lista.listadoArr,'precios')
    res.send('Registro Creado')
}
const Putprecios=(req,res)=>{
    //res.send('Put Endpoint para precios')
    let lista=new ListadoPrecios()
    let datosJSON=leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos =lista.listadoArr.map(p=>
        p.id==req.params.id
        ?{"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'precios')
    res.send('Registro Actualizado')
}
const Deleteprecios=(req,res)=>{
    //res.send('Delete Endpoint para Detalle precios')
    let lista=new ListadoPrecios()
    let datosJSON=leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para eliminar
    let data=lista.listadoArr.filter(item=>item.id!=req.params.id)
    guardarDB(data,'precios')
    res.send('Registro Eliminado')
}
module.exports={
    Getprecios,
    Postprecios,
    Putprecios,
    Deleteprecios
}