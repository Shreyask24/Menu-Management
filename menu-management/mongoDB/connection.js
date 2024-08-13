const mongoose = require('mongoose')
require('dotenv').config();

async function connectToMongo() {
    mongoose.connect(process.env.MONGODB_CONNECT_URL)
        .then(() => {
            console.log('Connected');
        })
        .catch((err) => {
            console.log('Error: ', err);
        })
}

module.exports = connectToMongo