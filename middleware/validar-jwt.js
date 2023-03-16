const { response, request } = require("express")
const jw = require("jsonwebtoken");
const Usuario = require("../models/usuario");

const validarjwt = async(req=request,res=response, next) =>{
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg:'no hay token en la peticion'
        })
    }


    try {
        
        const {uid} =jw.verify(token,process.env.SECRETORPRIVATEKEY)
        const usuario= await Usuario.findById(uid)


        if (!usuario){

            return res.status(401).json({
                msg:"token no valido - usuario no existe en db"
            })
        }

        if (!usuario.estado){

            return res.status(401).json({
                msg:"token no valido - usuario estado false"
            })
        }
        req.usuario = usuario;
        next();

    } catch (error) {

        console.log(error)
        res.status(401).json({
            msg:'token no valido'
        })
    }
    


}
module.exports = {
    validarjwt
}