import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initialState
const initialState = {
  isLoading: false,
  error: null,
};

// Thunk
export const getComments = createAsyncThunk(
  "comments/getComments",
  async (_, thunkAPI) => {
    // console.log("aaapayload:", payload);
    try {
      const data = await axios.get(`http://54.180.29.110/posts`);
      console.log("data:", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComments = createAsyncThunk(
  "comments/addComments",
  async (payload, thunkAPI) => {
    console.log("addpayload:", payload);
    try {
      const data = await axios.post("http://54.180.29.110/posts", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeComments = createAsyncThunk(
  "comments/deleteComments",
  async (payload, thunkAPI) => {
    console.log("id, postId:", payload);
    try {
      await axios.delete(`http://54.180.29.110/posts${payload.id}`);
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
      const data = await axios.patch(
        `http://54.180.29.110/posts${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
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
