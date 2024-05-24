const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true,
    },

    title:{
        type: String,
        required: true,
    },

    movie_backdrop_img:{
        type: String,
        required: true,
    },

    movie_poster_img:{
        type: String,
        required: true,
    },

    summary:{
        type: String,
        required: true,
    },

    release_date:{
        type: String,
        required: true,
    },

    genre:{
        type:[String],
        required: true,
    }

})

const MovieModel = mongoose.model('Movie',MovieSchema);

module.exports = MovieModel;