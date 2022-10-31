// starter code 
const router = require('express').Router()
const CelebrityModel = require('../models/Celebrity.model.js')
// all your routes here

router.get('/create', (req, res)=> {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res)=> {
    try {
        await CelebrityModel.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase,
        })
        res.redirect('/celebrities')
    } 
    catch(err) {
        res.render('celebrities/new-celebrity')
    }

})

router.get('/', async (req, res )=> {
    try{
        const allCelebrities = await CelebrityModel.find()
        res.render('celebrities/celebrities', {allCelebrities})
    }
    catch(err) {
        console.log('There as been an error in displaying all celebrities.')
    }

})

module.exports = router