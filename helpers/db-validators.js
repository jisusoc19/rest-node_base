const Role = require("../models/role");
const Usuario = require('../models/usuario');

const rolvalid = async(rol='') =>{
    const existerol = await Role.findOne({rol});
    if( !existerol ){
           throw new Error(`el rol ${rol} no esta registrado en la db`);
    }
}

const emailexists = async (correo='') =>{
    const existeEmail= await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`el correo ${correo} ya esta registrado`);
    }


}

const existeusuarioporid = async (id) =>{
    const existeusuario= await Usuario.findById(id);
    if(!existeusuario){
        throw new Error(`el id ${id} no existe`);
    }


}
module.exports = {
    rolvalid, emailexists,existeusuarioporid
}