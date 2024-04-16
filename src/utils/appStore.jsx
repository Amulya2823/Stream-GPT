import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: movieSlice,
  },
});

export default appStore;
