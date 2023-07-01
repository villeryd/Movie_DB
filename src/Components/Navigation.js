import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { SearchBar } from "./searchBar";
import { useState } from "react";
import { DrawerMenu } from "./Drawer";
import { useNavigate } from "react-router-dom";

export function NavBar({ setResults, results }) {
  const [value, setValue] = useState("");
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
              <Tab value='/' label='Home' onClick={() => navigate("/")} />
              <Tab
                value='/movies'
                label='Movies'
                onClick={() => navigate("/movies")}
              />
              <Tab
                value='/tv'
                label='TV Shows'
                onClick={() => navigate("/tv")}
              />

              {/* feature to be implemented next */}
              {/* <Tab value='/people' label='People' />
              <Tab
                value=''
                sx={{ display: { xs: "none", sm: "none", md: "none" } }}
              /> */}
            </Tabs>
          )}
          <Box sx={{ marginLeft: "auto" }}>
            <SearchBar
              setResults={setResults}
              results={results}
              setValue={setValue}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
