const{Router}=require('express');
const { Getseguimientos } = require('../controllers/seguimientos');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',Getseguimientos)
router.post('/',Getseguimientos)
router.put('/',Getseguimientos)
router.delete('/',Getseguimientos)

module.exports=router