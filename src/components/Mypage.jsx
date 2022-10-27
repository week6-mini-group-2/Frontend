import { useState } from "react";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars } from "react-icons/fa";
import { AiOutlineCrown } from "react-icons/ai";

const Mypage = () => {
  const [open, setOpen] = useState(false);

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
          Here is your NickName~!
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
