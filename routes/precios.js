const{Router}=require('express');
const { Getprecios, Postprecios, Putprecios, Deleteprecios } = require('../controllers/precios');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',Getprecios)
router.post('/',Postprecios)
router.put('/:put',Putprecios)
router.delete('/:put',Deleteprecios)

module.exports=router