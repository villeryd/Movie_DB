import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieCard } from "../Components/movieCard";

import axios from "axios";

export function Home() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TMDB_URL}/trending/movie/day`, {
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
        <Typography variant='h2'>Trending Movies Today</Typography> <br />
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
    )
  );
}
