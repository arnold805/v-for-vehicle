import React, { useState, useEffect } from "react";
import { HttpClient } from "../httpClient";
import VehicleCard from "./VehicleCard";

const VehicleCards = () => {
  const [vehicles, setVehicles] = useState([]);
  const [favorite, setFavorite] = React.useState(false);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const httpClient = HttpClient();

  useEffect(() => {
    httpClient.get("/api/vehicles", setVehicles);
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
      <h1 className="searchbar">
        <label htmlFor="search">Search Cars</label> <br/>
        <input
          type="text"
          id="search"
          placeholder="Search a Make or Model..."
          onChange={handleVehicleSearch}
        />
      </h1>
      <div>
        {filteredVehicles.map((vehicle) => {
          return <VehicleCard key={vehicle.id} vehicle={vehicle} />;
        })}
      </div>
    </>
  );
};

export default VehicleCards;
