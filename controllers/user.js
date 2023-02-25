const {response, request} = require('express')

const usuariosget = (req, res=response)=> {
    const {q, nombre, apikey}   = req.query;
    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey
    })
  }
const usuariosput = (req = request, res=response)=> {
    const {id} = req.params;
    res.json({
        msg: 'put api - controlador',
        id
    })
}
const usuariospost = (req, res=response)=> {
    // const body =req.body;
    const {nombre, edad} =req.body;

    res.json({
        msg: 'post api - controlador',
        nombre, 
        edad
    })
  }
const usuariosdelete = (req, res=response)=> {
    res.json({
        msg: 'delete api - controlador'
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