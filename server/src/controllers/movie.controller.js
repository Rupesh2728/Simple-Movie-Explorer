const MovieModel = require("../models/movie.mongo");

const HttpgetAllMovies=async (req,res)=>{
    return res.json(await MovieModel.find({},'-__v -_id'));
}

module.exports={
    HttpgetAllMovies,
}




// To get genre ids : https://api.themoviedb.org/3/genre/movie/list?api_key=9208bfe80b7d768f6c808470e40010ba

// Specific Movie details based on ID: https://api.themoviedb.org/3/movie/{id}?api_key=9208bfe80b7d768f6c808470e40010ba
// e.g. https://api.themoviedb.org/3/movie/157336?api_key=9208bfe80b7d768f6c808470e40010ba

// Movie Image : https://image.tmdb.org/t/p/w500/{backdrop_path}
// e.g. : https://image.tmdb.org/t/p/w500/b5IB4VGjR818tTNcCLHQCIFwQmW.jpg

// Get all details of all movies till page 5
// e.g.:  https://api.themoviedb.org/3/discover/movie?api_key=9208bfe80b7d768f6c808470e40010ba&&page=5
