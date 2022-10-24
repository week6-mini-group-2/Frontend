import * as React from "react";
import "../css/variable.scss";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../redux/modules/post";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MasonryGrid = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  console.log("post test :", posts);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box style={{ width: "90rem" }}>
        <Masonry columns={6} spacing={3}>
          {posts?.map((post) => (
            <div
              key={post.postId}
              style={{ borderRadius: 6, boxShadow: "var(--grid-shadow)" }}
            >
              <img
                src={`${post.img}?w=162&auto=format`}
                srcSet={`${post.img}?w=162&auto=format&dpr=2 2x`}
                alt={post.title}
                loading="lazy"
                style={{
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  display: "block",
                  width: "100%",
                }}
              />
              <Label
                style={{
                  height: "50px",
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  backgroundColor: "var(--grid-color)",
                  display: "block",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "var(--white-color)",
                  }}
                >
                  title : {post.title}
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "var(--white-color)",
                  }}
                >
                  title : {post.content}
                </div>
                {/* <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "100",
                    color: "var(--white-color)",
                  }}
                >
                  nickname : {post.nickname}
                </div> */}
              </Label>
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};

export default MasonryGrid;
