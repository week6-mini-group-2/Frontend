import React from "react";
import styled from "styled-components";
import "../App.scss";

const CommentsList = () => {
  return <ExInput placeholder="input" />;
};

export default CommentsList;

const ExInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: #ccc000;
  color: #000000;
`;
