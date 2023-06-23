import { Box, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { CastCard } from "../Components/castCard";

export function Movie({}) {
  const movieId = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

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
        <Box>
          <Typography variant='h3'>{movie.tagline}</Typography>
          <Typography variant='body1'>{movie.overview}</Typography>
        </Box>
        <Box>
          {movie.genres.map((genre) => (
            <Typography key={genre.id}>{genre.name}</Typography>
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
