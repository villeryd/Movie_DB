import { Grid } from "@mui/material";
import { useEffect, useRef, useState, useCallback } from "react";
import { MovieCard } from "../Components/movieCard";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import he from "he";
import { useParams } from "react-router-dom";

export function SearchResults() {
  const [loading, setLoading] = useState(false);
  const query = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [resultsArray, setResultsArray] = useState([]);

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && pageNumber < totalPages) {
          console.log("visible");
          setPageNumber(pageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, pageNumber, totalPages]
  );

  useEffect(() => {
    setLoading(true);
    setError(false);
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
        setResults((results) => [...results, res.data]);
        setPageNumber(res.data.page);
        setTotalPages(res.data.total_pages);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [query, pageNumber]);

  console.log(results);

  return (
    <>
      {loading && <CircularProgress />}
      {results[pageNumber] && (
        <>
          {results[pageNumber].results &&
            (results[pageNumber].results.length > 0 ? (
              <>
                <Grid container spacing={2} direction='row'>
                  {results.map((result) => {
                    return result.results.map((r, index) => {
                      if (result.results.length === index + 1) {
                        return (
                          <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
                            <div ref={lastElement}>
                              <MovieCard key={r} movie={r}></MovieCard>
                            </div>
                          </Grid>
                        );
                      } else {
                        return (
                          <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
                            <MovieCard key={r} movie={r}></MovieCard>
                          </Grid>
                        );
                      }
                    });
                  })}
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
