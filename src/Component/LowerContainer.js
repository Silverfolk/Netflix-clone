import MovieList from "./MovieCards/Movielist"
import {useSelector} from 'react-redux';
const LowerContainer = () => {
   const NowPlayingList = useSelector((state)=> state.movieReducer?.NowPlaying );
   const PopularMovieList=useSelector((state)=> state.movieReducer?.PopularMovie );
   const TopRatedMovieList=useSelector((state)=> state.movieReducer?.TopRatedMovie );
   const UpcomingMovieList=useSelector((state)=> state.movieReducer?.UpcomingMovie );
   return ( 
    NowPlayingList && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={NowPlayingList} />
          <MovieList title={"Top Rated"} movies={TopRatedMovieList} />
          <MovieList title={"Popular"} movies={PopularMovieList} />
          <MovieList
            title={"Upcoming Movies"}
       movies={UpcomingMovieList} 
defaultmovie          />
           <MovieList title={"Trending"} movies={NowPlayingList} />
        </div>
      </div>
    )
  )
}

export default LowerContainer
