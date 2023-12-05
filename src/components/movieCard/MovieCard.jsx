import React from "react";

import NoPoster from "../../assets/no-poster.png";
import MovieControls from "../movieControls/MovieControls";

const MovieCard = ({ movie, type }) => {
  const posterUrl = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;

  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img src={posterUrl} alt={`${movie.poster_path}`} />
      ) : (
        <div className="filler-poster">
          <img src={NoPoster} alt="" />
        </div>
      )}
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
