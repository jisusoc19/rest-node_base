const {response} = require('express')
const bcryp = require("bcryptjs")
const Usuario = require("../models/usuario")
const { generarJwt } = require('../helpers/generar-jwt')

const login = async(req, res= response) =>{
    const {correo, password}= req.body
    

    try {
        //verificacion 
        const usuario = await Usuario.findOne({correo})

        if(!usuario){
            return res.status(400).json({
                msg: 'el usuario / contraseña no son correctos - correo'
            })

        }
        if(!usuario.estado){
            return res.status(400).json({
                msg: 'el usuario / contraseñe no son correctos - estado'
            })

        }

        const validpassword = bcryp.compareSync(password, usuario.password)
        if (!validpassword  ){
            return res.status(400).json({
                msg: 'el usuario / contraseñe no son correctos - password'
            })

        }

        //jtoken
        const token = await generarJwt(usuario.id)


    res.json({
        msg: 'auth login',
        usuario,
        token

    })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:"hable con el admind"
        });
    }

}
module.exports={
    login
}