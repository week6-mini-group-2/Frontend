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
        <Masonry columns={6} spacing={3}>
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
                <div className="masonryLabel">
                  <div className="labelTitle">{item.title}</div>
                </div>
                <p className="labelContent">{item.content}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};

export default MasonryGrid;
