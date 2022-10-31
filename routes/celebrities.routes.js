// starter code 
const router = require('express').Router()
const CelebrityModel = require('../models/Celebrity.model.js')
// all your routes here

router.get('/create', (req, res)=> {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res)=> {
    try {
        const celebrity1 = await CelebrityModel.create({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase,
        })
        res.redirect('celebrities', {celebrity1})
    } 
    catch(err) {
        res.render('celebrities/new-celebrity')
    }

})

module.exports = router