import * as React from "react";
import "../css/variable.scss";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../redux/modules/post";

const MasonryGrid = () => {
  // const nav = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  console.log("post test :", posts);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20%",
      }}>
      <Box style={{ width: "90rem", minHeight: "60rem" }}>
        <Masonry columns={6} spacing={3} id="hoverAni">
          {posts?.map((item) => (
            <div className="masonryContents">
              <img
                src={`${item.imageUrl}?w=162&auto=format`}
                srcSet={`${item.imageUrl}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: 7,
                  width: "100%",
                  boxShadow: "var(--grid-shadow)",
                }}
              />
              <div className="masonryBehind">
                <div className="masonryLabel">{item.title}</div>
              </div>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};

export default MasonryGrid;

/* const Temp = styled.div`
  width: 200px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.imageUrl});
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  text-align: center;
  color: whitesmoke;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.911);
  box-shadow: var(--grid-shadow);
  border-radius: 7px;
`; */

/*   <div key={item.postId}>
              <Temp imageUrl={item.imageUrl}></Temp> */
