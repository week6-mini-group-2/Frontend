/* ex */

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import post, { getData } from "../redux/modules/post";
import imagesLoaded from "imagesloaded";

const MasonryGrid = () => {
  const { refItem, refGrid } = useRef();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  console.log("post test :", posts);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  /* grid function */

  const resizeGrid = () => {
    const items = refItem;
    items.forEach((item) => {
      imagesLoaded(item, (instance) => {
        const item = instance.element[0];
        const grid = refGrid;
        const rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );
        const rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        );
        const rowSpan = Math.floor(
          (item.querySelector(".content").offsetHeight + rowGap) /
            (rowHeight + rowGap)
        );
        item.style.gridRowEnd = "span " + rowSpan;
      });
    });
    const gallery = refGrid;
    imagesLoaded(gallery, () => {
      refItem.forEach((item) => (item.style.visibility = "visible"));
    });
  };

  window.addEventListener("load", resizeGrid);
  window.addEventListener("resize", resizeGrid);

  return (
    <div className="content">
      <GridContainer ref={refGrid}>
        {posts.map((item) => (
          <GridItem key={item.postId} ref={refItem}>
            <img src={`${item.img}`} alt="ex" />
            <GridTitle> ex </GridTitle>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

export default MasonryGrid;

const GridContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: {
    top: 5rem;
    bottom: 5rem;
  }
  display: grid;
  position: relative;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 0.5rem;
`;
const GridItem = styled.div`
  border-radius: 7px;
  overflow: hidden;
`;

const GridImage = styled.img`
  width: 100;
  position: absolute;
`;

const GridTitle = styled.div`
  position: absolute;
`;
