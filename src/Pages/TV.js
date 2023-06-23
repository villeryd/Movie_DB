import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TVCard } from "../Components/movieCard";
import { SearchBar } from "../Components/searchBar";
import axios from "axios";

export function TVPopular() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TMDB_URL}/tv/popular`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setResults(res.data);
      });
  }, []);
  return (
    results && (
      <>
        <Typography variant='h1'> Popular TV</Typography>
        {results.results &&
          (results.results.length > 0 ? (
            <>
              <Grid container spacing={2} direction='row'>
                {results.results.map((r) => (
                  <Grid item xs={12} sm={6} md={3} lg={2}>
                    <TVCard movie={r}></TVCard>
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
    )
  );
}
