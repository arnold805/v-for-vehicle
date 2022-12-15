import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import CarRentalIcon from "@mui/icons-material/CarRental";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { HttpClient } from "../httpClient";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const httpClient = HttpClient();
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    httpClient.post(
      "/api/login",
      { email, password },
      (user) => {
        setCurrentUser(user);
        navigate(`/`);
      },
      (errJson) => {
        setError(errJson.error);
      }
    );
  }

  const background_images_array = [
    "IMG_1266.JPG",
    "IMG_2353.JPG",
    "IMG_2489.JPG",
    "IMG_2560.JPG",
    "IMG_2628.JPG",
    "IMG_2664.JPG",
    "IMG_3004.JPG",
    "IMG_3058.JPG",
    "IMG_4337.JPG",
    "IMG_5010.JPG",
    "IMG_5068.JPG",
    "IMG_5086.JPG",
    "IMG_5098.JPG",
    "IMG_5281.JPG",
    "IMG_5863.JPG",
    "IMG_5972.JPG",
    "IMG_6202.JPG",
    "IMG_7133.JPG",
    "IMG_7170.JPG",
    "IMG_7325.JPG",
    "IMG_7361.JPG",
    "IMG_7362.JPG",
    "IMG_7366.JPG",
    "IMG_7373.JPG",
    "IMG_7388.JPG",
    "IMG_7401.JPG",
    "IMG_8067.JPG",
    "IMG_8197.JPG",
    "IMG_8325.JPG"
    ]
  
  let pickRandomImage = function () {return background_images_array[Math.floor(Math.random() * background_images_array.length)];}


  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(/background_images/${pickRandomImage()})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
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
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {error ? <Alert severity="warning">{error}</Alert> : <></>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              id="signinsubmit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  variant="body2"
                  to="/forgotpassword"
                  component={RouterLink}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link variant="body2" to="/signup" id="signup" component={RouterLink}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
