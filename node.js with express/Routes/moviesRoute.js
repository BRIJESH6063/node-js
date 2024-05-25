const express = require("express")
// const fs = require("fs")

const router = express.Router() ;
// moviesRouter is basically middleware


const moviesController = require('./../Controllers/moviesController')


// // Understanding param middleware | Working with Express JS
// router.param('id', moviesController.checkId ) ; 
// only execute for those url endpoints where value for id parameter



















// const router = express.Router() ;
// // moviesRouter is basically middleware

// const movies = JSON.parse(fs.readFileSync('./data/movies.json'))

// // // ROUTE HANDLER FUNCTION ....
// // find all the movies of database
// const getAllmovies = (req, res) => {
//     res.status(200).json({
//         status: "success",
//         requestedAt: req.requestedAt,
//         count: movies.length,
//         // wrapping
//         data: {
//             movies: movies
//         }
//     }) ;
// }

// // find a particular movie 
// const getMovie = (req, res) => {
//     // console.log(req.params) ;
//     const id = req.params.id * 1 ; // converting to num type

//     // find function on javascript array
//     // return that movie object which matches id
//     let movie = movies.find((el) => {
//         return el.id === id ;
//     }) ;
//     // if no movie movie === undefined
//     if(! movie) {
//         res.status(404).json({
//             status: "fail",
//             message: 'movie with id ' + id + ' NOT FOUND'
//         }) ;
//         return ;
//     }

//     res.status(200).json({
//         status: "success",
//         data: {
//             movie: movie
//         }
//     }) ;
// }


// const createMovie = (req, res) => {
//     // console.log(req.body) ;
//     const newId = movies[movies.length-1].id + 1 ;
    
//     const newMovie = Object.assign({id: newId}, req.body) ;
//     movies.push(newMovie) ;
//     fs.writeFile('./data/movies.json', JSON.stringify(movies), ()=> {
//         res.status(201).json({
//             status: "success",
//             data: {
//                 movie: newMovie 
//             }
//         })
//     })
//     // res.send('created') ;
// }

// // update a movie
// const updateMovie = (req, res) => {
//     const id = req.params.id * 1 ;
//     let movieToUpdate = movies.find((el) => {
//         return el.id === id ;
//     }) ;
//     let index = movies.indexOf(movieToUpdate) ; // eg: id=4, index = 3

//     if(! movieToUpdate) {
//         res.status(404).json({
//             status: "fail",
//             message: 'movie with id ' + id + ' NOT FOUND'
//         }) ;
//         return ;
//     }

//     const updatedMovieObject = Object.assign(movieToUpdate, req.body) ;
//     movies[index] = updatedMovieObject ;

//     fs.writeFile('./data/movies.json', JSON.stringify(movies), () => {
//         res.status(200).json({
//             status: "success",
//             data: {
//                 movie: updatedMovieObject 
//             }
//         })
//     })

// }

// // delete a movie
// const deleteMovie = (req, res) => {
//     const id = req.params.id * 1 ;
    
//     const movieToDelete = movies.find((el) => {
//         return el.id === id ;
//     })

//     if(movieToDelete === undefined ) {
//         res.status(404).json({
//             status: "fail",
//             message: 'movie with id ' + id + ' NOT FOUND'
//         })
//         return ;
//     }

//     const index = movies.indexOf(movieToDelete) ;
//     movies.splice(index, 1) ;

//     // 204 --> no content [ deleted ]
//     fs.writeFile('./data/movies.json', JSON.stringify(movies), () => {
//         res.status(204).json({
//             status: "success",
//             data: {
//                 movie: null
//             }
//         })
//     })
// }



// router.route('/')
//     .get(getAllmovies)
//     .post(createMovie)


// router.route('/:id')
//     .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)

router.route('/')
    .get(moviesController.getAllmovies)
    // .post(moviesController.createMovie)
    .post(moviesController.validateBody, moviesController.createMovie)
    // first moviesController.validateBody and then moviesController.createMovie

router.route('/:id')
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router ;
// to export one thing