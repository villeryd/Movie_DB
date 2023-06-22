import { Grid } from "@mui/material";
import { useState } from "react";
import { MovieCard } from "../Components/movieCard";
import { SearchBar } from "../Components/searchBar";

export function Home() {
  const [results, setResults] = useState(null);
  return (
    <>
      Movie Database!!!
      <SearchBar setResults={setResults} />
      <br />
      {results &&
        (results.length > 0 ? (
          <>
            <Grid container spacing={2} direction='row'>
              {results.map((r) => (
                <Grid item xs={6} sm={4} md={3}>
                  <MovieCard movie={r}></MovieCard>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <div>No results found</div>
          </>
        ))}
    </>
  );
}
