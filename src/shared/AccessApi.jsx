// Package import
import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

/* 이거 질문해 보기 */
// axios.defaults.withCredentials = true;

/* Axios instacne create */
const accessApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    /* BE 에게 무조건 보여달라고 하고 무조건 같게 적어야지 된다.. 무조건 */
    "Content-Type": "application/json",
    Accept: "*/*",
    accessToken: `${accessToken}`,
    refreshToken: `${refreshToken}`,
  },
  // withCredentials: true,
});

// 인터셉터
// axios.interceptors.request
// .use
// (request) => {
//   if (!!localStorage.getItem("accessToken")) {
//     request.headers["Authorization"] = `Bearer ${localStorage.getItem(
//       "accessToken"
//     )}`;
//     request.headers["accept"] = "application/x-www-form-urlencoded";
//   }
//   return request;
// },
// (err) => Promise.reject(err)
// ();

export default accessApi;
