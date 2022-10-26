import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Detail from "../pages/Detail";
import Comment from "../pages/Comment";
import AddComment from "../pages/AddComment";
import UserInfo from "../pages/UserInfo";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/addcomment" element={<AddComment />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
