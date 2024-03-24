const mongoose = require ('mongoose')

const pokemonSchema = new mongoose.Schema({
    height: {
        type: Number
    }, 
    weight: {
        type: Number
    },
    pokemonID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true  
    },
    image: {
        type: String 
    }
})

module.exports = mongoose.model('pokemon', pokemonSchema)