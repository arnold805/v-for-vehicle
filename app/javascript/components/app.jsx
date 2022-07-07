import React from "react";
import Template from "./template";
import Navbar from "./Navbar";
import NewSearch from "./NewSearch";
import SavedSearch from "./NewSearch";
import FavoritedVehicles from "./FavoritedVehicles";
import ResearchVehicle from "./ResearchVehicle";
import SellVehicle from "./SellVehicle";
import Authentication from "./Authentication";

const App = () => {
  return (
    <>
      <Navbar />
      <NewSearch />
      <SavedSearch />
      <FavoritedVehicles />
      <ResearchVehicle />
      <SellVehicle />
      <Authentication />
      <hr />
      <span
        style={{
          color: "red",
          width: "100%",
          textAlign: "center",
          display: "block",
        }}
      >
        Everything below is template only
      </span>
      <hr />
      <Template />
    </>
  );
};

export default App;
