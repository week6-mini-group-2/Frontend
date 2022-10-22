import React, { memo } from "react";
import styled, { css } from "styled-components";

const SIZES = {
  sm: css`
    --button-font-size: 0.5rem;
    --button-padding: 8px 12px;
    --button-readius: 4px;
  `,
  lg: css`
    --button-font-size: 0.875rem;
    --button-padding: 6px 0px;
    --button-readius: 12px;
    --button-width: 20em;
  `,
};

const Btn = ({ size, disabled, onClick, children }) => {
  const sizeStyle = SIZES[size];

  return (
    <StyleBtn sizeStyle={sizeStyle} disabled={disabled} onClick={onClick}>
      {children}
    </StyleBtn>
  );
};

const StyleBtn = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 0;
  border: none;
  font-size: 1em;
  font-weight: 400;
  padding: var(--button-padding, 12px 16px);
  height: 2rem;
  width: 16em;
  border-radius: var(--button-radius, 5px);
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

export default memo(Btn);
