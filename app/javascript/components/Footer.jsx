import React from "react";
import Copyright from "./Copyright";
import { Container } from "@mui/material";

const Footer = () => {

  return (
    <Container
      maxWidth="md"
      component="footer"
    >
      <Copyright />
    </Container>
  );
};

export default Footer;
