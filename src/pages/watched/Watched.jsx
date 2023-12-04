import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/movieCard/MovieCard';


const Watched = () => {
  const watchedlistMovies = useSelector((state) => state.store.watched);
  return (
    <div className='movie-page'>
      <div className="container">
        <div className="header">
          <h1 className='heading'>Watched List</h1>
          <div className="count-pill">
            {watchedlistMovies.length} {watchedlistMovies.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>
        {watchedlistMovies.length > 0 ? (
          <div className="movie-grid">
            {watchedlistMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type='watchedlist' />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>You have not Movies</h2>
        )}
      </div>
    </div>
  )
}

export default Watched