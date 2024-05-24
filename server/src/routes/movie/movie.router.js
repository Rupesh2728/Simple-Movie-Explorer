const express = require('express');
const { HttpgetAllMovies } = require('../../controllers/movie.controller');

const movieRouter = express.Router();

movieRouter.get("/",HttpgetAllMovies);

module.exports = movieRouter;