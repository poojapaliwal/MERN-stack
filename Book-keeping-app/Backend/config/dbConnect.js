const mongoose = require('mongoose')

const dbConnect = ()=>{
    mongoose.connect(
        process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex : true,
        useUnifiedTopology: true
    }).then(()=>console.log('dB Connected.')).catch(err=>console.log(err))
}

module.exports = dbConnect