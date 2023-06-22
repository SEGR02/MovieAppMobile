import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading.slice";
import moviesSlice from "./slices/movies.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    movies: moviesSlice,
  },
});
