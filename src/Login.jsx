import { useState } from "react";
import { useForm } from "react-hook-form";
import './App.css'
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    // Check if phone number is 10 digits
    if (data.phoneNumber.length !== 10) {
      setErrorMessage("Phone number must be 10 digits");
      return;
    }

    // Check if email is valid
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      setErrorMessage("Email is not valid");
      return;
    }

    // Check if password is at least 8 characters long
    if (data.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    //Sign Up the user and move to home page
    navigate("/home", { state: { data } });
  };

  return (
    <div className="App ">
    <Container maxWidth="sm" className="flex justify-center py-2">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Sign Up Page
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: "100%",
            mt:2,
          }}
        >
          <FormControl margin="normal" fullWidth>
            <FormLabel htmlFor="UserName">Name:</FormLabel>
            <TextField
              id="UserName"
              type="text"
              autoComplete="false"
              {...register("UserName", { required: true })}
            />
            {errors.Name && (
              <FormHelperText error>This field is required</FormHelperText>
            )}
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
            <TextField
              id="phoneNumber"
              type="tel"
              autoComplete="false"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <FormHelperText error>This field is required</FormHelperText>
            )}
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <TextField
              id="email"
              type="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <FormHelperText error>This field is required</FormHelperText>
            )}
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <TextField
              id="password"
              type="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <FormHelperText error>This field is required</FormHelperText>
            )}
          </FormControl>
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Sign Up
          </Button>
        </Box>
        {errorMessage && (
          <Typography variant="body1" color="error" mt={2}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Container>
    </div>
  );
}
export default Login;
