import React, { useState,useEffect } from 'react';
import classes from './Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import Logo from './Logo.png';
import { Checkbox } from './Checkbox';
import {BACKEND_URL,IMAGE_URL} from '../URL';
import InfoMovie from './InfoMovie';



const Home = () => {

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [movie,setmovie]=useState(false);
    const [genre,setgenre]=useState(false);

    const [movieList,setmovieList]=useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const [movieInfo, setmovieInfo] = useState();

    console.log(movieList);

    const getAllmovies=async ()=>{
        const response = await fetch(`${BACKEND_URL}/movie`);
        const res = await response.json();
        return res;
    }

    const getmoviesbyname=async ()=>{
     
    }

    const getmoviesbygenre=async ()=>{

    }

    const extractmovielist=async (movie,genre)=>{
        if(movie===false && genre===false)
            {
                setmovieList(await getAllmovies());
            }

        else if(movie===true && genre===false)
            {
                setmovieList(getmoviesbyname());
            } 
        else if(movie===false && genre===true)
            {
                setmovieList(getmoviesbygenre());       
            }        
    }

    useEffect(()=>{
     extractmovielist(movie,genre);
    },[movie,genre]);


    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);

    };
  
    const handleSearch = () => {
     console.log("Search started");
     setSearchTerm('');
    };
  

  return (
    <div>
      {show1 && <InfoMovie image_url={IMAGE_URL} show={show1} handleClose={handleClose1} movie={movieInfo}/>}

      <div className='flex'>
      <img src={Logo} alt='' className='w-[16rem] h-[13rem]'/>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} 
      handleInputChange={handleInputChange} handleSearch={handleSearch}
      movie={movie} genre={genre}/>

      <Checkbox setmovie={setmovie} setgenre={setgenre} movie={movie} genre={genre}/>

      </div>
      <div className='mt-[1rem]'>
        <div className='flex justify-between'>
          <h3 className={classes.title}>MOVIES</h3>
        </div>


        <Row className='flex'>
         {movieList.length===0 && <p className='flex justify-center'>Oops, No movies!!!</p>}    
            {
                movieList.length!==0 && movieList.map(movie=>{
                  return (
                    <Col lg={2}>
                    <div className={classes.movie_card}>
                      <img src={`${IMAGE_URL}${movie.movie_backdrop_img}`} alt='Movie Poster' />
                      <div className='flex justify-between'>
                        <p className={classes.movie_name}>{movie.title}</p>
                      </div>
                      <div className={classes.card_bottom}>
                        <div className='text-white'>
                          <FontAwesomeIcon icon={faCheckCircle} className='text-[green] text-[1.5rem]' />
                        </div>
      
                        <div>
                          <button type="button" className='rounded-[50%] w-[2rem] border-none bg-[#221f1f]' onClick={()=>{setmovieInfo(movie);handleShow1()}} >
                            <FontAwesomeIcon icon={faInfoCircle} className='text-[indianred] text-[1.5rem]' />
                          </button>
                        </div>
                      </div>
                    </div>
      
                  </Col>
                  )
                })
            } 
        </Row>
      </div>


    </div>
  )
}

export default Home