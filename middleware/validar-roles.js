const { response } = require("express")

const esadminrol = (req, res= response, next) =>{

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'se quiere verificcar el role sin validar el token primero'
        })
        
    }
    const {rol,nombre}= req.usuario

    if(rol !=='ADMIN_ROLE'){
        return res.status(401).json({
            msg: `el ${nombre} no es administrador - no se puede hacer eso`
        })

    }
    next();

}

const tienerol = (...roles) =>{
    return (req, res= response, next)=>{
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'se quiere verificcar el role sin validar el token primero'
            })
            
        }
        if(roles.includes(req.usuario.rol)){
            return res.status(401).json({
                msg:`el servicio requiere uno de estos roles ${roles}`
            })
        }
        next();
    }
}
module.exports={
    esadminrol,
    tienerol
}