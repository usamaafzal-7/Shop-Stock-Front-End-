import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import jwtDecode from "jwt-decode";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginSchema from "./LoginSchema";

const Login = () => {
  const navigate = useNavigate();
  const initialValue = { email: "", password: "" };
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: LoginSchema,
    onSubmit: async (value, action) => {
      try {
        const postUser = await axios.post(
          "http://localhost:5000/api/LoginUser",
          value
        );
        console.warn(postUser, "possstt userrrr");
        const decodeToken = jwtDecode(postUser.data);
        // console.log("Account verify", decodeToken._id);
        decodeToken._id === "640205c050d6e166fb8529eb"
          ? navigate("/dashboard")
          : navigate("/menproduct");
        action.resetForm();
      } catch (error) {
        console.warn("post error Login", error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box height="70vh" width="100vw">
        <Box
          height="80%"
          width="40%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          ml="30px"
        >
          <Typography fontWeight="bold" fontSize="30px">
            Login Account
          </Typography>
          <Typography>Email address*</Typography>
          <TextField
            size="small"
            placeholder="Email address"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            helperText={errors.email && touched.email ? errors.email : null}
            onChange={handleChange}
          ></TextField>
          <Typography>Password*</Typography>
          <TextField
            size="small"
            placeholder="Password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            helperText={
              errors.password && touched.password ? errors.password : null
            }
            onChange={handleChange}
            type="password"
          ></TextField>
          <Box
            height="10%"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              type="submit"
              variant="outlined"
              sx={{
                borderColor: "yellow",
                color: "black",
                ":hover": { backgroundColor: "#ff9800", borderColor: "yellow" },
              }}
            >
              Login{" "}
            </Button>
            <Typography
              sx={{
                cursor: "pointer",
                color: "#5574ea",
                ":hover": { color: "#eab709" },
              }}
            >
              Forgot your password?
            </Typography>
          </Box>
          <Typography>
            New Customer?{" "}
            <Link to={"/signUp"} style={{ textDecoration: "none" }}>
              <Button sx={{ ":hover": { color: "#eab709" } }}>Sign up</Button>
            </Link>
          </Typography>
        </Box>
      </Box>
    </form>
  );
};

export default Login;
