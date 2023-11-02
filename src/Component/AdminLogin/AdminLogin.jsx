import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import jwtDecode from "jwt-decode";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminLoginSchema from "./AdminSchema";

const AdminLogin = () => {
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
    validationSchema: AdminLoginSchema,
    onSubmit: async (value, action) => {
      try {
        const postAdmin = await axios.post(
          "http://localhost:5000/api/LoginUser",
          value
        );
        console.warn(postAdmin, "possstt userrrr");
        const decodeToken = jwtDecode(postAdmin.data);
        // console.log("Admin Verify Account", decodeToken._id);
        decodeToken._id === "6543f22513f2ce50833b17dd"
          ? navigate("/dashboard")
          : action.resetForm();
      } catch (error) {
        console.warn("Admin error", error);
      }
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Box height="70vh" width="100vw" display="flex" alignItems="center">
        <Box
          height="80%"
          width="40%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          ml="30px"
        >
          <Typography fontWeight="bold" fontSize="30px">
            Admin Login
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
        </Box>
      </Box>
    </form>
  );
};

export default AdminLogin;
