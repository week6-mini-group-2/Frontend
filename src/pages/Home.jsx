import React from "react";
import styled from "styled-components";
import "../App.scss";
import "../css/variable.scss";
import Category from "../components/Category";
import Header from "../components/Header";
import PlusBtn from "../elements/PlusBtn";
import { useNavigate } from "react-router-dom";
//import Mypage from "../components/Mypage";
import MasonryGrid from "../components/MasonryGrid";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const nav = useNavigate();
  const posts = useSelector((state) => state.posts.posts);

  const formHandler = () => {
    nav("/form");
  };

  return (
    <div>
      <Header />
      <StConatainer>
        <Category />
        <StWrap>
          <GridWrap className="grid">
            <MasonryGrid posts={posts} />
          </GridWrap>
          <StBtnBox>
            <PlusBtn size="lg" onClick={formHandler}>
              ＋
            </PlusBtn>
          </StBtnBox>
        </StWrap>
      </StConatainer>
    </div>
  );
};

export default Home;

const StConatainer = styled.div`
  top: 10%;
  left: 15%;
  position: absolute;
  z-index: -2;
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
  right: 3%;
  top: 90%;
  display: flex;
  position: fixed;
`;
