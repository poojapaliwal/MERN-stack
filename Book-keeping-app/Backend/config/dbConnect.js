const mongoose = require('mongoose')

const dbConnect = ()=>{
    mongoose.connect(
        'mongodb+srv://Pooja:JWNVGu4LbUXSSpq0@cluster0.p7akq.mongodb.net/test', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex : true,
        useUnifiedTopology: true
    }).then(()=>console.log('dB Connected.')).catch(err=>console.log(err))
}

module.exports = dbConnect