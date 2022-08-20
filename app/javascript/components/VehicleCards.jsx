import React, { useState, useEffect } from "react";
import { HttpClient } from "../httpClient";
import VehicleCard from "./VehicleCard";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const VehicleCards = ({ showFavorites }) => {
  const [vehicles, setVehicles] = useState([]);
  const [favorite, setFavorite] = React.useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [spacing, setSpacing] = React.useState(2)
  const httpClient = HttpClient();

  useEffect(() => {
    url = "/api/vehicles";
    if (showFavorites) {
      url = url + "?favorites=true";
    }
    httpClient.get(url, setVehicles);
  }, []);

  function handleVehicleSearch(e) {
    const filteredVeh = vehicles.filter((vehicle) => {
      return (
        vehicle.model.toLowerCase().includes(e.target.value.toLowerCase()) ||
        vehicle.make.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredVehicles(filteredVeh);
  }
  useEffect(() => {
    setFilteredVehicles(vehicles);
  }, [vehicles]);

  return (
    <>
    <br></br>
    <Grid container justifyContent="center">
      <TextField
        onChange={handleVehicleSearch}
        autoComplete="given-name"
        name="searchVehicles"
        required
        id="firstName"
        label="Search a Make or Model..."
        autoFocus
      />
      </Grid>
      <br></br>
      <br></br>
      <div>
        <Grid container justifyContent="center" spacing={2}>
        {filteredVehicles.map((vehicle) => {
          return <VehicleCard key={vehicle.id} vehicle={vehicle} />;
        })}
        </Grid>
      </div>
    </>
  );
};

export default VehicleCards;
