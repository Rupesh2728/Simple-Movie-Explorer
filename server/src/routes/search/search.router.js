const express = require('express');
const { searchMovies } = require('../../controllers/search.controller');

const searchRouter = express.Router();

searchRouter.post("/",searchMovies);

module.exports = searchRouter;