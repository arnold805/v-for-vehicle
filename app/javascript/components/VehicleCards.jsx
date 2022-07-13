import React, { useState, useEffect } from "react";
import { HttpClient } from "../httpClient";
import VehicleCard from "./VehicleCard"

const VehicleCards = () => {

  const [vehicles, setVehicles] = useState([]);
  const httpClient = HttpClient();

  useEffect(() => {
    httpClient.get("/api/vehicles", setVehicles);
  }, []);

  return (
    <div>
      {vehicles.map((vehicle) => {
        return <VehicleCard key={vehicle.id} vehicle={vehicle} />;
      })}
    </div>
  );
}

export default VehicleCards;
