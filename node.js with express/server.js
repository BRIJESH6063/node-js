const mongoose = require("mongoose")
const app = require('./app')
// application server part not 
// console.log(app.get('env'))
// console.log(process.env)
// no need to require process it is always available

const dotenv = require('dotenv') ;
dotenv.config({path: './config.env'})


mongoose.connect(process.env.CONNECTION_STRING, {
    // useNewUrlParser: true
}).then((connObj) => {
    // console.log(connObj) ;
    console.log('DB connection Successful')
}). catch((err) => {
    console.log("Some error has occured!")
}) ;

// // // defining mongodb schema
// const movieSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, 'Name is required field'],
//         // validation error message along with boolean value
//         unique: true
//     },
//     description: String,
//     duration: {
//         type: Number,
//         required: [true, 'Duaration is required field']
//         // validators, we can create our own validators
//     },
//     ratings: {
//         type: Number,
//         default: 1.0
//     },
// }) ;

// // creating the model of the schema
// // collection name : Movie, model: movie
// const Movie = mongoose.model('Movie', movieSchema) ;
// // should start with capital Letter


// // Creating documents from Model | Using MongoDB with Express

// const testMovie = new Movie({
//     name: "Intersteller theme song",
//     description: "Action packed movie staring bruce willis in this trilling adventure.",
//     duration: 129,
//     ratings: 4.2
// }) ;


// testMovie.save()
// .then((doc) => {
//     console.log(doc)
// })
// .catch((err) => {
//     console.log("Error occured : " + err) ;
// }) ;



























































// // const port = 3000 ;
// const port = process.env.PORT ;
// app.listen(port, () => {
//     console.log(`server is running at port ${port} server page`) ;
// }) ;



