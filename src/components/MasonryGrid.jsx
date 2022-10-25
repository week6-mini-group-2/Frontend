import * as React from "react";
import "../css/variable.scss";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../redux/modules/post";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const MasonryGrid = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  console.log("post test :", posts);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5%",
      }}
    >
      <Box style={{ width: "90rem", minHeight: "5rem" }}>
        <Masonry columns={6} spacing={3} id="hoverAni">
          {posts?.map((item) => (
            <div key={item.postId}>
              <div className="masonryContents">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: 7,
                    width: "100%",
                    boxShadow: "var(--grid-shadow)",
                  }}
                />
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
