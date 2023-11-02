import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import KidsPage from "./KidsPage";
import MenPage from "./MenPage";
import PoloPage from "./PoloPage";
import WomenPage from "./WomenPage";

const MenuItems = () => {
  const itemsList = [
    { text: "New Arrivals" },
    { component: PoloPage },
    { text: "Home", link: "/" },
    { text: "Collaboration" },
    { text: "Big & Tall" },
    { component: MenPage },
    { component: WomenPage },
    { component: KidsPage },
  ];
  return (
    <Box
      width="65%"
      mx="auto"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
      gap={2} // Adjust the gap as needed
      padding="0 10px" // Add padding to the container
    
    >
      {itemsList.map((item, index) => (
        <Box
          key={index}
          sx={{
            cursor: "pointer",
            fontFamily: "sans-serif",
            color: "whitesmoke",
            ":hover": { color: "#ea820a" },
            width: "fit-content", // Adjust the width as needed
            padding: "15px",
            boxSizing: "border-box",
            fontWeight:"600"
            // textTransform: "capitalize" 
            // bgcolor:'orangered'
          }}
        >
          {item.link ? (
            <Link
              to={item.link}
              style={{
                textDecoration: "none",
                color: "whitesmoke",
              }}
            >
              {item.text}
            </Link>
          ) : (
            item.text
          )}
          {item.component && <item.component />}
        </Box>
      ))}
    </Box>
  );
};

export default MenuItems;
