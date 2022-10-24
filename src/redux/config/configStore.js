import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/post";
import comments from "../modules/comment";
import users from "../modules/user";
import logger from "redux-logger";

const store = configureStore({
  reducer: { posts, comments, users },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export default store;
