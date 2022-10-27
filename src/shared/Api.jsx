// Package import
import axios from "axios";

/* 이거 질문해 보기 */
// axios.defaults.withCredentials = true;

/* Axios instacne create */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    /* BE 에게 무조건 보여달라고 하고 무조건 같게 적어야지 된다.. 무조건 */
    // "Content-Type": "application/x-www-form-urlencoded",
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

// axios.defaults.withCredentials = true;

// api.interceptors.request.use(function (config) {
// config.headers.common["Authorization"] = access_token;
// config.headers.common["Refresh-Token"] = refresh_token;
// return config;
// });

export default api;
