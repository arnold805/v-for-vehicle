import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import NewSearch from "./NewSearch";
import SavedSearches from "./SavedSearches";
import FavoritedVehicles from "./FavoritedVehicles";
import ResearchVehicle from "./ResearchVehicle";
import SellVehicle from "./SellVehicle";
import NotFound from "./NotFound";
import Authentication from "./Authentication";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NewSearch />} />
            <Route path="searches">
              <Route path="saved" element={<SavedSearches />} />
            </Route>
            <Route path="vehicles">
              <Route path="favorites" element={<FavoritedVehicles />} />
              <Route path="research" element={<ResearchVehicle />} />
              <Route path="sell" element={<SellVehicle />} />
            </Route>
            <Route path="login" element={<Authentication />} />
            <Route path="signup" element={<SignUp setCurrentUser={setCurrentUser} />} />
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
