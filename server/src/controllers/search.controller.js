const MovieModel = require("../models/movie.mongo");

const searchMoviesbyname =async (req,res)=>{
  const name = req.body.name;
  const regex = new RegExp(name, 'i');
  const movielist = await MovieModel.find({
    title: regex
  },'-__v -_id');
  return res.json(movielist);
}

const searchMoviesbygenre=async (req,res)=>{
  const genre = req.body.genre_name;
  const movielist = await MovieModel.find({
    genre:{
      $elemMatch: {
        $regex: genre,
        $options: 'i' 
      }
  }},'-__v -_id');
  return res.json(movielist);
}


module.exports ={
    searchMoviesbyname,
    searchMoviesbygenre,
};
