import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk
export const postSignup = createAsyncThunk(
  "signup/postSignUp",
  async (payload, thunkAPI) => {
    console.log("postSignUp페이로드:", payload);
    try {
      const data = await axios.post("http://localhost:3002/signup", payload);
      console.log("data:", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//initialState
const initialState = {
  signup: [
    {
      userId: 0,
      nickname: "",
      password: "",
      confirmPassword: "",
    },
  ],
  isLoading: false,
  error: null,
};

// reducer
export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postSignup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postSignup.fulfilled, (state, action) => {
      console.log("postSignUp:", state, action);
      state.isLoading = false;
      state.signup.push(action.payload);
    });
    builder.addCase(postSignup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default signupSlice.reducer;
