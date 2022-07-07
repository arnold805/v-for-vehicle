import React from "react";
import Template from "./template";
import Navbar from "./Navbar";
import NewSearch from "./NewSearch";
import SavedSearch from "./NewSearch";
import FavoritedVehicles from "./FavoritedVehicles";
import ResearchVehicle from "./ResearchVehicle";
import SellVehicle from "./SellVehicle";
import Authentication from "./Authentication";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<NewSearch />}>
          <Route path="/searches/saved" element={<SavedSearch />} />
          <Route path="/vehicles/favorites" element={<FavoritedVehicles />} />
          <Route path="/vehicles/research" element={<ResearchVehicle />} />
          <Route path="/vehicles/sell" element={<SellVehicle />} />
        </Route>
      </Routes>

      {/* <Authentication /> */}
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
