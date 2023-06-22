import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import dayjs from "dayjs";
export function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        // sx={{ height: 200, maxHeight: 200 }}
        component='img'
        alt={movie.title}
        height='150'
        image={
          movie.backdrop_path !== null
            ? `${process.env.REACT_APP_TMDB_IMG}/${movie.backdrop_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
      />
      <CardContent sx={{ height: 100 }}>
        <div>
          <Typography
            sx={{ height: 75, maxHeight: 75 }}
            className='movie-title'
            gutterBottom
            variant='h5'
            component='div'
          >
            {movie.original_title}
          </Typography>
        </div>
        <div>
          <Typography
            variant='body2'
            color='test.secondary'
            sx={{ height: 25, maxHeight: 25 }}
          >
            {dayjs(`${movie.release_date}`).format("MMMM D, YYYY")}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
