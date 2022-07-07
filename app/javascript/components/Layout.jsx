import React from "react";
import Navbar from "./Navbar";
import Template from "./template";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* Adds template for our benefit. Remove later */}

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
    </div>
  );
};

export default Layout;
