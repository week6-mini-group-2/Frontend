import React from "react";
import styled, { css } from "styled-components";
import "../App.scss";
import Category from "../components/Category";
import Header from "../components/Header";

import "../css/variable.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Category />
    </>
  );
};

export default Home;
