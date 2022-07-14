import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import NewSearch from "./NewSearch";
import SavedSearches from "./SavedSearches";
import FavoritedVehicles from "./FavoritedVehicles";
import ResearchVehicle from "./ResearchVehicle";
import SellVehicle from "./SellVehicle";
import NotFound from "./NotFound";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HttpClient } from "../httpClient";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const httpClient = HttpClient();

  useEffect(() => {
    httpClient.get("/api/authorized_user", setCurrentUser);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="searches">
              <Route path="new" element={<NewSearch />} />
              <Route path="saved" element={<SavedSearches />} />
            </Route>
            <Route path="vehicles">
              <Route path="favorites" element={<FavoritedVehicles />} />
              <Route path="research" element={<ResearchVehicle />} />
              <Route path="sell" element={<SellVehicle />} />
            </Route>
            <Route
              path="login"
              element={<Login setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="signup"
              element={<SignUp setCurrentUser={setCurrentUser} />}
            />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        {/* <Authentication /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
