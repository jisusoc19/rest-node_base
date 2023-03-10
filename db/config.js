const mongoose = require('mongoose');

const db = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,   
        });

        console.log('Conectado a la base de datos');



    }catch(error){
        console.log(error);
        throw new Error('error a la hora de iniciar la db');
    }
}


module.exports= {
    db
}
