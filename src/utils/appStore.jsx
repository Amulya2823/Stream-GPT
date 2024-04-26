import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: movieSlice,
    gpt : GptSlice
  },
});

export default appStore;
