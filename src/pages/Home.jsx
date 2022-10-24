import React from "react";
import styled from "styled-components";
import "../App.scss";
import "../css/variable.scss";
import Category from "../components/Category";
import Header from "../components/Header";
import MasonryGrid from "../components/MasonryGrid";
import Mypage from "../components/Mypage";

const Home = () => {
  return (
    <>
      <Header />
      <StContainer>
        <Category />
      </StContainer>
      <Mypage />
      <GridWrap className="grid">
        <MasonryGrid />
      </GridWrap>
    </>
  );
};

export default Home;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const GridWrap = styled.div`
  .grid {
    background-color: var(--primary-color);
    color: var(--primary-color);
  }
`;
