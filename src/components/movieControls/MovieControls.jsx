import React from "react";

import { AiFillEye } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { addMovieWatchToWatched,addMovieWatchedToWatch,deleteWatchList,deleteWatchedList } from '../../store/storeSlice'

const MovieControls = ({ movie, type }) => {
    const dispatch = useDispatch();
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" title="Add to Watched List" onClick={() =>dispatch(addMovieWatchToWatched(movie))}>
            <AiFillEye />
          </button>
          <button className="ctrl-btn" title="Delete Movie" onClick={() => dispatch(deleteWatchList(movie.id))} >
            <AiOutlineCloseCircle />
          </button>
        </>
      )}

      {type === "watchedlist" && (
        <>
            <button className="ctrl-btn" title="Add to Watch List" onClick={() =>dispatch(addMovieWatchedToWatch(movie))}>
            <AiFillEyeInvisible />
          </button>
          <button className="ctrl-btn" title="Delete Movie" onClick={() => dispatch(deleteWatchedList(movie.id))}>
            <AiOutlineCloseCircle />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
