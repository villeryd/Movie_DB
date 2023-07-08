import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

import he from "he";
export function CastCard({ cast }) {
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
        <Typography
          variant='h6'
          sx={{ height: 80, maxHeight: 80, width: 75, maxWidth: 75 }}
        >
          {cast.name}
        </Typography>

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
