import React from "react";
import Mypage from "./Mypage";
import styled from "styled-components";

const Header = () => {
  return (
    <div style={{ zIndex: 100 }}>
      <StHeaderContainer>
        <Mypage />
        <div style={{ marginLeft: "55rem" }}>
          <a href="/">
            <StLogo src="./logo.png" />
          </a>
        </div>
        <StTiltle>EarthGreen</StTiltle>
      </StHeaderContainer>
    </div>
  );
};

Header.propTypes = {};

export default Header;

const StHeaderContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 5vh;
  display: flex;
  position: fixed;
  text-align: center;
  align-items: center;
  padding: 1em 1.5em;
  box-shadow: 0em 0em 1em lightgray;
  /* position: fixed;
  top: 0;
  left: 0; */
`;

const StLogo = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 0.8em;
`;

const StTiltle = styled.p`
  font-size: 1.4em;
  padding-top: 0.1em;
  color: var(--grid-color);
`;
