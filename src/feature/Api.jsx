// Package import
import axios from "axios";

/* 이거 질문해 보기 */
// axios.defaults.withCredentials = true;

/* Axios instacne create */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    /* BE 에게 무조건 보여달라고 하고 무조건 같게 적어야지 된다.. 무조건 */
    "content-type": "application/x-www-form-urlencoded",
    accept: "*/*",
  },
});

/* 인터셉터 이유
FE 도 보안을 생각해야됨. 헤더에 실리는건 엑세스 토큰 -> 사용자의 정보가 만료될 때마다 백에 리프레쉬 토큰을 요청해야됨
서버에서 토큰 판별 후 다시 엑세스 토큰으로 바  */

api.interceptors.request.use((config) => {
  // const token = sessionStorage.getItem("AccessToken");
  // const refreshToken = sessionStorage.getItem("RefreshToken");

  // console.log("여기:", sessionStorage);

  // config.headers.common["Authorization"] = token;
  // config.headers.common["reAuthorization"] = refreshToken;

  return config;
});

export default api;
