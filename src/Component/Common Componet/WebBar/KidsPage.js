import React, { useState, useRef } from "react";
import { Typography, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const KidsPage = () => {
  const [listKids, setListKids] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the anchor element
  const kidsMenuRef = useRef();

  const handleCloseKids = () => {
    setAnchorEl(null); // Close the menu by resetting anchorEl to null
    setListKids(false);
  };

  const handleMouseEnter = (event) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setAnchorEl(event.target); // Set the anchor element to the menu's ref
    setListKids(true);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
    setListKids(false);
    if (!hoverTimeout) {
      setHoverTimeout(setTimeout(handleCloseKids, 100));
    }
  };

  const sections = [
    {
      heading: "Babies",
      items: [
        "Rompers, Sleep Suits & Body Suits",
        "Tops, Shirts & Jackets",
        "Dresses",
        "Trousers, Leggings & Jeggings",
      ],
    },
    {
      heading: "Boys",
      items: [
        "Tees, Polo, Sweat Shirts & Jackets",
        "Casual & Dress Shirts",
        "Ethnic Wear",
        "Shorts, Trousers & Jeans",
        "Underwear & Nightwear",
        "Footwear",
      ],
    },
    {
      heading: "Girls",
      items: [
        "Tops, Dresses & Jackets",
        "Shorts, Trousers & Jeans",
        "Underwear & Nightwear",
        "Hair Accessories",
        "Footwear",
      ],
    },
    {
      heading: "Toys & Accessories",
      items: [
        "Toys",
        "Eyewear & Watches",
        "Hats, Gloves & Scarves",
        "Bags & Accessories",
        "Socks",
      ],
    },
  ];

  return (
    <>
      <Typography
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
          ":hover": { color: "#ea820a" },
          cursor: "pointer",
          fontWeight:"600"
        }}
      >
        Kids
        {listKids === false ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowUpIcon />
        )}
        <Menu
          anchorEl={anchorEl}
          PaperProps={{
            sx: {
              width: "100vw",
              border: "1px solid #ccc",
              boxShadow: "0px 0px 5px #ccc",
              backgroundColor: "lightgrey",
            },
          }}
          open={listKids}
          ref={kidsMenuRef}
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            onMouseLeave={handleMouseLeave}
          >
            {sections.map((section, index) => (
              <Box height="80%" width="20%" key={index}>
                <MenuItem
                  onClick={handleCloseKids}
                  sx={{
                    fontWeight: "800px",
                    fontSize: "17px",
                    ":hover": { color: "#ea820a" },
                  }}
                >
                  {section.heading}
                </MenuItem>
                {section.items.map((item, itemIndex) => (
                  <MenuItem
                    key={itemIndex}
                    onClick={handleCloseKids}
                    sx={{
                      fontWeight: "800px",
                      fontSize: "12px",
                      ":hover": { color: "#ea820a" },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            ))}
          </Box>
        </Menu>
      </Typography>
    </>
  );
};

export default KidsPage;
