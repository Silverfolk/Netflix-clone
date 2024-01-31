import { useEffect } from "react";
import { options } from "../Utils/constant";
import {useDispatch} from "react-redux";
import { setNowPlaying } from "../Store/movieSlice";
const useNowPlaying = () =>{
    const dispatch =useDispatch();

    const getMovies = async () => {
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        const json = await data.json();
       
        dispatch(setNowPlaying(json.results));
   
    }

    useEffect(() => {
       getMovies(); 
    },[]);
}

export default useNowPlaying;