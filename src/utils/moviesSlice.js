import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    videoTrailer: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      console.log("addNowPlayingMovies called....");
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      console.log("addPopularMovies called....");
      state.popularMovies = action.payload;
    },
    addVideoTrailer: (state, action) => {
      console.log("addVideoTrailer called....");
      state.videoTrailer = action.payload;
    }
  }
});


export const {addNowPlayingMovies, addPopularMovies, addVideoTrailer} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;