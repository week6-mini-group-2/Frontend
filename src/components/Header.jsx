import React from "react";
import Mypage from "./Mypage";
import styled from "styled-components";

const Header = () => {
  return (
    <div style={{ position: "fixed", width: "100vw" }}>
      <StHeaderContainer>
        <div style={{ display: "flex" }}>
          <a href="/">
            <StLogo src="https://cdn-icons-png.flaticon.com/512/525/525944.png" />
          </a>
          <StTiltle>EarthGreen</StTiltle>
        </div>
        <div style={{ marginRight: "3em" }}>
          <Mypage />
        </div>
      </StHeaderContainer>
    </div>
  );
};

export default Header;

const StHeaderContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1em 1.5em;
  box-shadow: 0em 0em 1em lightgray;
`;

const StLogo = styled.img`
  font-size: 1.5em;
  width: 2em;
  height: 2em;
  margin-right: 0.8em;
`;

const StTiltle = styled.p`
  font-size: 2em;
  padding-top: 0.3em;
  color: var(--grid-color);
`;
