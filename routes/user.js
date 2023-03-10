const {Router} = require("express");
const { check } = require("express-validator");
const {rolvalid, emailexists,existeusuarioporid} = require("../helpers/db-validators")
const {usuariosget, 
       usuariosdelete, 
       usuariospost, 
       usuariosput, 
       usuariospatch} = require('../controllers/user');
const {validarcampos} = require('../middleware/Validar-campos')

const router =  Router();


router.get('/',usuariosget);

router.post('/',[
       check('nombre',  'el nombre es obligatorio').not().isEmpty(),
       check('correo', 'el correo no es valido').isEmail(),
       check('password', 'el password es obligatorio y de 6 caracteres').isLength({min:6}),
       check('correo').custom(emailexists),
       // check('rol', 'no es un rol valido').isIn('ADMIN_ROLE','USER_ROLE'),
       check('rol').custom(rolvalid),
       validarcampos
],usuariospost);

router.put('/:id',[
     check('id', 'el id no es valido').isMongoId(),
     check('id').custom(existeusuarioporid),
     check('rol').custom(rolvalid),
     check('correo', 'el correo no es valido').isEmail(),
     validarcampos
],usuariosput);

router.delete('/:id',[
       check('id', 'el id no es valido').isMongoId(),
       check('id').custom(existeusuarioporid),
       validarcampos
],usuariosdelete);

router.patch('/',[
       validarcampos

],usuariospatch)

 module.exports = router;