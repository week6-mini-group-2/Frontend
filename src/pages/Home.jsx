import React from "react";
import styled from "styled-components";
import "../App.scss";
import "../css/variable.scss";
import MasonryGrid from "../components/MasonryGrid";

const Home = () => {
  return (
    <GridWrap>
      <MasonryGrid />
    </GridWrap>
  );
};

export default Home;

const GridWrap = styled.div`
  .grid {
    background-color: var(--primary-color);
    color: var(--primary-color);
  }
`;
