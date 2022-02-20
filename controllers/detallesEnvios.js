const {request, response}=require('express')
const GetdetallesEnvios=(req=request,res=response)=>{
    res.send('Get Endpoint para Detalle Envios')
}
const PostdetallesEnvios=(req,res)=>{
    res.send('Post Endpoint para Detalle Envios')
}
const PutdetallesEnvios=(req,res)=>{
    res.send('Put Endpoint para Detalle Envios')
}
const DeletedetallesEnvios=(req,res)=>{
    res.send('Delete Endpoint para Detalle Envios')
}

module.exports={
    GetdetallesEnvios,
    PostdetallesEnvios,
    PutdetallesEnvios,
    DeletedetallesEnvios
}