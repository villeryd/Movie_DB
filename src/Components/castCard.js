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
import he from "he";
export function CastCard({ cast }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ height: 300, width: 100 }}>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component='img'
        alt={cast.name}
        height='150'
        width='150'
        image={
          cast.profile_path !== null
            ? `${process.env.REACT_APP_TMDB_IMG}/${cast.profile_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
      />
      <CardContent
        sx={{
          height: 80,
          maxHeight: 80,
          textOverflow: "ellipsis",
          overflow: "hidden",
          objectFit: "contain",
          padding: 1,
        }}
      >
        {/* <Box
          component='div'
          sx={{
            height: 80,
            maxHeight: 80,
            textOverflow: "ellipsis",
            overflow: "hidden",
            objectFit: "contain",
            padding: 0.5,
          }}
        > */}
        <Typography
          className='movie-title'
          variant='h6'
          sx={{ height: 80, maxHeight: 80, width: 75, maxWidth: 75 }}
          onClick={() => navigate(`/${cast.id}`)}
        >
          {cast.name}
        </Typography>
        {/* </Box> */}
        <Box
          component='div'
          sx={{
            height: 20,
            maxHeight: 20,
          }}
        >
          <Typography
            variant='body2'
            sx={{
              height: 1,
              maxHeight: 1,
              alignContent: "center",
              justifyContent: "center",
              paddingTop: 1,
            }}
          >
            {he.decode(cast.character)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
