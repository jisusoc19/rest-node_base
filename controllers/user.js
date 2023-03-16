const {response, request} = require('express')
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosget = async(req, res=response)=> {
    // const {q, nombre="No name", apikey , page=1,limit}   = req.query;
    const {limite=5, desde=0} = req.query;
    // const usuarios = await Usuario.find({estado:true})
    //     .skip(Number(desde))
    //     .limit(Number(limite));
    // const total = await Usuario.countDocuments({estado:true});
    const [total, usuarios] = await Promise.all([

        Usuario.countDocuments({estado:true}),
        Usuario.find({estado:true})
            .skip(Number(desde))
            .limit(Number(limite))

    ])
    res.json({
        total,
        usuarios,
        
    })
  }
const usuariosput = async(req = request, res=response)=> {
    const {id} = req.params;
    const {_id,password, google,correo,...resto} = req.body;
    if (password){ 
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync( password, salt)
      
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto)

    res.json({
        usuario
    })
}
const usuariospost = async(req, res=response)=> {




    // const body =req.body;
    const {nombre, correo, password,rol} =req.body;
    const usuario = new Usuario({nombre, correo, password,rol});
    //verificar correo
  


    //encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync( password, salt)

    //guardar db
    
    await usuario.save();

    res.json({
        usuario
    })
  }
const usuariosdelete = async(req, res=response)=> {
    const {id} = req.params;
    // total eliminar
    // const usuario = await Usuario.findByIdAndDelete(id);

    //Mejorar desactivarlo para tener consistencia

    const usuario = await Usuario.findByIdAndUpdate(id,{estado: false});
    
    res.json({
        msg: 'usuario eliminado',
        usuario
    })
}




const usuariospatch = (req, res=response)=> {
    res.json({
        msg: 'patch api - controlador'
    })
}




  module.exports = {
    usuariosget,
    usuariosput,
    usuariospost,
    usuariosdelete,
    usuariospatch
}