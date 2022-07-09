import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = (setCurrentUser) => {
  return (
    <div>
      <Navbar setCurrentUser={setCurrentUser}/>
      <main>
        <Outlet />
      </main>
        <Footer/>
    </div>
  );
};

export default Layout;
