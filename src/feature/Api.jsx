// Package import
import axios, { AxiosInstance } from "axios";

/* const token = localStorage.getItem(token); */
axios.defaults.withCredentials = true;

/* Axios instacne create */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    /* application/json;charset=UTF-8 */
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

//api.defaults.headers.common["Authorization"] = token;

/* api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("AccessToken");
  const refreshToken = sessionStorage.getItem("RefreshToken");

  config.headers.common["Authorization"] = token;
  config.headers.common["Reauthorization"] = refreshToken;

  return config;
}); */

export default api;
