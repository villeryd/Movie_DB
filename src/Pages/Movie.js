import { Box, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { CastCard } from "../Components/castCard";
import { MovieCard } from "../Components/movieCard";

export function Movie({}) {
  const movieId = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_TMDB_URL}/movie/${movieId.id}?append_to_response=credits`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error.response.status);
        error.response.status === 404 ? navigate("*") : setError(true);
      });
  }, [movieId]);
  return (
    movie && (
      <>
        <Box>
          <Typography variant='h1'>{movie.title}</Typography>
          <img
            src={`${process.env.REACT_APP_TMDB_IMG}/${movie.poster_path}`}
            alt={movie.title}
          ></img>
        </Box>
        <br />
        <Box>
          <Typography variant='h3'>{movie.tagline}</Typography>
          <Typography variant='body1'>{movie.overview}</Typography>
        </Box>
        <br />
        <Box>
          <Typography variant='h6'>Genre</Typography>
          {movie.genres.map((genre) => (
            <Typography key={genre.id}>{genre.name}</Typography>
          ))}
        </Box>
        <br />
        <Box>
          <Typography variant='h6'>Cast</Typography>
          <Grid container spacing={3} sx={{ overflowX: "scroll" }}>
            {movie.credits.cast.map((c) => (
              <Grid item>
                <CastCard cast={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          {movie.production_companies && (
            <>
              <Typography>Production Companies</Typography>
              {movie.production_companies.map((company) => (
                <>
                  {company.logo_path && (
                    <img
                      src={`${process.env.REACT_APP_TMDB_IMG}/${company.logo_path}`}
                      alt={company.name}
                    ></img>
                  )}
                </>
              ))}
            </>
          )}
        </Box>
      </>
    )
  );
}

export function TVShow({}) {
  const movieId = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  console.log(movieId);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_TMDB_URL}/tv/${movieId.id}?append_to_response=credits`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error.res.status);
      });
  }, [movieId]);
  return (
    movie && (
      <>
        <Box>
          <Typography variant='h1'>{movie.name}</Typography>
          <img
            src={`${process.env.REACT_APP_TMDB_IMG}/${movie.poster_path}`}
            alt={movie.title}
          ></img>
        </Box>
        <Box>
          <Typography variant='body1'>{movie.overview}</Typography>
        </Box>
        <Box>
          <Typography variant='h5'> Genre</Typography>
          {movie.genres.map((genre) => (
            <Typography variant='body1' key={genre.id}>
              {genre.name}
            </Typography>
          ))}
        </Box>
        <Box>
          <Grid container spacing={3} sx={{ overflowX: "scroll" }}>
            {movie.credits.cast.map((c) => (
              <Grid item>
                <CastCard cast={c} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          {movie.production_companies && (
            <>
              <Typography>Production Companies</Typography>
              {movie.production_companies.map((company) => (
                <>
                  {company.logo_path && (
                    <img
                      src={`${process.env.REACT_APP_TMDB_IMG}/${company.logo_path}`}
                      alt={company.name}
                    ></img>
                  )}
                </>
              ))}
            </>
          )}
        </Box>
      </>
    )
  );
}

export function MoviePopular() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TMDB_URL}/movie/popular`, {
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
        <Typography variant='h2'>Popular Movies</Typography> <br />
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
