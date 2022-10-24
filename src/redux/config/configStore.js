import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post";
import comment from "../modules/comment";
import signup from "../modules/signup";
import logger from "redux-logger";

const store = configureStore({
  reducer: { post, comment, signup },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export default store;
