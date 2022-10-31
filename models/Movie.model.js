const {Schema, model} = require('mongoose')

const MovieSchema = new Schema({
    title: String, 
    genre: String, 
    plot: String, 
    cast: [{ type: Schema.Types.ObjectId, ref: 'CelebrityModel' }]
})

const MoviesModel = model('movie', MovieSchema)

module.exports = MoviesModel;