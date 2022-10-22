import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* InitialState */
const initialState = {
  posts: [
    {
      category: 0,
      postId: 0,
      nickname: "buddle",
      title: "test",
      comment: "test",
      img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    },
  ],
  isLoading: false,
};

export const getData = createAsyncThunk(
  "post/getData",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:3002/posts");
      //const todoData = res.data;
      console.log(res);
      /* thunkAPI로 payload가 undefined가 뜰 수 있기 때문에 안전하게 직접 경로로 보내주자 */
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

/* 게시글 id 값을 부여 후 todo 추가 get -> post  */

export const postData = createAsyncThunk(
  "post/postData",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:3002/posts", payload);
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

export const updateData = createAsyncThunk(
  "posts/updateData",
  async (payload, thunkAPI) => {
    console.log("여기payload:", payload);
    try {
      const res = await axios.patch(
        `http://localhost:3002/posts/${payload.id}`,
        payload
      );
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

export const deleteData = createAsyncThunk(
  "posts/deleteData",
  async (postId, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3002/posts/${postId}`);
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
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
      console.log("pending", state.isLoading);
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
      console.log("fulfilled :", state);
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
    builder.addCase(updateData.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(updateData.fulfilled, (state, action) => {
      state.isLoading = false;
      const idx = state.posts.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.posts[idx] = action.payload;
      console.log("fulfilled : ", state);
    });
    builder.addCase(updateData.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });

    /* ----------- deleteData(Todo 삭제) ---------------- */
    builder.addCase(deleteData.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.isLoading = false;
      const idx = state.posts.findIndex((todo) => todo.id === action.payload);
      state.posts.splice([idx], 1);
      console.log("fulfilled :", state);
    });
    builder.addCase(deleteData.rejected, (state) => {
      state.isLoading = false;
      console.log("error");
    });
  },
});

//export

export default postStore.reducer;

/* const onChange = (e) => {
  const REGID = /^(?=.*[a-z0-9])[a-z0-9]{3,10}$/;
  const REGPW =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/;
  const { name, value } = e.target;
  setForm((form) => ({ ...form, [name]: value }));
  if (form.id === "" || !REGID.test(id)) {
    setAlertBox("아이디는 영문 또는 숫자 4-10자입니다");
  } else if (password === "" || !REGPW.test(password)) {
    setAlertBox("비밀번호는 대소문자,숫자,특수기호 포함 6-12자 입니다");
  } else if (confirmPassword === "" || confirmPassword !== password) {
    setAlertBox("비밀번호가 일치하지 않습니다");
  } else if (userName === "" || userName.length > 7) {
    setAlertBox("이름을 확인해주세요");
  } else {
    setAlertBox("");
    //버튼 활성화 토글
    setJoinToggle(false);
  }
}; */
