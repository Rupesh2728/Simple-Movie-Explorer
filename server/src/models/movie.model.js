const GenreModel = require("./genre.mongo");

const getAllMovies=async (page_num)=>{
  const movie_arr= [];
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.api_key}&&page=${page_num}`);
  const res = await response.json();
  for(const movie of res.results)
    {
       const obj ={
        backdrop_path: movie.backdrop_path,
        genre_ids : movie.genre_ids,
        id: movie.id,
        original_title: movie.original_title,
        overview: movie.overview,
        poster_path:movie.poster_path,
        release_date:movie.release_date,
        title: movie.title,
       }
       movie_arr.push(obj);
    }
  return movie_arr;
}


const getGenre = async (id)=>{
  return await GenreModel.findOne({
    id: String(id),
  },{
     id : 0,
     genre:1,
     __v:0,
     _id:0
  })
}

const SaveMovie = async ()=>{

}

module.exports={
    getAllMovies,
    getGenre,
    SaveMovie,
}