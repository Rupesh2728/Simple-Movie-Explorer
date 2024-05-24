const searchMovies =async (req,res)=>{
  return {
    l:1,
}
}

// Search by name : https://api.themoviedb.org/3/search/movie?api_key=9208bfe80b7d768f6c808470e40010ba&&query={moviename}
// e.g. https://api.themoviedb.org/3/search/movie?api_key=9208bfe80b7d768f6c808470e40010ba&&query=war  // It gives all movie with name "war" in it

module.exports ={
    searchMovies
};