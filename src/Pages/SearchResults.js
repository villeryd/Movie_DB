import { Grid } from "@mui/material";
import { useState } from "react";
import { MovieCard } from "../Components/movieCard";
import { SearchBar } from "../Components/searchBar";

export function SearchResults(results) {
  return (
    <>
      {console.log(results)}
      {results.results &&
        (results.results.length > 0 ? (
          <>
            <Grid container spacing={2} direction='row'>
              {results.results.map((r) => (
                <Grid item xs={12} sm={6} md={3} lg={2}>
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
