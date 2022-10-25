// Package import
import axios, { AxiosInstance } from "axios";

/* const token = localStorage.getItem(token); */
axios.defaults.withCredentials = true;

// axios.defaults.withCredentials = true;

/* Axios instacne create */
const api = axios.create({
  baseURL: "http://54.180.29.110",
  headers: {
    /* application/json;charset=UTF-8 */
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  // const token = sessionStorage.getItem("AccessToken");
  // const refreshToken = sessionStorage.getItem("RefreshToken");

  // console.log("여기:", sessionStorage);

  // config.headers.common["Authorization"] = token;
  // config.headers.common["reAuthorization"] = refreshToken;

  return config;
});

export default api;
