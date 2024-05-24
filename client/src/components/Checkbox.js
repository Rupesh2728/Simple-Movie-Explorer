import React from 'react'
export const Checkbox = ({setmovie,setgenre,movie,genre}) => {

  const onClickMovieHandler = () =>{
    setmovie(!movie)
  }
  
  const onClickgenreHandler = () =>{
     setgenre(!genre);
  }
  
    return (
    <div className='flex flex-col mt-[3.5rem] ml-[12rem]'>
       <div className='flex'>
        {
            genre &&  <input onClick={onClickMovieHandler} type="checkbox" name="Search by movie name" value="movie" disabled/>
        }

        {
            !genre &&  <input onClick={onClickMovieHandler} type="checkbox" name="Search by movie name" value="movie" />
        }
         <span className='ml-[0.5rem] text-white'>Search by Movie Name</span>
       </div>
      
      <div className='flex mt-2'>
        {
            movie && <input onClick={onClickgenreHandler} type="checkbox" name="Search by Genre" value="genre" disabled/>
        }

        {
            !movie && <input onClick={onClickgenreHandler} type="checkbox" name="Search by Genre" value="genre"/>
        }
        <span className='ml-[0.5rem] text-white'>Search by Genre</span>
      </div>
    </div>
  )
}
