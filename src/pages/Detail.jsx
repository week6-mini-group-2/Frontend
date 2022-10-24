import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import "../css/variable.scss";
import Btn from "../elements/Btn";
import { editData, removeData } from "../redux/modules/post";

import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";

const Detail = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log("posts:", posts);

  const removeHandler = () => {
    dispatch(removeData());
  };

  const editHandler = () => {
    dispatch(editData());
  };

  return (
    <>
      <Header />
      <StFormContainer>
        <StFormInnerContainer>
          <StFormLeftDiv>
            <StFormLeftTextWrap>
              <StFormTitle>TITLE</StFormTitle>
              <StFormName>NICKNAME</StFormName>
            </StFormLeftTextWrap>
            <StImageContainer>URL 이미지 출력</StImageContainer>
          </StFormLeftDiv>
          <StFormRightDiv>
            <StFormContentWrap>
              <StFormContent>CONTENT</StFormContent>
              <div>BODY</div>
            </StFormContentWrap>
            <Comment />
          </StFormRightDiv>
        </StFormInnerContainer>
        <StBtnBox>
          <Btn size="lg" onClick={editHandler}>
            EDIT
          </Btn>
          <Btn size="lg" onClick={removeHandler}>
            REMOVE
          </Btn>
        </StBtnBox>
      </StFormContainer>
    </>
  );
};

export default Detail;

const StFormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StBtnBox = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  column-gap: 1em;
`;

const StFormInnerContainer = styled.div`
  width: 46em;
  height: 26em;
  margin-bottom: 1em;
  padding: 1em 0.6em 1em 0.3em;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  box-shadow: 0em 0em 1em gray;
  border-radius: var(--radius-base);
`;

const StFormLeftDiv = styled.div`
  width: 24em;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StFormLeftTextWrap = styled.div`
  background: white;
  width: 21em;
  height: 3em;
  margin-bottom: 1em;
  padding: 0.5em;
  border: none;
  border-radius: var(--radius-small);
  box-shadow: 0em 0em 0.5em lightgray;
`;

const StFormTitle = styled.div`
  color: var(--grid-color);
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

const StFormName = styled.div`
  font-size: 0.6em;
`;

const StImageContainer = styled.div`
  background: #b1b1b1;
  width: 22em;
  height: 100%;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
  display: flex;
  flex-flow: column;
  position: relative;
`;

const StFormRightDiv = styled.div`
  width: 22em;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StFormContentWrap = styled.div`
  background: white;
  width: 90%;
  height: 35%;
  margin-bottom: 1em;
  padding: 0.5em;
  border: none;
  border-radius: var(--radius-small);
  box-shadow: 0em 0em 0.5em lightgray;
`;

const StFormContent = styled.div`
  color: var(--grid-color);
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0.5em;
`;
