import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* api import with environment */
import api from "../../feature/Api";

/* api import with environment */
import api from "../../feature/Api";

axios.defaults.withCredentials = true;
/* InitialState */
const initialState = {
  isLoading: false,
};

export const getData = createAsyncThunk(
  "posts/getData",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/posts");
      console.log(res.data.result);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data.result);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 게시글 id 값을 부여 후 todo 추가 get -> post  */

export const postData = createAsyncThunk(
  "posts/postData",
  async (payload, thunkAPI) => {
    console.log("payload:", payload);
    try {
      const res = await api.post("/posts", payload);
      console.log("post res:", res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 해당 id의 todo 를 update 인자에 저장 후 반환 */

export const editData = createAsyncThunk(
  "posts/updateData",
  async (payload, thunkAPI) => {
    console.log("여기payload:", payload);
    try {
      const res = await api.patch(`/posts/${payload.postId}`, payload);
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 해당 id에 todo를 삭제 */

export const removeData = createAsyncThunk(
  "posts/deleteData",
  async (postId, thunkAPI) => {
    try {
      await api.delete(`/posts/${postId}`);
      //const todoData = res.data;
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(postId);
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
  /* How return for pending (네트워크 요청 시작), fulfilled (네트워크 요청 끝), rejected (네트워크 요청 끝 -> 에러 발생) */
  /* addCase는 내장함수 */

  extraReducers: (builder) => {
    /* ----------- getData(전체 게시글 조회) ---------------- */
    builder.addCase(getData.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      console.log("fulfilled :", state.posts);
    });
    builder.addCase(getData.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });

    /* ----------- postData(Todo 추가) ---------------- */
    builder.addCase(postData.pending, (state) => {
      state.isLoading = true;
      console.log("pending", state.isLoading);
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.isLoading = false;
      console.log("fulfilled : ", state);
    });
    builder.addCase(postData.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });

    /* ----------- updateData(Todo 수정) ---------------- */
    builder.addCase(editData.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(editData.fulfilled, (state, action) => {
      state.isLoading = false;
      const idx = state.posts.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.posts[idx] = action.payload;
      console.log("fulfilled : ", state);
    });
    builder.addCase(editData.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });

    /* ----------- deleteData(Todo 삭제) ---------------- */
    builder.addCase(removeData.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(removeData.fulfilled, (state, action) => {
      state.isLoading = false;
      const idx = state.posts.findIndex((todo) => todo.id === action.payload);
      state.posts.splice([idx], 1);
      console.log("fulfilled :", state);
    });
    builder.addCase(removeData.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });
  },
});

//export

export default postStore.reducer;
