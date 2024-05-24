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

    movie_backdrop:{
        type: String,
        required: true,
    },

    movie_poster:{
        type: String,
        required: true,
    },

    summary:{
        type: String,
        required: true,
    },

    release_date:{
        type: Date,
        required: true,
    },

    genre:{
        type:[String],
        required: true,
    }

})

const MovieModel = mongoose.Model('Movie',MovieSchema);

module.exports = MovieModel;