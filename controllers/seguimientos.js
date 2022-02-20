const {request, response}=require('express')
const Getseguimientos=(req,res)=>{
    res.send('Get Endpoint para Detalle seguimientos')
}
const Postseguimientos=(req,res)=>{
    res.send('Post Endpoint para Detalle seguimientos')
}
const Putseguimientos=(req,res)=>{
    res.send('Put Endpoint para Detalle seguimientos')
}
const Deleteseguimientos=(req,res)=>{
    res.send('Delete Endpoint para Detalle seguimientos')
}
module.exports={
    Getseguimientos,
    Postseguimientos,
    Putseguimientos,
    Deleteseguimientos
}