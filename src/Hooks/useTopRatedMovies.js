import { useEffect } from "react";
import { setTopRatedMovie } from "../Store/movieSlice";
import { options } from "../Utils/constant";
import {useDispatch} from 'react-redux';
const useTopRatedMovies = () =>{
 const dispatch =useDispatch();

 const getTopRatedMovies= async () =>{
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
   const json=await data.json();
   dispatch(setTopRatedMovie(json.results));
 }

 useEffect(() =>{
    getTopRatedMovies();
 },[]);
}
export default useTopRatedMovies;;