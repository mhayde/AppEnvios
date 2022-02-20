const{Router}=require('express');
const { Getprecios } = require('../controllers/precios');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',Getprecios)
router.post('/',Getprecios)
router.put('/',Getprecios)
router.delete('/',Getprecios)

module.exports=router