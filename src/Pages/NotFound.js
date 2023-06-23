import { CenterFocusStrong } from "@mui/icons-material";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ height: "75%", width: "75%", padding: 5 }}>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component='img'
          alt='404'
          height='100%'
          image={
            "https://i.kym-cdn.com/photos/images/newsfeed/000/218/258/6508022985_b22200ced0_z.jpg"
          }
        />
        <CardContent sx={{ height: 50, maxHeight: 50 }}>
          <Box
            component='div'
            sx={{
              height: 50,
              maxHeight: 80,
              textOverflow: "ellipsis",
              overflow: "hidden",
              objectFit: "contain",
              padding: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button variant='contained'>Lets Go Home</Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
