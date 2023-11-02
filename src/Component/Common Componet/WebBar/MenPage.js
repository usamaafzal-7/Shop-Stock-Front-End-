import React, { useRef, useState } from "react";
import { Typography, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

const MenPage = () => {
  const [listMen, setListMen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the anchor element
  const poloMenuRef = useRef();
  const handleClosePolo = () => {
    setAnchorEl(null); // Close the menu by resetting anchorEl to null
    setListMen(false);
  };
  const handleMouseEnter = (event) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setAnchorEl(event.target); // Set the anchor element to the menu's ref
    setListMen(true);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
    setListMen(false);
    // console.log(setListMen(false),"polololo")
    if (!hoverTimeout) {
      setHoverTimeout(setTimeout(handleClosePolo, 100));
    }
  };

  const sections = [
    {
      heading: "Tops, Shirts & Ethnic Wear",
      items: [
        "Tees",
        "Sweat Shirts & Jackets & Coats",
        "Casual Shirts & Office Shirts",
        "Ethnic Wear",
      ],
    },
    {
      heading: "Jeans, Trousers & Shorts",
      items: ["Jeans & Trousers", "Sweat Pants & Shorts", "Activewear"],
    },
    {
      heading: "Underwear & Loungewear",
      items: ["Underwear & Vest", "Loungewear"],
    },
    {
      heading: "Accessories & Footwear",
      items: [
        "Watches",
        "Eyewear",
        "Fragrances",
        "Ties",
        "Hats, Scarves & Gloves",
        "Health & Grooming",
        "Bags, Belts & Wallets",
        "Socks",
        "Shoes",
      ],
    },
  ];

  return (
    <>
     <Link to="/menproduct" style={{ textDecoration: "none" }}>
      <Typography
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "whitesmoke",
          ":hover": { color: "#ea820a" },
          cursor:"pointer",
          fontWeight:"600"
        }}
      >
        Men
        {listMen === false ? (
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
          backgroundColor:"lightgrey"
          // mr:"120px"
        },
      }}
          //  minHeight="350"
          open={listMen}
          ref={poloMenuRef}
        >
          <Box
            height="100%"
            width="100%"
            display="flex"
            justifyContent="space-between"
            onMouseLeave={handleMouseLeave}
          >
            {sections.map((section, index) => (
              <Box height="80%" width="20%" key={index}>
                <MenuItem
                  onClick={handleClosePolo}
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
                    onClick={handleClosePolo}
                    sx={{
                      fontWeight: "800px",
                      fontSize: "12px",
                      ":hover": { color: "#ea820a" },
                    }}
                  >
                     {item === "Jeans & Trousers" || item === "Underwear & Vest" || item === "Sweat Shirts & Jackets & Coats" ? (
                      <Link to="/menproduct" style={{ textDecoration: "none" }}>
                        {item}
                      </Link>
                    ) : (
                      item
                    )}
                  </MenuItem>
                ))}
              </Box>
            ))}
          </Box>
        </Menu>
      </Typography>
      </Link>
    </>
  );
};

export default MenPage;
