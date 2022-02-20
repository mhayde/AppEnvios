const {request, response}=require('express')
const Getenvios=(req,res)=>{
    res.send('Get Endpoint para Envios')
}
const Postenvios=(req,res)=>{
    res.send('Post Endpoint para Envios')
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