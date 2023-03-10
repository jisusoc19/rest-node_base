const { Schema, model } = require('mongoose')


const usuarioSchema = Schema({
    nombre : {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password es obligatorio'],
    },
    img: {
        type: String,
        
    },
    rol: {
        type: String,
        required: [true, 'rol es obligatorio'],
        emun: ['ADMIN_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: true
    },
    

});

usuarioSchema.methods.toJSON = function(){
    const {__v , password, ...usuario} = this.toObject();
    return usuario; 
}

module.exports = model('Usuario', usuarioSchema)