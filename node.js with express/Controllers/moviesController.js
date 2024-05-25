// // Creating & using Routes module | Working with Express JS 


// const fs = require("fs")
const Movie = require("./../Models/movieModels")

// const router = express.Router() ;
// moviesRouter is basically middleware

// const movies = JSON.parse(fs.readFileSync('./data/movies.json')) ;


// we are using same logic of checking if id present in json data or not 
// in order to update delete and display. Creating params middleware

// exports.checkId = (req, res, next, value) => {
//     console.log('Movie ID is ' + value ) ;

//     // find function on javascript array
//     // return that movie object which matches id

//     let movie = movies.find((el) => {
//         return el.id === value * 1 ; // numeric typecast
//     }) ;

//     // if no movie movie === undefined
//     if(! movie) {
//         return res.status(404).json({
//             status: "fail",
//             message: 'movie with id ' + value * 1 + ' NOT FOUND'
//         }) ;
//         // return ;
//     }

//     next() ;
// }


exports.validateBody = (req, res, next) => {
    if(!req.body.name || !req.body.releaseYear) {
        return res.status(400).json({
            status: 'fail',
            message: "not a valid movie data"
        }) ;
    }

    next() ; 
    // go for next middleware i.e. createMovie
}



// -------------------------------  JSON FILE CODE BEGIN  -------------------------








// // // ROUTE HANDLER FUNCTION ....
// // find all the movies of database
// exports.getAllmovies = (req, res) => {
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
// exports.getMovie = (req, res) => {
//     // console.log(req.params) ;
//     const id = req.params.id * 1 ; // converting to num type

//     // find function on javascript array
//     // return that movie object which matches id
//     let movie = movies.find((el) => {
//         return el.id === id ;
//     }) ;
//     // if no movie movie === undefined
//     // if(! movie) {
//     //     res.status(404).json({
//     //         status: "fail",
//     //         message: 'movie with id ' + id + ' NOT FOUND'
//     //     }) ;
//     //     return ;
//     // }

//     res.status(200).json({
//         status: "success",
//         data: {
//             movie: movie
//         }
//     }) ;
// }


// exports.createMovie = (req, res) => {
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
// exports.updateMovie = (req, res) => {
//     const id = req.params.id * 1 ;
//     let movieToUpdate = movies.find((el) => {
//         return el.id === id ;
//     }) ;
//     let index = movies.indexOf(movieToUpdate) ; // eg: id=4, index = 3

//     // if(! movieToUpdate) {
//     //     res.status(404).json({
//     //         status: "fail",
//     //         message: 'movie with id ' + id + ' NOT FOUND'
//     //     }) ;
//     //     return ;
//     // }

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
// exports.deleteMovie = (req, res) => {
//     const id = req.params.id * 1 ;
    
//     const movieToDelete = movies.find((el) => {
//         return el.id === id ;
//     })

//     // if(movieToDelete === undefined ) {
//     //     res.status(404).json({
//     //         status: "fail",
//     //         message: 'movie with id ' + id + ' NOT FOUND'
//     //     })
//     //     return ;
//     // }

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

// -------------------------------  JSON FILE CODE END -------------------------



































// -------------------------------  MONGODB FILE CODE END -------------------------



















exports.getAllmovies = (req, res) => {
    
}


exports.getMovie = (req, res) => {
    
}

exports.createMovie = async (req, res) => {
    // const testMovie = new Movie({})
    // testMovie.save()
    
    try {
        const novie = await Movie.create({req.body}) ; 
    } catch(error) {

    }
}

exports.deleteMovie = (req, res) => {
    
}

exports.updateMovie = (req, res) => {
    
}

