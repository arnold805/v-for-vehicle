import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

const NewSearch = ({vehicle}) => {

  return (
    <>
      <h1>Vehicle Card components</h1>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="vehicle image"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/f/fc/BMW_M3_E36_coupe.jpg?20061121092403"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vehicle
        </Typography>
        <Typography variant="body2" color="text.secondary">
          vehicle description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Add to favorites</Button>
      </CardActions>
    </Card>
      
    </>
  );
};

export default NewSearch;
