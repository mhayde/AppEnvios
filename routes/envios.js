const{Router}=require('express');
const { Postenvios, Getenvios, Putenvios, Deleteenvios } = require('../controllers/envios');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',Getenvios)
router.post('/',Postenvios)
router.put('/:id',Putenvios)
router.delete('/:id',Deleteenvios)

module.exports=router