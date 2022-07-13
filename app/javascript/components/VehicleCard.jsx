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

function VehicleCard({ vehicle }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
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
    img_url,
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
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="vehicle image"
          height="140"
          image={img_url}
        />
        <CardContent>
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
            {make} {model} ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body_style} / {transmission}
            <p>
              {engine_displacement} {cylinder_count} cyl {engine_type}{" "}
              {drive_type}
            </p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to favorites</Button>
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
            <Typography paragraph></Typography>
            <Typography paragraph>
              <p>
                {power} HP {torque} ft-lb
              </p>
              <p>{exterior_color} Uaint</p>
              <p>{interior_color} Upholstery</p>
            </Typography>
            <Typography paragraph></Typography>
            <Typography paragraph></Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default VehicleCard;
