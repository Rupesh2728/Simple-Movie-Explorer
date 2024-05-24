const mongoose = require('mongoose');

const genresSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },

    genre:{
        type:String,
        required:true,  
    }
});

const GenreModel = mongoose.model('Genre',genresSchema);

module.exports = GenreModel;