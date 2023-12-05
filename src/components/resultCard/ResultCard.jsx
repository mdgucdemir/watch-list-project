import React from "react";
import NoPoster from "../../assets/no-poster.png";
import dayjs from "dayjs";

import { useDispatch, useSelector } from "react-redux";
import {
  addWatchList,
  addWatchedList,
  selectAllWatchlistMovies,
  selectAllWatchedlistMovies,
} from "../../store/storeSlice";

const ResultCard = ({ movie }) => {
  const posterUrl = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;

  const wachlistMovies = useSelector(selectAllWatchlistMovies);
  const wachedlistMovies = useSelector(selectAllWatchedlistMovies);

  let isWatchedList = wachedlistMovies.find((item) => item.id === movie.id);
  let isWatchList = wachlistMovies.find((item) => item.id === movie.id)
    ? true
    : !!isWatchedList;

  const dispatch = useDispatch();

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={posterUrl} alt={`${movie.poster_path}`} />
        ) : (
          <div className="filler-poster">
            <img src={NoPoster} alt="" />
          </div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? dayjs(movie.release_date).format("MMM, D, YYYY")
              : "-"}
          </h4>
          <h4 className="release-date">
            TMDB:{" "}
            <b>{movie.vote_average ? movie.vote_average.toFixed(1) : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={isWatchList}
            onClick={() => dispatch(addWatchList(movie))}
          >
            Add Watchlist
          </button>
          <button
            className="btn"
            disabled={isWatchedList}
            onClick={() => dispatch(addWatchedList(movie))}
          >
            Add WatchedList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
