import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import Logout from "./Logout";

const Navbar = ({currentUser, setCurrentUser}) => {

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            V for Vehicle!
          </Typography>
          {currentUser ? (
            <nav>
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/"
                component={RouterLink}
              >
                Home
              </Link>
              {/* <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/searches/new"
                component={RouterLink}
              >
                New Search
              </Link>
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/searches/saved"
                component={RouterLink}
              >
                Saved Searches
              </Link> */}
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/vehicles/favorites"
                component={RouterLink}
              >
                Favorited Vehicles
              </Link>
              {/* <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/vehicles/research"
                component={RouterLink}
              >
                Research Vehicle
              </Link> */}
              <Link
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to="/vehicles/sell"
                component={RouterLink}
              >
                Sell Vehicle
              </Link>
              <Logout currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </nav>
          ) : (
            <Button
              variant="outlined"
              to="/login"
              component={RouterLink}
              sx={{ my: 1, mx: 1.5 }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
