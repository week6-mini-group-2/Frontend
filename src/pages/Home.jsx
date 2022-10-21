import React from "react";
import styled, { css } from "styled-components";
import "../App.scss";
import "../css/variable.scss";

const Home = () => {
  return (
    <div>
      <Ex>home</Ex>
    </div>
  );
};

export default Home;

const Ex = styled.div`
  width: 200px;
  height: 650px;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.61);
`;
