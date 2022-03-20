const {request, response}=require('express')
const Getseguimientos=(req,res)=>{
    //res.send('Get Endpoint para Detalle seguimientos')
    let lista =new ListadoSeguimientos()
    let datosJSON =leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
const Postseguimientos=(req,res)=>{
    //res.send('Post Endpoint para Detalle seguimientos')
    let lista=new ListadoSeguimientos()
    let dataJSON=leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimientos(req.body)
    guardarDB(lista.listadoArr,'seguimientos')
    res.send('Registro Creado')
}
const Putseguimientos=(req,res)=>{
    //res.send('Put Endpoint para seguimiento')
    let lista=new ListadoSeguimientos()
    let datosJSON=leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos =lista.listadoArr.map(p=>
        p.id==req.params.id
        ?{"id":p.id,...req.body}
        : p
        );
    guardarDB(datos,'seguimientos')
    res.send('Registro Actualizado')
}
const Deleteseguimientos=(req,res)=>{
    //res.send('Delete Endpoint para Detalle seguimientos')
    let lista=new ListadoSeguimientos()
    let datosJSON=leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para eliminar
    let data=lista.listadoArr.filter(item=>item.id!=req.params.id)
    guardarDB(data,'seguimientos')
    res.send('Registro Eliminado')
}
module.exports={
    Getseguimientos,
    Postseguimientos,
    Putseguimientos,
    Deleteseguimientos
}