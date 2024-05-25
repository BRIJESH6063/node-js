const mongoose = require("mongoose")

// // defining mongodb schema
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field'],
        // validation error message along with boolean value
        unique: true
    },
    description: String,
    duration: {
        type: Number,
        required: [true, 'Duaration is required field']
        // validators, we can create our own validators
    },
    ratings: {
        type: Number,
        default: 1.0
    },
}) ;

// creating the model of the schema
// collection name : Movie, model: movie
const Movie = mongoose.model('Movie', movieSchema) ;
// should start with capital Letter


module.exports = Movie ;