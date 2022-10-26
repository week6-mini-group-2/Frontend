import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

const Comments = () => {
  const [isActive, SetIsActive] = useState(false);

  const activeHandler = () => {
    SetIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <div>
      {isActive == 0 ? (
        <Sidebar onClick={activeHandler} />
      ) : (
        <ActiveSidebar onClick={activeHandler} />
      )}
    </div>
  );
};

export default Comments;

const WidhtAnim = styled.div``;

const Sidebar = styled.div`
  float: left;
  width: 100px;
  height: 100px;
  display: flex;
  background-color: black;
  transition-duration: all 1s;
`;

const ActiveSidebar = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  background-color: black;
  transition: all 0.5s;
`;
