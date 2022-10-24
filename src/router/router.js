import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Comment from "../pages/Comment";
import AddComment from "../pages/AddComment";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/addcomment" element={<AddComment />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
