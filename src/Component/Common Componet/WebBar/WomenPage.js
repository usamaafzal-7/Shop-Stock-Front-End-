import React, { useState, useRef } from "react";
import { Typography, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const WomenPage = () => {
  const [listWomen, setListWomen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const womenMenuRef = useRef();

  const handleCloseWomen = () => {
    setAnchorEl(null);
    setListWomen(false);
  };

  const handleMouseEnter = (event) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setAnchorEl(event.target);
    setListWomen(true);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setListWomen(false);
    if (!hoverTimeout) {
      setHoverTimeout(setTimeout(handleCloseWomen, 100));
    }
  };

  const sections = [
    {
      heading: "Tops, Kurtis & Lawn",
      items: ["Tees, Polos & Shirts", "Sweat Shirts & Jackets", "Kurtis & Lawn"],
    },
    {
      heading: "Trousers, Lingerie & Sleepwear",
      items: ["Jeans, Trousers & Jeggings", "Sweat Pants & Loungewear", "Lingerie & Underwear", "Activewear", "Sleeping Suits & Nightwear"],
    },
    {
      heading: "Beauty, Cosmetics & Hair",
      items: ["Skincare & Cosmetics", "Hair Essentials", "Fragrances"],
    },
    {
      heading: "Shoes & Accessories",
      items: ["Bags & Purses", "Watches", "Eyewear", "Hats, Scarves & Accessories", "Socks", "Shoes", "Jewellery"],
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
        Women's Fashion
        {listWomen === false ? (
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
          open={listWomen}
          ref={womenMenuRef}
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
                  onClick={handleCloseWomen}
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
                    onClick={handleCloseWomen}
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

export default WomenPage;
