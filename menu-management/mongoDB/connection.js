const mongoose = require('mongoose')

// const MONGOURI = 'mongodb://localhost:27017'
// const MONGODB = 'menu-management'

async function connectToMongo() {
    mongoose.connect(`mongodb://localhost:27017/menu-management`)
        .then(() => {
            console.log('Connected');
        })
        .catch((err) => {
            console.log('Error: ', err);
        })
}

module.exports = connectToMongo