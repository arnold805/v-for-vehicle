import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CarRentalIcon from "@mui/icons-material/CarRental";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { HttpClient } from "../httpClient";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setCurrentUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const httpClient = HttpClient();
  let navigate = useNavigate();

  function onSignUpSubmit(e) {
    // debugger;
    e.preventDefault();
    setErrors();
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };
    httpClient.post(
      "/users",
      user,
      (user) => {
        setCurrentUser(user);
        navigate(`/`);
      },
      (err) => setErrors(err.errors)
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* change color to black, or blue */}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <CarRentalIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={onSignUpSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            {errors ? (
              <Grid item xs={12}>
                <Alert severity="error">
                  The following errors prevented you from completing sign up!
                  <ul>
                    {errors.map((error) => (
                      <li>{error}</li>
                    ))}
                  </ul>
                </Alert>
              </Grid>
            ) : (
              <></>
            )}
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" to="/login" component={RouterLink}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
