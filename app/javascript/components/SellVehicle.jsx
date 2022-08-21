import React, { useState, useEffect } from "react";
import { HttpClient } from "../httpClient";
import VehicleCard from "./VehicleCard";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SellIcon from '@mui/icons-material/Sell';

const SellVehicle = () => {
  const httpClient = HttpClient();

  const [newListing, setNewListing] = useState();
  const [errors, setErrors] = useState();
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    condition: "",
    price: "",
    odometer: "",
    engine_type: "",
    engine_displacement: "",
    cylinder_count: "",
    power: "",
    torque: "",
    transmission: "",
    body_style: "",
    drive_type: "",
    interior_color: "",
    exterior_color: "",
    img_url: "",
    zipcode: "",
    errors: {},
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e) {
    // debugger;
    e.preventDefault(e);
    setErrors();
    httpClient.post("/api/vehicles", formData, setNewListing);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* change color to black, or blue */}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <SellIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sell Vehicle
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {errors ? (
              <Grid item xs={12}>
                <Alert severity="error">
                  The following errors prevented you from listing your vehicle!
                  <ul>
                    {errors.map((error) => (
                      <li>{error}</li>
                    ))}
                  </ul>
                </Alert>
              </Grid>
            ) : (
              <></>
            )}
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                name="year"
                required
                fullWidth
                id="year"
                label="Year"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                id="make"
                label="Make"
                name="make"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                id="model"
                label="Model"
                name="model"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="condition"
                label="Condition"
                id="condition"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="price"
                label="Price"
                id="price"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="odometer"
                label="Odometer"
                id="odometer"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="engine_type"
                label="Engine Type"
                id="engine_type"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="engine_displacement"
                label="Engine Displacement"
                id="engine_displacement"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="cylinder_count"
                label="Cylinder Count"
                id="cylinder_count"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="power"
                label="Power (hp)"
                id="power"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="torque"
                label="torque (ft-lb)"
                id="torque"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="transmission"
                label="Transmission"
                id="transmission"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="body_style"
                label="Body Style"
                id="body_style"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="drive_type"
                label="Drive Type"
                id="drive_type"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="interior_color"
                label="Interior Color"
                id="interior_color"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="exterior_color"
                label="Exterior Color"
                id="exterior_color"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="img_url"
                label="Image Url"
                id="img_url"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                required
                fullWidth
                name="zipcode"
                label="Zipcode"
                id="zipcode"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            id="sellvehicleformsubmit"
            sx={{ mt: 3, mb: 2 }}
          >
            List Vehicle
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SellVehicle;
