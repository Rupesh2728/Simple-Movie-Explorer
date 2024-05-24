const express = require('express');
const { searchMoviesbygenre,searchMoviesbyname } = require('../../controllers/search.controller');

const searchRouter = express.Router();

searchRouter.post("/name",searchMoviesbyname);
searchRouter.post("/genre",searchMoviesbygenre);
module.exports = searchRouter;