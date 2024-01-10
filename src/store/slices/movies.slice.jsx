import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    setMovies: (state, action) => {
      return action.payload;
    },
  },
});

export const getAllMovies = () => (dispatch) => {
  const array = [];
  dispatch(setIsLoading(true));
  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US?&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM3YmQzOGVjZTI0YzA3ODQwOTdiYmE2NTgzOTYxNCIsInN1YiI6IjY0OGMwZWQ0NTU5ZDIyMDBhZDgxMzk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzkWwpTwVs3JQKuWH_uq-Yb4u6AKQjc1BSg7UFJsCeY",
        },
      }
    )
    .then((res) => {
      array.push(res.data.results);
    });

  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US?&page=2`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM3YmQzOGVjZTI0YzA3ODQwOTdiYmE2NTgzOTYxNCIsInN1YiI6IjY0OGMwZWQ0NTU5ZDIyMDBhZDgxMzk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzkWwpTwVs3JQKuWH_uq-Yb4u6AKQjc1BSg7UFJsCeY",
        },
      }
    )
    .then((res) => {
      array.push(res.data.results);
    })
    .finally(() => dispatch(setIsLoading(false)));

  axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US?&page=3`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM3YmQzOGVjZTI0YzA3ODQwOTdiYmE2NTgzOTYxNCIsInN1YiI6IjY0OGMwZWQ0NTU5ZDIyMDBhZDgxMzk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzkWwpTwVs3JQKuWH_uq-Yb4u6AKQjc1BSg7UFJsCeY",
        },
      }
    )
    .then((res) => {
      array.push(res.data.results);
    });

  setTimeout(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?language=en-US?&page=4`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM3YmQzOGVjZTI0YzA3ODQwOTdiYmE2NTgzOTYxNCIsInN1YiI6IjY0OGMwZWQ0NTU5ZDIyMDBhZDgxMzk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzkWwpTwVs3JQKuWH_uq-Yb4u6AKQjc1BSg7UFJsCeY",
          },
        }
      )
      .then((res) => {
        array.push(res.data.results);
        const allMovies = [];
        for (let i = 0; i < 20; i++) {
          allMovies.push(array[0][i]);
          allMovies.push(array[1][i]);
          allMovies.push(array[2][i]);
          allMovies.push(array[3][i]);
        }
        dispatch(setMovies(allMovies));
      })
      .finally(() => dispatch(setIsLoading(false)));
  }, 500);
};

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
