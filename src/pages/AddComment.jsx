import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Btn from "../elements/Btn";
import useInput from "../hooks/useInput";
import { addComments } from "../redux/modules/comment";

const AddComment = () => {
  const dispatch = useDispatch();
  const [comment, commentChange] = useInput("");
  console.log("comment", comment);

  dispatch(
    addComments({
      id: Date.now(),
      comment,
    })
  );

  return (
    <StContainer>
      <StInnerContainer>
        <StAddComment>댓글을 남겨보세요</StAddComment>
        <StCommentWrap>
          <StCommentBox>
            <StNickName>🌳작성자: aaa</StNickName>
            <StBody
              type="text"
              name="comment"
              value={comment}
              onChange={commentChange}
              commentChange
            />
          </StCommentBox>
          <Btn size="lg">등록하기</Btn>
        </StCommentWrap>
      </StInnerContainer>
    </StContainer>
  );
};

export default AddComment;

const StContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StInnerContainer = styled.div`
  width: 46em;
  height: 16em;
  margin-bottom: 1em;
  padding: 1em 0.6em 1em 0.3em;
  display: flex;
  flex-flow: column;
  box-shadow: 0em 0em 1em gray;
  border-radius: var(--radius-base);
`;

const StAddComment = styled.div`
  font-size: 1.5em;
  margin: 0.5em 1em;
  text-decoration: var(--primary-color) wavy underline;
`;

const StCommentWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StCommentBox = styled.div`
  margin: 1em;
  width: 95%;
  height: 50%;
  display: flex;
  flex-flow: column;
  border-radius: var(--radius-small);
`;

const StNickName = styled.div`
  margin-bottom: 1em;
  font-size: 1em;
`;

const StBody = styled.input`
  height: 12em;
  border-radius: var(--radius-small);
  border: none;
  box-shadow: 0em 0em 0.5em lightgray;
`;
