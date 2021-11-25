const mongoose = require('mongoose');
require('dotenv').config()

var user = process.env.MONGO_USERNAME
var pass = process.env.MONGO_PASSWORD
var url = process.env.MONGO_URL
var db = process.env.MONGO_DB

mongoose.connect(`mongodb+srv://${user}:${pass}@${url}/${db}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDb conectado con exito')
    })
    .catch(err => console.log('MongoError ', err));

module.exports = mongoose;