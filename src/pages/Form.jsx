import React from "react";
import "../css/variable.scss";
import "../App.scss";
import Header from "../components/Header";
import FormCategory from "../components/FormCategory";
import styled from "styled-components";

const CommentsList = () => {
  return (
    <>
      <Header />
      <StFormContainer>
        <StFormInnerContainer>
          <FormCategory />
          <div>a</div>
          <div>a</div>
          <div>a</div>
        </StFormInnerContainer>
      </StFormContainer>
    </>
  );
};

export default CommentsList;

const StFormContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StFormInnerContainer = styled.div``;
