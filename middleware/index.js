const validarcampos = require('../middleware/Validar-campos');
const validarjwt  = require("../middleware/validar-jwt");
const validaroles = require("../middleware/validar-roles");


module.exports={
    ...validarcampos,
    ...validarjwt,
    ...validaroles

}