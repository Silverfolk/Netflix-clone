import { useEffect } from "react";
import { setPopularMovie } from "../Store/movieSlice";
import { options } from "../Utils/constant";
import {useDispatch} from 'react-redux';
const usePopularMovies = () =>{
 const dispatch =useDispatch();

 const getPopularMovies= async () =>{
   const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
   const json=await data.json();
   dispatch(setPopularMovie(json.results));
 }

 useEffect(() =>{
    getPopularMovies();
 },[]);
}
export default usePopularMovies;