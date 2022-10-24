import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* InitialState */
const initialState = {
  users: [{}],
  isLoading: false,
};

/* 로그인 정보 불러오기 */

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const res = await axios.get("http://localhost:3002/users");
    console.log(res);
    /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
    return thunkAPI.fulfillWithValue(res.data);
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

/* 로그인 */

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (payload, thunkAPI) => {
    console.log("payload:", payload);
    const res = await axios
      .post("http://localhost:3002/users", payload)
      .then((res) => {
        /* 통신 상태가 잘 이루어짐 (200) */
        if (res.data.status === 200) {
          /* 토큰 값 (pw) 넘겨주기 */

          /* 닉네임 넘겨주기 */

          return res;
        } else {
          return res;
        }
      });
    return thunkAPI.fulfillWithValue(res.data);
  }
);

/* 회원탈퇴 */

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (_, thunkAPI) => {
    try {
      const res = await axios.delete("http://localhost:3002/users");
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
      const res = await axios.patch("http://localhost:3002/users");
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
  "user/userSignup",
  async (payload, thunkAPI) => {
    console.log("여기payload:", payload);
    try {
      const res = await axios.post(
        `http://localhost:3002/users/${payload.id}`,
        payload
      );
      if (res.data.status !== 200) {
        return window.alert("회원가입에 실패 하였습니다.");
      } else {
        return window.alert("회원이 되신 것을 환영합니다.");
      }
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
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
  name: "posts", // module`s name
  initialState, // this module`s initialState

  /* reducer logic */
  reducers: {},

  /* 비동기 관련 */
  /* How to return for pending (네트워크 요청 시작), fulfilled (네트워크 요청 끝), rejected (네트워크 요청 끝 -> 에러 발생) */
  /* addCase는 내장함수 */

  extraReducers: (builder) => {
    /* ----------- userLogin(User 정보 서버와 match) ---------------- */
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      console.log("pending", state.isLoading);
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      console.log("fulfilled :", state);
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });

    /* ----------- userSignup(입력 정보를 새로 데이터베이스에 넘기는) ---------------- */
    builder.addCase(userSignup.pending, (state) => {
      state.isLoading = true;
      console.log("pending", state.isLoading);
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.isLoading = false;
      console.log("fulfilled : ", state);
    });
    builder.addCase(userSignup.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });
  },
});

//export

export default postStore.reducer;
