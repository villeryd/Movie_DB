import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Tab, Tabs } from "@mui/material";
import { SearchBar } from "./searchBar";

export function NavBar({ setResults }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Tabs>
            <Tab label='Movies' />
            <Tab label='TV Shows' />
            <Tab label='People' />
          </Tabs>
          <Box sx={{ marginLeft: "auto" }}>
            <SearchBar setResults={setResults} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}