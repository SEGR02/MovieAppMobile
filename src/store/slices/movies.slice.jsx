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
  dispatch(setIsLoading(true));
  axios
    .get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM3YmQzOGVjZTI0YzA3ODQwOTdiYmE2NTgzOTYxNCIsInN1YiI6IjY0OGMwZWQ0NTU5ZDIyMDBhZDgxMzk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzkWwpTwVs3JQKuWH_uq-Yb4u6AKQjc1BSg7UFJsCeY",
      },
    })
    .then((res) => dispatch(setMovies(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

// export const getMovieById = (id) => (dispatch) => {
//   dispatch(setIsLoading(true));
//   axios
//     .get(
//       `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjM3YmQzOGVjZTI0YzA3ODQwOTdiYmE2NTgzOTYxNCIsInN1YiI6IjY0OGMwZWQ0NTU5ZDIyMDBhZDgxMzk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzkWwpTwVs3JQKuWH_uq-Yb4u6AKQjc1BSg7UFJsCeY",
//         },
//       }
//     )
//     .then((res) => dispatch(setProducts(res.data.data.products)))
//     .finally(() => dispatch(setIsLoading(false)));
// };

// export const getProductsThunk = () => (dispatch) => {
//   dispatch(setIsLoading(true));
//   // axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
//   axios
//     .get("https://e-commerce-api.academlo.tech/api/v1/products")
//     .then((res) => dispatch(setProducts(res.data.data.products)))
//     .finally(() => dispatch(setIsLoading(false)));
// };

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
