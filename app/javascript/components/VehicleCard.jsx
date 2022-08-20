import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { HttpClient } from "../httpClient";
import Grid from "@mui/material/Grid";

function VehicleCard({ vehicle }) {
  const httpClient = HttpClient();

  const defaultImg = {
    img_url: "https://m.media-amazon.com/images/I/81tzqIckFYL._AC_SL1500_.jpg",
  };
  const [expanded, setExpanded] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mod = (a, n) => {
    return a - n * Math.floor(a / n);
  };

  const handleRightClick = () => {
    setImageIndex(mod(imageIndex + 1, images.length));
  };

  const handleLeftClick = () => {
    setImageIndex(mod(imageIndex - 1, images.length));
  };

  const handleFavorite = (vehicle_id) => {
    httpClient.post(`/api/vehicles/${vehicle_id}/favorite`, {});
  };

  const {
    id,
    year,
    make,
    model,
    condition,
    price,
    odometer,
    engine_type,
    engine_displacement,
    cylinder_count,
    power,
    torque,
    transmission,
    body_style,
    drive_type,
    interior_color,
    exterior_color,
    images,
  } = vehicle;

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <>
      <h1></h1>
      <Card sx={{ width: 345 }} >
        <CardMedia
          component="img"
          alt="vehicle image"
          height="140"
          image={(images[imageIndex] || defaultImg).img_url}
        />
        <CardContent>
          <ArrowBackIosNewIcon onClick={handleLeftClick} />
          <ArrowForwardIosIcon onClick={handleRightClick} />
          <Typography variant="body2" color="text.secondary">
            {year}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            make={make}
            model={model}
          >
            {make} {model} ${price.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body_style} / {transmission}
            <br>
            </br>
            {engine_displacement} {cylinder_count}-cyl {engine_type}{" "}
              {drive_type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={(e) => {
              handleFavorite(id);
            }}
          >
            Add to favorites
          </Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {power} HP {torque} ft-lb
            </Typography>
            <Typography paragraph>{exterior_color} paint</Typography>
            <Typography paragraph>{interior_color} upholstery</Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default VehicleCard;
