import React, { useState, useEffect } from "react";
import VehicleCards from "./VehicleCards";

const Home = (vehicles) => {

  return (
    <>
      <VehicleCards vehicles={vehicles}/>
    </>
  );
};

export default Home;
