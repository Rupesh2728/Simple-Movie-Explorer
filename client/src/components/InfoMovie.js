import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import classes from './movieinfo.module.css';

const InfoMovie = ({show,handleClose,movie,image_url}) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header className='bg-[#221f1f] text-[gold]'>
               <Modal.Title>
               <h3 className='border-none'>Movie Info</h3>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body className='h-[34rem] overflow-y-auto'>
    
            <div className={classes.imgdiv}>
              <img src={`${image_url}${movie.movie_poster_img}`}  alt='Movie Poster'/>
            </div>
    
            <div className='mt-[1.5rem]'>
             <div className='flex flex-col mt-[1.5rem]'>
    
                  <div className='flex justify-center'>
                  <div className='flex flex-col'>
                  <h4 className='underline text-[1.6rem] font-[600] flex justify-center'>Title</h4>
                    <p className='font-[600] text-[1.2rem]'>{movie.title}</p>
                  </div>
                  </div>
    
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <h4 className='text-[1.3rem] ml-3 font-[600] flex justify-center'>Release Date</h4>
                  <p className='ml-6'>{movie.release_date}</p>
                </div>
    
            
                 <div className='flex flex-col'>
                   <h4 className='text-[1.5rem] mr-3 font-[600] flex justify-center'>Genre</h4>
                   <p className='mr-6'>
                    {
                      movie.genre.map((genre)=>{
                        return `${genre},`;
                      })
                    }
                   </p>
                 </div>
              </div>
              
               <div className='flex flex-col mt-[1.8rem]'>
                <h3 className='underline text-[1.6rem] font-[600] '>About</h3>
                <p>{movie.summary}</p>
             </div>
          </div>
          </div>
            
            </Modal.Body>
            <Modal.Footer>
            <button className=' border-0 bg-[red] text-white rounded-[5px] w-[5.5rem] h-[2.5rem]' onClick={handleClose}>Close</button>
            </Modal.Footer>
          </Modal> 
        </>
      )
}

export default InfoMovie