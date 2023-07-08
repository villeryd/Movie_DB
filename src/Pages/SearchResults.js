import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieCard } from "../Components/movieCard";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import he from "he";
import { useParams } from "react-router-dom";

export function SearchResults() {
  const [loading, setLoading] = useState(false);
  const query = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setResults] = useState(null);
  console.log(query.query);
  document.addEventListener("DOMContentLoaded", function (e) {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    let modifier = 200;
    if (currentScroll + modifier > documentHeight) {
      pageNumber < results.total_pages
        ? console.log("next page")
        : console.log("end of page");
    }
  });
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${
          process.env.REACT_APP_TMDB_URL
        }/search/movie?&language=en-US&query=${he.encode(
          query.query
        )}&page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setResults(res.data);
        setLoading(false);
        console.log(res.data);
      });
  }, [query, pageNumber]);

  return (
    <>
      {loading && <CircularProgress />}
      {results && (
        <>
          {console.log(results.results)}
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
      )}
    </>
  );
}
