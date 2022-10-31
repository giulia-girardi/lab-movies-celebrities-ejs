// starter code 
const router = require('express').Router()
const MoviesModel = require('../models/Movie.model.js')
const CelebrityModel = require('../models/Celebrity.model.js')

// all your routes here

router.get('/create', async (req, res)=> {
    const allCelebrities = await CelebrityModel.find()
    res.render('movies/new-movie', {allCelebrities})
})

router.post('/create', async (req, res)=> {
    try {
        await MoviesModel.create({
            title: req.body.title,
            genre: req.body.genre,
            plot: req.body.plot,
            cast: req.body.cast,
        })

        res.redirect('/movies')
    } 
    catch(err) {
        res.render('movies/new-movie')
    }

})

router.get('/', async (req, res )=> {
    try{
        const allMovies = await MoviesModel.find()
        res.render('movies/movies', {allMovies})
    }
    catch(err) {
        console.log('There as been an error in displaying all movies.')
    }
})

router.get('/:id', async (req,res)=> {
    try {
        const oneMovie = await MoviesModel.findById(req.params.id).populate('cast')
        res.render('movies/movie-details', {oneMovie} )
    }
    catch {
        console.log('There has been an error in retrieving the movie details.')
    }
})


module.exports = router