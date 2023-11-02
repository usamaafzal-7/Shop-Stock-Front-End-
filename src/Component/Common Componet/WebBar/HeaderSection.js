import {
  Badge,
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const HeaderSection = () => {
  const counterCart = useSelector((state) => state.counterCartBag.count);
  const [state, setState] = useState(false);
  const [stateCart, setStateCart] = useState(false);
  const changeEffect = () => {
    setState(!state);
  };
  const changeEffect2 = () => {
    setStateCart(!stateCart);
  };
  return (
    <Box
      // height="40%"
      width="95%"
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box width="10%" >
        <Link to="/">
          <img width="auto" alt="logo" src="/Logo/ShopStock.png" />
        </Link>
      </Box>
      <MenuItems />
      <Box
        width="10%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        mr="10px"
        // bgcolor="teal"
      >
        <Link to="/adminandcustomer" style={{ textDecoration: "none" }}>
          <IconButton
            onMouseEnter={changeEffect}
            onMouseLeave={changeEffect}
            sx={{
              height: "70%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <PersonPinIcon
              sx={{ color: state === false ? "whitesmoke" : "#FF9900" }}
            />
            <Typography
              fontSize="10px"
              sx={{ color: state === false ? "whitesmoke" : "#FF9900" }}
            >
              LOGIN
            </Typography>
          </IconButton>
        </Link>
        <Link to="/cartProduct" style={{ textDecoration: "none" }}>
          <IconButton
            onMouseEnter={changeEffect2}
            onMouseLeave={changeEffect2}
            sx={{
              height: "70%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Badge
              badgeContent={counterCart}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#FF9900",
                  color: "whitesmoke",
                },
              }}
            >
              <ShoppingBagIcon
                sx={{ color: stateCart === false ? "whitesmoke" : "#FF9900" }}
              />
            </Badge>
            <Typography
              fontSize="10px"
              sx={{ color: stateCart === false ? "whitesmoke" : "#FF9900" }}
            >
              CART{" "}
            </Typography>
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default HeaderSection;
