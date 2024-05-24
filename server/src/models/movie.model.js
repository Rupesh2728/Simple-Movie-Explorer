const GenreModel = require("./genre.mongo");
const MovieModel = require("./movie.mongo");


const getGenre = async (id)=>{
  return await GenreModel.findOne({
    id: String(id),
  })
}


const getAllMoviesfromAPI=async (page_num)=>{
  const movie_arr= [];
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.api_key}&&page=${page_num}`);
  const res = await response.json();
  for(const movie of res.results)
    {
      const genre_arr = [];
      for(id of movie.genre_ids)
      {
        const genre_obj = await getGenre(id)
         genre_arr.push(genre_obj.genre);
      }

       const obj ={
        movie_backdrop_img: movie.backdrop_path,
        genre: genre_arr,
        id: String(movie.id),
        summary: movie.overview,
        movie_poster_img:movie.poster_path,
        release_date:movie.release_date,
        title: movie.title,
       }
       movie_arr.push(obj);
    }

  return movie_arr;
}


const SaveMovie = async (Movie)=>{
  try
  {  
    await MovieModel.updateOne({
      id: String(Movie.id),
     },Movie,{
      upsert : true,
     })
  }

  catch(err)
  {
     console.log(err);
  }
}

const SaveGenre = async(genre)=>{
  try
    {  
      await GenreModel.updateOne({
        id: String(genre.id),
       },genre,{
        upsert : true,
       })
    }

    catch(err)
    {
       console.log(err);
    }
}

const LoadGenreData = async ()=>{
  const Firstgenre = await GenreModel.findOne({
    id: "28"
  });

  if(Firstgenre)
  {
    console.log("Genre Data already loaded!");
  }

  else{
    console.log('Downloading Genre data...');
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.api_key}`);
    const res = await response.json();
    const genre_arr = res.genres;
    for(const genre of genre_arr)
    {
      const obj = {
        id : String(genre.id),
        genre : String(genre.name),
      }

      await SaveGenre(obj);
        
    }
    console.log('Genre data Saved Successfully...');
  }
}

const LoadMovieData =async()=>{
  const FirstMovie = await MovieModel.findOne({
    id: "823464",
    title : "Godzilla x Kong: The New Empire",
  });

  if(FirstMovie)
    {
      console.log("Movie Data already loaded!");
    }
  else
  {
    console.log('Downloading Movie data...');
    const results = [];
    for(let i=0;i<5;i++)
    {
        const movie_arr=await getAllMoviesfromAPI(i+1);
        for(const movie of movie_arr)
        {
           results.push(movie);
        }
    }

    for(movie of results)
    {
      await SaveMovie(movie);
    }
  
    console.log('Movie data Saved Successfully...');
  }  
}

module.exports={
    getAllMoviesfromAPI,
    getGenre,
    SaveMovie,
    SaveGenre,
    LoadGenreData,
    LoadMovieData,
}