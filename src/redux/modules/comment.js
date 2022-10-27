import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import accessApi from "../../shared/AccessApi";

//initialState
const initialState = {
  comments: [{}],
  isLoading: false,
  error: null,
};

// 해당 post에서 comment 꺼내기
export const getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const res = await accessApi.get(`/posts/${payload}`);
      console.log("res:", res);
      return thunkAPI.fulfillWithValue(res.data.result.comment);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 해당 post에 comment 추가
export const addComments = createAsyncThunk(
  "comments/addComments",
  async (payload, thunkAPI) => {
    try {
      const res = await accessApi.post(`/comment/${payload.postId}`, payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 해당 post에 comment 삭제
export const removeComments = createAsyncThunk(
  "comments/deleteComments",
  async (payload, thunkAPI) => {
    console.log("id, postId:", payload);
    try {
      await accessApi.delete(`/comment/${payload.id}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editComments = createAsyncThunk(
  "comments/editComments",
  async (payload, thunkAPI) => {
    try {
      const res = await accessApi.patch(`/comment/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reducer
export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      console.log("get부분:", state, action);
      state.isLoading = false;
      state.comments = action.payload;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addComments.fulfilled, (state, action) => {
      console.log("add부분:", state, action);
      state.isLoading = false;
      state.comments.push(action.payload);
    });
    builder.addCase(addComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(removeComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeComments.fulfilled, (state, action) => {
      console.log("delete부분:", state, action);
      state.isLoading = false;
      const idx = state.comments.findIndex(
        (comment) => comment.todoId === action.payload.todoId
      );
      state.comments.splice(idx, 1);
    });
    builder.addCase(removeComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(editComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editComments.fulfilled, (state, action) => {
      state.isLoading = false;
      const idx = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments.splice(idx, 1, action.payload);
    });
    builder.addCase(editComments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default commentSlice.reducer;

// id값을 확인해서 인덱스 찾아서 그 부분을 수정하도록
