import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({currentUser, setCurrentUser}) => {
  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <main>
        <Outlet />
      </main>
        <Footer/>
    </div>
  );
};

export default Layout;
