const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true
    },
    attack: {
        type: Number,
        required: true
    },
    defence: {
        type: Number,
        required: true
    },
    HP: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('pokemon', pokemonSchema);
