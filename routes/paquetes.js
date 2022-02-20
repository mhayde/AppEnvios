const{Router}=require('express');
const { Getpaquetes } = require('../controllers/paquetes');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',Getpaquetes)
router.post('/',Getpaquetes)
router.put('/',Getpaquetes)
router.delete('/',Getpaquetes)

module.exports=router