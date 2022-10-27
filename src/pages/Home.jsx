import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.scss";
import "../css/variable.scss";
import Category from "../components/Category";
import Header from "../components/Header";
import PlusBtn from "../elements/PlusBtn";
import { useNavigate } from "react-router-dom";
import MasonryGrid from "../components/MasonryGrid";
import { useSelector, useDispatch } from "react-redux";
import { getData, sortCategory } from "../redux/modules/post";

const Home = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const [categoryId, setCategoryId] = useState(0);
  console.log("categoryId", categoryId);

  const formHandler = () => {
    nav("/form");
  };

  useEffect(() => {
    if (categoryId === 0) {
      dispatch(getData());
    } else {
      dispatch(
        sortCategory({
          categoryId,
        })
      );
    }
  }, [dispatch, categoryId]);

  // useEffect()

  return (
    <div style={{ margin: "0 auto" }}>
      <Header />
      <StConatainer>
        <Category setCategoryId={setCategoryId} />
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
  position: absolute;
  top: 10%;
  left: 15%;
  z-index: -1;
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
