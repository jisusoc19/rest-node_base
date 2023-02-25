const {Router} = require("express");
const {usuariosget, 
       usuariosdelete, 
       usuariospost, 
       usuariosput, 
       usuariospatch} = require('../controllers/user');

const router =  Router();


router.get('/',usuariosget);

router.post('/',usuariospost);

router.put('/:id',usuariosput);

router.delete('/',usuariosdelete);

router.patch('/',usuariospatch)

 module.exports = router;