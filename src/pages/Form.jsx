import React, { useState } from "react";
import "../css/variable.scss";
import "../App.scss";
import Header from "../components/Header";
import styled from "styled-components";
import FormCategory from "../components/FormCategory";
import useInput from "../hooks/useInput";
import Btn from "../elements/Btn";
import { useDispatch } from "react-redux";
import { postData } from "../redux/modules/post";

const CommentsList = () => {
  const dispatch = useDispatch();

  const [title, titleChange, titleReset] = useInput("");
  const [content, contentChange, contentReset] = useInput("");
  console.log(title, content);

  const [img, setImg] = useState("");

  const imageUpload = () => {
    const imageURL = window.prompt("URL을 입력해주세요.");
    setImg(imageURL);
  };
  console.log("prompt:", img);

  const imageRemove = () => {
    setImg("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postData({
        postId: Date.now(),
        title,
        content,
        img,
      })
    );
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
              <img src={img} alt="" />
              <StImageBtnBox>
                <StImageUploadBtn onClick={imageUpload}>
                  ADD IMAGE
                </StImageUploadBtn>
                <StImageRemoveBtn onClick={imageRemove}>
                  REMOVE IAMGE
                </StImageRemoveBtn>
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
            <Btn onClick={submitHandler} size="lg">
              MISSION CLEAR
            </Btn>
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
  padding: 1em 0.6em 1em 0.3em;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  box-shadow: 0em 0em 1em gray;
  border-radius: var(--radius-base);
`;

const StFormLeftDiv = styled.div`
  width: 55%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const StImageContainer = styled.div`
  background: #b1b1b1;
  width: 95%;
  height: 20em;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
  display: flex;
  flex-flow: column;
  position: relative;
`;

const StImageBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.2em;
  position: absolute;
  top: 85%;
  left: 8%;
`;

const StImageUploadBtn = styled.button`
  background: white;
  width: 11em;
  height: 2em;
  margin: 0em 0.5em;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
  border: none;
  cursor: pointer;
  &:active {
    box-shadow: inset 0rem -0.2rem 0.5rem white;
  }
  &:hover {
    background: var(--grid-color);
    color: white;
  }
`;

const StImageRemoveBtn = styled.button`
  background: white;
  width: 11em;
  height: 2em;
  margin: 0em 0.5em;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
  border: none;
  &:active {
    box-shadow: inset 0rem -0.2rem 0.5rem white;
  }
  &:hover {
    background: var(--grid-color);
    color: white;
  }
  cursor: pointer;
`;

const StFormRightDiv = styled.div`
  width: 45%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StFormTitleLabel = styled.label`
  margin-top: 1em;
  font-size: 1.2em;
  color: var(--grid-color);
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
  color: var(--grid-color);
`;

const StFormContent = styled.textarea`
  width: 22em;
  height: 12em;
  margin-bottom: 3em;
  border: none;
  border-radius: var(--radius-base);
  box-shadow: 0em 0em 0.5em lightgray;
`;
