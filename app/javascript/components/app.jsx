import React from "react";
import Template from "./template";
import Navbar from "./Navbar";
import NewSearch from "./NewSearch";
import SavedSearch from "./NewSearch";
import FavoritedVehicles from "./FavoritedVehicles";
import ResearchVehicle from "./ResearchVehicle";
import SellVehicle from "./SellVehicle";
// import Authentication from "./Authentication";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewSearch />}>
            <Route index element={<NewSearch />} />
            <Route path="searches">
              <Route path="saved" element={<SavedSearch />} />
            </Route>
            <Route path="vehicles">
              <Route path="favorites" element={<FavoritedVehicles />} />
              <Route path="research" element={<ResearchVehicle />} />
              <Route path="sell" element={<SellVehicle />} />
            </Route>
          </Route>
        </Routes>
        {/* <Authentication /> */}
      </BrowserRouter>

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
