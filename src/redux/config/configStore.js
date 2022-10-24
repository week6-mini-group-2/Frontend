import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/post";
import comment from "../modules/comment";
import user from "../modules/user";
import logger from "redux-logger";

const store = configureStore({
  reducer: { post, comment, user },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export default store;
