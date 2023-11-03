const mongoose = require('mongoose');

const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('db Online');
    } catch (error) {
        console.log(error);
        throw new Error('db is not online')
    };
    
}

module.exports ={
    dbConnection
} 