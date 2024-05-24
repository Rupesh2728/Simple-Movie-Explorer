const http = require('http');
const app = require('./app');
const { ConnectMongoDB } = require('./config/mongoService');
const { LoadGenreData, LoadMovieData } = require('./models/movie.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer=async ()=>{
    await ConnectMongoDB();

    await LoadGenreData();

    await LoadMovieData();
    
    server.listen(PORT,()=>{
        console.log("Server started on port "+ PORT);
    });
}

startServer();


