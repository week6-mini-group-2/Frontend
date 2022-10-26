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

const Mypage = () => {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 350 }}>
      <List>
        <ListItem>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
            style={{ width: "260px" }}
          />
          <ListItemButton></ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>test</ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
        <FaBars />
      </ToggleBadge>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </div>
  );
};

export default Mypage;

const ToggleBadge = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 2px 4px, rgba(0, 0, 0, 0.11) 0px 2px 4px;

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px -4px inset,
      rgba(0, 0, 0, 0.3) 0px 6px 12px -6px inset;
  }
`;
