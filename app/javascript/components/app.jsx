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
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CsrfToken from "../csrfToken";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {

    fetch("/authorized_user", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-Token": CsrfToken(),
      },
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(res.json());
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout currentUser={currentUser} />}>
            <Route index element={<NewSearch />} />
            <Route path="searches">
              <Route path="saved" element={<SavedSearches />} />
            </Route>
            <Route path="vehicles">
              <Route path="favorites" element={<FavoritedVehicles />} />
              <Route path="research" element={<ResearchVehicle />} />
              <Route path="sell" element={<SellVehicle />} />
            </Route>
            <Route path="login" element={<Login setCurrentUser={setCurrentUser} />} />
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
