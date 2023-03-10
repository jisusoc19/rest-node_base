const {Schema , model} = require('mongoose')

const roleShema = Schema({
    rol: {
        type: String,
        required: [true, "rol es obligatorio"]
    }


});

module.exports = model('Role', roleShema);