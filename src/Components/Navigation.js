import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./searchBar";
import { useState } from "react";
import { DrawerMenu } from "./Drawer";
import { useNavigate } from "react-router-dom";

export function NavBar({ setResults }) {
  const [value, setValue] = useState("/");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {isMatch ? (
            <DrawerMenu />
          ) : (
            <Tabs
              textColor='inherit'
              value={value}
              onChange={(e, value) => {
                setValue(value);
                navigate(`${value}`);
              }}
            >
              <Tab value='/' label='Home' />
              <Tab value='/movies' label='Movies' />
              <Tab value='/tv' label='TV Shows' />
              <Tab value='/people' label='People' />
            </Tabs>
          )}
          <Box
            sx={{ marginLeft: "auto" }}
            display={{ xs: "none", sm: "block" }}
          >
            <SearchBar setResults={setResults} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
