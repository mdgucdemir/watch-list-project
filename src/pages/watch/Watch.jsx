import React from 'react'

import { useSelector } from 'react-redux';
import MovieCard from '../../components/movieCard/MovieCard';


const Watch = () => {
  const watchlistMovies = useSelector((state) => state.store.watch);
  

  return (
    <div className='movie-page'>
      <div className="container">
        <div className="header">
          <h1 className='heading'>Watch List</h1>
          <div className="count-pill">
            {watchlistMovies.length} {watchlistMovies.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>
        {watchlistMovies.length > 0 ? (
          <div className="movie-grid">
            {watchlistMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type='watchlist' />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>You have not Movies</h2>
        )}
      </div>
    </div>
  )
}

export default Watch