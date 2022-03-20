const{Router}=require('express');
const { Getpaquetes, Postpaquetes, Putpaquetes, Deletepaquetes } = require('../controllers/paquetes');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',Getpaquetes)
router.post('/',Postpaquetes)
router.put('/:id',Putpaquetes)
router.delete('/:id',Deletepaquetes)

module.exports=router