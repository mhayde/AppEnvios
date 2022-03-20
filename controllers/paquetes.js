const {request, response}=require('express')
const Getpaquetes=(req,res)=>{
    //res.send('Get Endpoint para Detalle paquetes')
    let lista =new ListadoPaquetes()
    let datosJSON =leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
const Postpaquetes=(req,res)=>{
    //res.send('Post Endpoint para Detalle paquetes')
    let lista=new ListadoPaquetes()
    let dataJSON=leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvios(req.body)
    guardarDB(lista.listadoArr,'paquetes')
    res.send('Registro Creado')
}
const Putpaquetes=(req,res)=>{
    //res.send('Put Endpoint para paquetes')
    let lista=new ListadoPaquetes()
    let datosJSON=leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos =lista.listadoArr.map(p=>
        p.id==req.params.id
        ?{"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'paquetes')
    res.send('Registro Actualizado')
}
const Deletepaquetes=(req,res)=>{
    //res.send('Delete Endpoint para Detalle paquetes')
    let lista=new ListadoPaquetes()
    let datosJSON=leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para eliminar
    let data=lista.listadoArr.filter(item=>item.id!=req.params.id)
    guardarDB(data,'paquetes')
    res.send('Registro Eliminado')
}
module.exports={
    Getpaquetes,
    Postpaquetes,
    Putpaquetes,
    Deletepaquetes
}