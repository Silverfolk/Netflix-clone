import React from 'react';
import { IMG_CDN_URL } from "../../Utils/constant";

const MovieCard = (movie) => {
  const { title, overview, vote_average, release_date, poster_path } = movie.props;

  if (!poster_path) return null;

  return (
    <div className="relative group w-36 md:w-48 pr-4 overflow-hidden transition-transform transform hover:scale-105">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + poster_path}
        className="hover:opacity-80"
      />
    </div> 
  );
};

export default MovieCard;
