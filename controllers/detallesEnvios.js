const {request, response}=require('express')
const GetdetallesEnvios=(req=request,res=response)=>{
    //res.send('Get Endpoint para Detalle Envios')
    let lista =new ListadoDetalleEnvios()
    let datosJSON =leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
const PostdetallesEnvios=(req,res)=>{
    //res.send('Post Endpoint para Detalle Envios')
    let lista=new ListadodetalleEnvios()
    let dataJSON=leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.creardetalleEnvios(req.body)
    guardarDB(lista.listadoArr,'detalleEnvios')
    res.send('Registro Creado')
}
const PutdetallesEnvios=(req,res)=>{
    //res.send('Put Endpoint para detalleEnvios')
    let lista=new ListadodetalleEnvios()
    let datosJSON=leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos =lista.listadoArr.map(p=>
        p.id==req.params.id
        ?{"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'detalleEnvios')
    res.send('Registro Actualizado')
}
const DeletedetallesEnvios=(req,res)=>{
    //res.send('Delete Endpoint para Detalle Envios')
    let lista=new ListadodetalleEnvios()
    let datosJSON=leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para eliminar
    let data=lista.listadoArr.filter(item=>item.id!=req.params.id)
    guardarDB(data,'detalleEnvios')
    res.send('Registro Eliminado')
}

module.exports={
    GetdetallesEnvios,
    PostdetallesEnvios,
    PutdetallesEnvios,
    DeletedetallesEnvios
}