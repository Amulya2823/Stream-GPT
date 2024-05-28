import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: movieSlice,
    gpt : GptSlice,
    config : configSlice
  },
});

export default appStore;
