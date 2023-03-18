const {Router} = require("express");
const { check } = require("express-validator");
const { login, googlesingin } = require("../controllers/auth");
const { validarcampos } = require("../middleware/Validar-campos");



const router =  Router();

router.post('/login',
    check('correo', "correo es obligatorio").isEmail(),
    check('password', " la contraseña es obligatoria").not().isEmpty(),
    validarcampos
,login );

router.post('/google',
    check('id_token', "id_token es necesario").not().isEmpty(),
    validarcampos
,googlesingin );


module.exports = router;