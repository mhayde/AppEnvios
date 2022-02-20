const {request, response}=require('express')
const Getpaquetes=(req,res)=>{
    res.send('Get Endpoint para Detalle paquetes')
}
const Postpaquetes=(req,res)=>{
    res.send('Post Endpoint para Detalle paquetes')
}
const Putpaquetes=(req,res)=>{
    res.send('Put Endpoint para Detalle paquetes')
}
const Deletepaquetes=(req,res)=>{
    res.send('Delete Endpoint para Detalle paquetes')
}
module.exports={
    Getpaquetes,
    Postpaquetes,
    Putpaquetes,
    Deletepaquetes
}