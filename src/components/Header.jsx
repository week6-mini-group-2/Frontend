import React from "react";

import styled from "styled-components";

const Header = () => {
  return (
    <StHeaderContainer>
      <a href="/">
        <StLogo src="./logo.png" />
      </a>
      <StTiltle>EarthGreen</StTiltle>
    </StHeaderContainer>
  );
};

Header.propTypes = {};

export default Header;

const StHeaderContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 2.5em;
  display: flex;
  align-items: center;
  padding: 1em 1.5em;
  box-shadow: 0em 0em 1em lightgray;
  position: sticky;
`;

const StLogo = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 0.8em;
`;

const StTiltle = styled.p`
  font-size: 1.8em;
  padding-bottom: 0.2em;
  color: var(--grid-color);
`;
