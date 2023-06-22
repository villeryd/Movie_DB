import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Tab, Tabs } from "@mui/material";
import { SearchBar } from "./searchBar";
import { useState } from "react";

export function NavBar({ setResults }) {
  const [value, setValue] = useState();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Tabs
            textColor='inherit'
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            <Tab label='Movies' />
            <Tab label='TV Shows' />
            <Tab label='People' />
          </Tabs>
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
