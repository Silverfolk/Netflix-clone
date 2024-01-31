import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import useNowPlaying from '../Hooks/useNowPlaying'
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovieslist';
import UpperContainer from './UpperContainer';
import LowerContainer from './LowerContainer';
const Landing = () => {


   useNowPlaying();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
  
  return (
    <div className='bg-gradient-to-b from-black to-transparent w-full'>
        <Navbar />
        <UpperContainer/>
        <LowerContainer/>
    </div>
    
  )
}

export default Landing
