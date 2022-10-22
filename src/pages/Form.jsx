import React, { useState } from "react";
import "../css/variable.scss";
import "../App.scss";
import Header from "../components/Header";
import styled from "styled-components";
import FormCategory from "../components/FormCategory";
import useInput from "../hooks/useInput";
import Btn from "../elements/Btn";
import { useDispatch } from "react-redux";

const CommentsList = () => {
  const dispatch = useDispatch();

  const [title, titleChange, titleReset] = useInput("");
  const [content, contentChange, contentReset] = useInput("");
  console.log(title, content);

  const [image, setImage] = useState("");

  const imageUpload = () => {
    const imageURL = window.prompt("URL을 입력해주세요.");
    setImage(imageURL);
  };
  console.log("prompt:", image);

  const imageRemove = () => {
    setImage("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch();
    titleReset("");
    contentReset("");
  };

  return (
    <>
      <Header />
      <StFormContainer>
        <StFormInnerContainer>
          <StFormLeftDiv>
            <FormCategory />
            <StImageContainer>
              <img src={image} alt="" />
              <StImageBtnBox>
                <StImageBtn onClick={imageUpload}></StImageBtn>
                <StImageBtn onClick={imageRemove}></StImageBtn>
              </StImageBtnBox>
            </StImageContainer>
          </StFormLeftDiv>
          <StFormRightDiv>
            <StFormTitleLabel htmlFor="">TITLE</StFormTitleLabel>
            <StFormTitle
              type="text"
              name="title"
              value={title}
              onChange={titleChange}
            />
            <StFormContentLabel>CONTENT</StFormContentLabel>
            <StFormContent
              type="text"
              name="content"
              value={content}
              onChange={contentChange}
            />
            <Btn size="lg">MISSION COMPLETE</Btn>
          </StFormRightDiv>
        </StFormInnerContainer>
      </StFormContainer>
    </>
  );
};

export default CommentsList;

const StFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StFormInnerContainer = styled.div`
  width: 46em;
  height: 26em;
  margin-bottom: 5em;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  box-shadow: 0em 0em 1em gray;
  border-radius: var(--radius-base);
`;

const StFormLeftDiv = styled.div`
  width: 24em;
  padding: 0.8em;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StImageContainer = styled.div`
  background: #b1b1b1;
  width: 22em;
  height: 21em;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
  display: flex;
  flex-flow: column;
`;

const StImageBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1em;
`;

const StImageBtn = styled.button`
  background: white;
  width: 12em;
  height: 2em;
  margin: 0em 0.5em;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
  cursor: pointer;
`;

const StFormRightDiv = styled.div`
  width: 20em;
  padding: 0.8em;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StFormTitleLabel = styled.label`
  margin-top: 1em;
  font-size: 1.2em;
`;

const StFormTitle = styled.input`
  width: 22em;
  height: 3em;
  margin: 1em 0em 2.5em;
  border: none;
  border-radius: var(--radius-small);
  box-shadow: 0em 0em 0.5em lightgray;
`;

const StFormContentLabel = styled.label`
  margin-bottom: 1em;
  font-size: 1.2em;
`;

const StFormContent = styled.textarea`
  width: 22em;
  height: 12em;
  margin-bottom: 2em;
  border: none;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
`;
