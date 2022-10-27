import { useState } from "react";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaBars } from "react-icons/fa";
import { AiOutlineCrown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/modules/user";

const Mypage = () => {
  const token = localStorage.getItem("accessToken");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const loginHandler = () => {
    nav("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    nav("/login");
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const getList = () => (
    <div>
      <List>
        <ListItem
          disablePadding
          style={{
            marginTop: "15px",
            marginLeft: "20px",
            marginBottom: "15px",
          }}
        >
          My page
        </ListItem>
        <ListItem>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
            style={{ width: "260px", marginBottom: "15px" }}
          />
        </ListItem>
        <ListItem
          style={{
            marginLeft: "20px",
            marginBottom: "15px",
          }}
        >
          로그인 해주세요.
        </ListItem>
        <ListItem disablePadding></ListItem>
      </List>
      <Divider />
      <List>
        {["Reward"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AiOutlineCrown
                  size="25"
                  style={{
                    marginLeft: "10px",
                    color: "#ffcc00",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {!token ? (
        <StRedirectBtn onClick={loginHandler}>LOGIN</StRedirectBtn>
      ) : (
        <StRedirectBtn onClick={logoutHandler}>LOGOUT</StRedirectBtn>
      )}
    </div>
  );
  return (
    <div>
      <ToggleBadge onClick={() => setOpen(true)}>
        <FaBars size="30" style={{ color: "lightgray" }} />
      </ToggleBadge>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  );
};

export default Mypage;

const ToggleBadge = styled.button`
  padding: auto;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 2px 4px, rgba(0, 0, 0, 0.11) 0px 2px 4px;
  transition: all 0.6s;
  &:active {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
`;

const StRedirectBtn = styled.button`
  height: 2.5em;
  width: 10em;
  position: absolute;
  bottom: 5%;
  left: 30%;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--radius-small);
  cursor: pointer;
  &:active {
    box-shadow: inset 0rem -0.2rem 0.5rem white;
  &:hover {
    background: var(--grid-color);
  }
`;
