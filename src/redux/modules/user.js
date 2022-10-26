import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// axios import with environment
import api from "../../shared/Api";

import jwtDecode from "jwt-decode";

/* InitialState */
const initialState = {
  // users: [{}],
  isLoading: false,
};

// header에 JWT 토큰 포함시키기
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

/* 로그인 정보 불러오기 (mypage) */
export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const res = await api.get("/users");
    /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
    return thunkAPI.fulfillWithValue(res.data);
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

/* 로그인 */
export const postLogin = createAsyncThunk(
  "users/login",
  async (payload, thunkAPI) => {
    console.log("payload:", payload);
    try {
      const res = await api.post("/users/login", payload);
      const token = res.data.token;

      localStorage.setItem("jwtToken", token);
      console.log("res", res);
      setAuthToken(token);
      alert("로그인 성공");
      return thunkAPI.fulfillWithValue(jwtDecode(token));
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const loginDb = createAsyncThunk("post/loginDb",
//   async (db) => { //로그인 아이디와 비밀번호를 포스트요청으로 보낸다.
//   try {
//     const response = await axios.post(
//       `url..........`,
//       db
//     );
//     const accessToken = response.data.token;
//
//     return response.data;

/* 회원탈퇴 */

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (_, thunkAPI) => {
    try {
      const res = await api.delete("/users");
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 회원정보 수정 */

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (_, thunkAPI) => {
    try {
      const res = await api.patch("/users");
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 회원가입 */

export const userSignup = createAsyncThunk(
  "users/signup",
  async (payload, thunkAPI) => {
    console.log("여기payload:", payload);
    try {
      const res = await api.post("/users/signup", payload);
      console.log("res:", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// Reducer
/* 필요한 reducer : 
post : 게시글 작성  get : 게시글 전체 조회, 게시글 조회 put : 게시글 수정 Delete : todo 삭제 
toolkit의 기능으로 객체 불변성 신경 x , payload라는 매개변수는 고정 값*/

const postStore = createSlice({
  name: "users", // module`s name
  initialState, // this module`s initialState

  /* reducer logic */
  reducers: {},

  /* 비동기 관련 */
  /* How to return for pending (네트워크 요청 시작), fulfilled (네트워크 요청 끝), rejected (네트워크 요청 끝 -> 에러 발생) */
  /* addCase는 내장함수 */

  extraReducers: (builder) => {
    /* ----------- userLogin(User 정보 서버와 match) ---------------- */
    builder.addCase(postLogin.pending, (state) => {
      state.isLoading = true;
      console.log("pending", state.isLoading);
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      console.log("fulfilled :", state);
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });
  },
});

//export

export default postStore.reducer;
