import React from "react";
import styled from "styled-components";
import "../css/variable.scss";
import "../App.scss";

const CommentsList = () => {
  return <ExInput placeholder="input" />;
};

export default CommentsList;

const ExInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #ccc000;
  color: var(--primary-color);
  border-radius: var(--radius-base);
`;
