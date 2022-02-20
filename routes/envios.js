const{Router}=require('express');
const { GetEnvios } = require('../controllers/envios');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',GetEnvios)
router.post('/',GetEnvios)
router.put('/',GetEnvios)
router.delete('/',GetEnvios)

module.exports=router