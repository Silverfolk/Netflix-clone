import { useEffect } from "react";
import {setUpcomingMovie } from "../Store/movieSlice";
import { options } from "../Utils/constant";
import {useDispatch} from 'react-redux';
const useUpcomingMovies = () =>{
 const dispatch =useDispatch();

 const getUpcomingMovies= async () =>{
   const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
   const json=await data.json();
   dispatch(setUpcomingMovie(json.results));
 }

 useEffect(() =>{
    getUpcomingMovies();
 },[]);
}
export default useUpcomingMovies;