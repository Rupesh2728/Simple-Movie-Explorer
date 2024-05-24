const MovieModel = require("../models/movie.mongo");

const HttpgetAllMovies=async (req,res)=>{
    return res.json(await MovieModel.find({},'-__v -_id'));
}

module.exports={
    HttpgetAllMovies,
}
