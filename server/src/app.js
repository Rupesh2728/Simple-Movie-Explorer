const express= require('express');
const app= express();
const fs= require('fs');
const path= require('path');

const cors = require("cors");
const morgan = require('morgan');
require('dotenv').config() 

app.use(express.json());

//Routes
const searchRouter = require('./routes/search/search.router');
const movieRouter = require('./routes/movie/movie.router');

app.use(cors({
    origin:process.env.FRONT_END_URL,
    credentials: true,
}));

const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined',{ stream: logStream }));

app.use('/search',searchRouter);
app.use('/movie',movieRouter);

module.exports = app;

