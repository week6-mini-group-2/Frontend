import React from "react";
import styled from "styled-components";

const Category = () => {
  return (
    <StCategoryContainer>
      <StCategory>
        <img src="" />
      </StCategory>
    </StCategoryContainer>
  );
};

Category.propTypes = {};

export default Category;

const StCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StCategory = styled.div`
  border-radius: var(--radius-base);
`;
