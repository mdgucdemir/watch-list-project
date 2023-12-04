import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const storeSlice = createSlice({
  name: "mainStore",
  initialState: {
    watch: [],
    watched: [],
  },
  reducers: {
    addWatchList: (state, action) => {
      state.watch.push(action.payload);
    },
    addWatchedList: (state, action) => {      
      state.watch = state.watch.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watched.push(action.payload);
    },

    addMovieWatchToWatched: (state, action) => {
      state.watch = state.watch.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watched.push(action.payload);
    },
    addMovieWatchedToWatch: (state, action) => {
      state.watched = state.watched.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watch.push(action.payload);
    },
    deleteWatchList: (state, action) => {
      state.watch = state.watch.filter((movie) => movie.id !== action.payload);
    },
    deleteWatchedList: (state, action) => {
      state.watched = state.watched.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const selectAllWatchlistMovies = (state) => state.store.watch;
export const selectAllWatchedlistMovies = (state) => state.store.watched;

export const {
  addWatchList,
  addWatchedList,
  addMovieWatchToWatched,
  addMovieWatchedToWatch,
  deleteWatchList,
  deleteWatchedList,
} = storeSlice.actions;

export default storeSlice.reducer;
