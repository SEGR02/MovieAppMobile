import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    setAuth: (state, action) => {
      return action.payload;
    },
  },
});

export const loginUser = (credentials) => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .post(
      `https://ecommerce-academlo-sebas.onrender.com/api/v1/auth/login`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => dispatch(setAuth(res.data)))
    .finally(() => dispatch(setIsLoading(false)))
    .catch((error) =>
      error.response.state == 400
        ? alert("Something wrong")
        : alert(error.response.data.message)
    );
};

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
