import React from "react";
import { HttpClient } from "../httpClient";
import { Button } from "@mui/material";

const Logout = ({currentUser, setCurrentUser}) => {
  const httpClient = HttpClient();

  const handleClick = () => {
    httpClient.delete("/logout", () => {setCurrentUser(null)}, () => {throw "There was a problem with logging out"});
  };

  return (
    <Button variant="outlined" onClick={handleClick} sx={{ my: 1, mx: 1.5 }}>
      Logout
    </Button>
  );
};

export default Logout;
