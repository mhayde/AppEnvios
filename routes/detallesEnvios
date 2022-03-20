const{Router}=require('express');
const { GetdetallesEnvios, PostdetallesEnvios, PutdetallesEnvios, DeletedetallesEnvios } = require('../controllers/detallesEnvios');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',GetdetallesEnvios)
router.post('/',PostdetallesEnvios)
router.put('/:id',PutdetallesEnvios)
router.delete('/:id',DeletedetallesEnvios)

module.exports=router