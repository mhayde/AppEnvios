const {request, response}=require('express')
const Getprecios=(req,res)=>{
    res.send('Get Endpoint para Detalle precios')
}
const Postprecios=(req,res)=>{
    res.send('Post Endpoint para Detalle precios')
}
const Putprecios=(req,res)=>{
    res.send('Put Endpoint para Detalle precios')
}
const Deleteprecios=(req,res)=>{
    res.send('Delete Endpoint para Detalle precios')
}
module.exports={
    Getprecios,
    Postprecios,
    Putprecios,
    Deleteprecios
}