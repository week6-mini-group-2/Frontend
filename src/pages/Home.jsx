import React from "react";
import styled from "styled-components";
import "../App.scss";
import "../css/variable.scss";
import Category from "../components/Category";
import Header from "../components/Header";
import PlusBtn from "../elements/PlusBtn";
import { useNavigate } from "react-router-dom";
import Mypage from "../components/Mypage";
import MasonryGrid from "../components/MasonryGrid";

const Home = () => {
  const nav = useNavigate();

  const formHandler = () => {
    nav("/form");
  };

  return (
    <>
      <Header />
      <StConatainer>
        <StWrap>
          <Category />
          <Mypage />
          <GridWrap className="grid">
            <MasonryGrid />
          </GridWrap>
          <StBtnBox>
            <PlusBtn size="lg" onClick={formHandler}>
              ＋
            </PlusBtn>
          </StBtnBox>
        </StWrap>
      </StConatainer>
    </>
  );
};

export default Home;

const StConatainer = styled.div`
  height: 100vh;
`;

const StWrap = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const GridWrap = styled.div`
  .grid {
    background-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

const StBtnBox = styled.div`
  width: 0;
  position: sticky;
  top: 90%;
  left: 95%;
`;
