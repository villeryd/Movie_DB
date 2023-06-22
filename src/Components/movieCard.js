import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
export function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ height: 450 }}>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component='img'
        alt={movie.title}
        height='300'
        width='300'
        image={
          movie.backdrop_path !== null
            ? `${process.env.REACT_APP_TMDB_IMG}/${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
      />
      <CardContent sx={{ height: 100, maxHeight: 100 }}>
        <Box
          component='div'
          sx={{
            height: 80,
            maxHeight: 80,
            textOverflow: "ellipsis",
            overflow: "hidden",
            objectFit: "contain",
            padding: 1,
          }}
        >
          <Typography
            className='movie-title'
            variant='h6'
            sx={{ height: "75%", maxHeight: "75%" }}
            onClick={() => navigate(`/${movie.id}`)}
          >
            {movie.original_title}
          </Typography>
        </Box>
        <Box
          component='div'
          sx={{
            height: 20,
            maxHeight: 20,
          }}
        >
          <Typography
            variant='body2'
            color='test.secondary'
            sx={{
              height: 1,
              maxHeight: 1,
              alignContent: "center",
              justifyContent: "center",
              paddingTop: 1,
            }}
          >
            {dayjs(`${movie.release_date}`).format("MMMM D, YYYY")}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
