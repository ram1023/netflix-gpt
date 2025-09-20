import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./userSlice";
import { moviesReducer } from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesReducer
  }
})

export default appStore;