import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./searchBar";

export function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItemButton
            onClick={() => {
              navigate("/");
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <ListItem>Home</ListItem>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/movies");
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <ListItem>Movies</ListItem>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/tv");
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <ListItem>TV Shows</ListItem>
            </ListItemIcon>
          </ListItemButton>

          {/* next feature to be added */}
          {/* <ListItemButton
            onClick={() => {
              navigate("/people");
              setOpen(!open);
            }}
          >
            <ListItemIcon>
              <ListItem>People</ListItem>
            </ListItemIcon>
          </ListItemButton> */}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
