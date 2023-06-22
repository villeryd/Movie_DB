import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function Movie({}) {
  const movieId = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  console.log(movieId);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TMDB_URL}/movie/${movieId.id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
        },
      })
      .then((res) => {
        setMovie(res.data);
      });
  }, [movieId]);
  return (
    movie && (
      <Box>
        <Typography>{movie.title}</Typography>
        <img
          src={`${process.env.REACT_APP_TMDB_IMG}/${movie.poster_path}`}
          alt={movie.title}
        ></img>
      </Box>
    )
  );
}
