// Package import
import axios from "axios";

/* Axios instacne create */
const accessApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    accesstoken: localStorage.getItem("accessToken"),
    refreshtoken: localStorage.getItem("refreshToken"),
  },
});

export default accessApi;
