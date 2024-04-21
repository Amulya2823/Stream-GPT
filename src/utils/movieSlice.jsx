import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo : null,
    popularVideo : null,
    topRated : null,
    upcomingMovies : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo : (state,action) => {
      state.trailerVideo = action.payload;
    },
    addPopularVideo : (state,action) => {
      state.popularVideo = action.payload;
    },
    addTopRated : (state,action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies : (state,action) => {
      state.upcomingMovies = action.payload;
    }
  },
});

export const { addNowPlayingMovies ,addTrailerVideo ,addPopularVideo , addTopRated , addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
 