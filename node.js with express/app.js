// // import express(third party) package
// const express = require('express') ;

// let app = express() ;
// // route = http method + url
// app.get('/', (req, res) => {
//     // res.status(200).send("<h4>Hello from express server</h4>") ;
//     // send() --> content type is text/html, json doesnt work

//     res.status(200).json({message: 'Hello world', status: 200}) ;
// })

// // for handling post request
// app.post('/', () => {

// })

// // create server 
// const port = 3000 ;
// app.listen(port, () => {
//     console.log(`Server has started at ${port}`)
// })


// frontend stack -- (client/browser [html|css|js])
// frameworks -- react.js, angular
// backend stack  -- (web server [ http server | app | website files ] ) 
// (database connection to app through server) [ node.js + mongodb ]


// // What is WEB API | Working with Express JS
// A Web API is an application programming interface for the Web. A Browser API can extend the functionality of a web browser.

// // Understanding REST Architecture | Working with Express JS
// REST -- REpresentational State transfer (tool for web api)
// -- is an architectural style for providing standards between computer systems on  the web,
//    making it easy for systems to communicate with each other

// -----------------------------------------------------------




const express = require("express")
const fs = require("fs")
const moviesRouter = require('./Routes/moviesRoute.js')
// const morgan = require("morgan")

let app = express() ;


const logger = function(req, res, next) {
    console.log('Custom middleware called!') ;
    // it stuck without calling next()
    next() ;
}







// middleware function bw req and res , --> add body in req 
app.use(express.json())
// morgan -> not a middleware but return middleware
// app.use(morgan)

// middleware to use static file
app.use(express.static('./public')) ;

// custom middleware
// since declared on top of all request it will apply on all request
// location of middleware matters for requests declared below it.
app.use(logger) ;
app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString() ;
    next() ;
})





// // reading movies json file | convert Json into javascript data
const movies = JSON.parse(fs.readFileSync("./data/movies.json")) ;




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




// // refactored our code 
// app.get('/api/v1/movies', getAllmovies )
// app.post("/api/v1/movies", createMovie)
// app.get('/api/v1/movies/:id/', getMovie )
// app.patch('/api/v1/movies/:id', updateMovie )
// app.delete('/api/v1/movies/:id', deleteMovie )



// app.use(logger) ; // work for all request below 




// // Mounting Routes in Express | Working with Express JS
// 1. Mounting routes in Express.js refers to attaching a router instance to a specific path in the application. This allows you to organize your routes into separate modules, which can make your code more modular and easier to maintain.
// 2. To mount a router instance, you use the app.use() method. The first argument to this method is the path where you want to mount the router, and the second argument is the router instance itself.

// const express = require('express');
// const router = express.Router();
// // Define routes for the /api/users path
// router.get('/', (req, res) => {
//   // Handle GET requests to /api/users
// });
// router.post('/', (req, res) => {
//   // Handle POST requests to /api/users
// });




// // Mount the router to the /api/users path
// app.use('/api/users', router);


// const moviesRouter = express.Router() ;
// // moviesRouter is basically middleware
// moviesRouter.route('/')
//     .get(getAllmovies)
//     .post(createMovie)


// moviesRouter.route('/:id')
//     .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)

app.use('/api/v1/movies', moviesRouter) ;










// // further refactoring our code 
// app.route('/api/v1/movies')
//     .get(getAllmovies)
//     .post(createMovie)

// // app.use(logger) ; // work for all request only below not above

// app.route('/api/v1/movies/:id')
//     .get(getMovie)
//     .patch(updateMovie)
//     .delete(deleteMovie)


// // reading movies json file | convert Json into javascript data
// const movies = JSON.parse(fs.readFileSync("./data/movies.json")) ;






// // Handling GET Request | Working with Express JS
// // GET -- api/movies
// app.get('/api/v1/movies', getAllmovies )

// // Handling POST Request | Working with Express JS
// // POST -- api/movies  ( add movies )

// app.post("/api/v1/movies", createMovie)


// // // API: Handling Route Parameters | Working with Express JS
// // route parameters are named URL segments that are used to capture the alues specified at their position in the URL

// // GET -- api/v1/movies/id
// app.get('/api/v1/movies/:id/', getMovie )
// // app.get('/api/v1/movies/:id/:name/:x?', (req, res) => {
// //     console.log(req.params) ;

// //     res.send("Test Movie") ;
// // })



// // // --------------------------------------------
// // // Handling PATCH Request | Working with Express JS
// // update movie data, PUT & PATCH
// // PUT --> send all data updated + non updated data of JSON
// // PATCH --> send only actually updated data of JSON

// app.patch('/api/v1/movies/:id', updateMovie )


// // // --------------------------------------------
// // // API: Handling DELETE Request | Working with Express JS

// app.delete('/api/v1/movies/:id', deleteMovie )









// const port = 3000 ;

// app.listen(port, () => {
//     console.log(`server is running at port ${port}`)
// })
// // use server.js to make your server run and listen at port

module.exports = app ;




