import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editComments, removeComments } from "../redux/modules/comment";
import styled from "styled-components";

import PlusBtn from "../elements/PlusBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ postId }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const removeCommentHandler = () => {
    dispatch(removeComments({}));
  };

  const editCommentHandler = () => {
    dispatch(editComments({}));
  };

  return (
    <StFormCommentWrap>
      <StFormComment>COMMENT</StFormComment>
      <StBtnDiv>
        <PlusBtn size="sm" onClick={() => nav("/addcomment")}>
          ＋
        </PlusBtn>
      </StBtnDiv>
      <StCommentDivWrap>
        <StCommentInnerWrap>
          {comments?.map((comment) => {
            <StCommentDiv>
              <StCommentName key={comment.commentId}>닉네임</StCommentName>
              <div>{comment.comment}</div>
            </StCommentDiv>;
            <StCommentBtnWrap>
              <StCommentBtn>
                <FontAwesomeIcon icon={faPencil} onClick={editCommentHandler} />
              </StCommentBtn>
              <StCommentBtn>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={removeCommentHandler}
                />
              </StCommentBtn>
            </StCommentBtnWrap>;
          })}
        </StCommentInnerWrap>
      </StCommentDivWrap>
    </StFormCommentWrap>
  );
};

export default Comment;

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
  background: white;
  display: flex;
  justify-content: space-between;
  border-radius: var(--radius-small);
  box-shadow: 0.1em 0.1em 0.3em var(--grid-color);
  margin: 0.5em;
`;

const StCommentDiv = styled.div`
  height: 10vh;
  margin: 0.3em 0.5em 0.3em 0.2em;
  padding: 0.5em;
`;

const StCommentBtnWrap = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 0.5em;
`;

const StCommentBtn = styled.button`
  width: 1.5em;
  height: 1.5em;
  margin-left: 0.5em;
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1em;
  cursor: pointer;
  &:hover {
    color: var(--grid-color);
  }
`;

const StCommentName = styled.div`
  font-size: 0.6em;
  margin-bottom: 1em;
`;
