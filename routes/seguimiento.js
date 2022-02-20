const{Router}=require('express');
const { Getseguimientos, Postseguimientos, Putseguimientos, Deleteseguimientos } = require('../controllers/seguimientos');
//destructurar un objeto y solo obtener lo que ocupo de el
const router=Router();
//inicializo la funcion Router
router.get('/',Getseguimientos)
router.post('/',Postseguimientos)
router.put('/',Putseguimientos)
router.delete('/',Deleteseguimientos
)

module.exports=router