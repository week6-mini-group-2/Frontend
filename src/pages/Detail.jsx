import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import "../css/variable.scss";
import PlusBtn from "../elements/PlusBtn";
import Btn from "../elements/Btn";
// import { useSelector } from "react-redux";

const Detail = () => {
  // const posts = useSelector((state) => state.posts.posts);

  // const imgUrl = posts.find((post) => post.id === posts.postId);

  return (
    <>
      <Header />
      <StFormContainer>
        <StBtnBox>
          <Btn size="lg">EDIT</Btn>
          <Btn size="lg">REMOVE</Btn>
        </StBtnBox>
        <StFormInnerContainer>
          <StFormLeftDiv>
            <StFormLeftTextWrap>
              <StFormTitle>TITLE</StFormTitle>
              <StFormName>NICKNAME</StFormName>
            </StFormLeftTextWrap>
            <StImageContainer></StImageContainer>
          </StFormLeftDiv>
          <StFormRightDiv>
            <StFormContentWrap>
              <StFormContent>CONTENT</StFormContent>
              <div>BODY</div>
            </StFormContentWrap>
            <StFormCommentWrap>
              <StFormComment>COMMENT</StFormComment>
              <StBtnDiv>
                <PlusBtn size="sm">＋</PlusBtn>
              </StBtnDiv>
              <StCommentDivWrap>
                <StCommentInnerWrap>
                  <StCommentDiv>
                    <StCommentName>NICKNAME</StCommentName>
                    <div>BODY</div>
                  </StCommentDiv>
                  <StCommentBtnWrap>
                    <StCommentBtn></StCommentBtn>
                    <StCommentBtn></StCommentBtn>
                  </StCommentBtnWrap>
                </StCommentInnerWrap>
              </StCommentDivWrap>
            </StFormCommentWrap>
          </StFormRightDiv>
        </StFormInnerContainer>
      </StFormContainer>
    </>
  );
};

export default Detail;

const StFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const StBtnBox = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 18%;
  column-gap: 1em;
`;

const StFormInnerContainer = styled.div`
  width: 46em;
  height: 26em;
  margin-bottom: 5em;
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

const StFormCommentWrap = styled.div`
  width: 100%;
  height: 65%;
  background: white;
  width: 90%;
  height: 65%;
  padding: 0.5em;
  border: none;
  border-radius: var(--radius-small);
  box-shadow: 0em 0em 0.5em lightgray;
  position: relative;
`;

const StBtnDiv = styled.div`
  position: absolute;
  top: 1%;
  left: 36%;
`;

const StFormComment = styled.div`
  color: var(--grid-color);
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

const StCommentDivWrap = styled.div`
  background: pink;
  height: 90%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    border-radius: 6px;
    background: #adadad;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 6px;
  }
`;

const StCommentInnerWrap = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  border-radius: var(--radius-small);
  box-shadow: 0.1em 0.1em 0.3em var(--grid-color);
`;

const StCommentDiv = styled.div`
  background: yellow;
  height: 10vh;
  margin: 0.3em 0.5em 0.3em 0.2em;
  padding: 0.5em;
`;

const StCommentBtnWrap = styled.div`
  background: blue;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 0.5em;
`;

const StCommentBtn = styled.button`
  width: 1.5em;
  height: 1.5em;
  margin-left: 0.5em;
`;

const StCommentName = styled.div`
  font-size: 0.6em;
  margin-bottom: 1em;
`;
