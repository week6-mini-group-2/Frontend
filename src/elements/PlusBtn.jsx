import React, { memo } from "react";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-font-size: 1rem;
    --button-padding: 0rem 0.3rem 0.1rem;
    --button-readius: 3em;
  `,
  lg: css`
    --button-font-size: 2rem;
    --button-padding: 0rem 0.5rem 0.2rem;
    --button-readius: 3em;
  `,
};

const plusBtn = ({ size, onClick, children }) => {
  const sizeStyle = SIZES[size];

  return (
    <StyleBtn sizeStyle={sizeStyle} onClick={onClick}>
      {children}
    </StyleBtn>
  );
};

const StyleBtn = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}
  
  margin: 0;
  border: none;
  font-size: var(--button-font-size);
  font-weight: 500;
  padding: var(--button-padding);
  width: var(--button-width);
  height: var(--button-height);
  border-radius: var(--button-readius);
  color: var(--button-color, white);
  background: var(--primary-color);
  cursor: pointer;

  &:active {
    box-shadow: inset 0rem -0.2rem 0.5rem white;
  }
  &:hover,
  &:focus {
    background: var(--grid-color);
    color: white;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

export default memo(plusBtn);
