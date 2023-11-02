import React, { useState, useRef } from "react";
import { Typography, Menu, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PoloPage = () => {
  const [listPolo, setListPolo] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the anchor element
  const poloMenuRef = useRef();
  const handleClosePolo = () => {
    setAnchorEl(null); // Close the menu by resetting anchorEl to null
    setListPolo(false);
  };

  const handleMouseEnter = (event) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setAnchorEl(event.target); // Set the anchor element to the menu's ref
    setListPolo(true);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
    setListPolo(false);
    // console.log(setListPolo(false),"polololo")
    if (!hoverTimeout) {
      setHoverTimeout(setTimeout(handleClosePolo, 100));
    }
  };

  // const StyledMenu = styled((props) => <Menu {...props} />)(({ theme }) => ({
  //   "& .MuiPaper-root": {
  //     borderRadius: 0,
  //     marginRight: theme.spacing(10),
  //     marginTop: theme.spacing(-44),
  //     width: "100vw",
  //     minHeight: 350,
  //     backgroundColor: "lightgrey",
  //   },

  // }));

  const sections = [
    {
      heading: "PR MEN",
      items: [
        "Polos",
        "Tees",
        "Casual Shirts",
        "Ethnic Wear",
        "Sweat Shirts & Jackets",
        "Underwears & Vests",
        "Trousers & Shorts",
        "Watches",
      ],
    },
    {
      heading: "PR Women",
      items: [
        "Sweat Shirts & Jacket",
        "Top, Kurtis & Lawn",
        "Trousers & Leggings",
      ],
    },
    {
      heading: "PR Kids",
      items: [
        "Rompers",
        "Tees,Sweat Shirts & Jackets",
        "Casual Shirts",
        "Ethnic Wear",
        "Trousers & Shorts",
        "Socks",
        "Shoes",
      ],
    },
    {
      heading: "PR Home",
      items: ["Bags & Accessories", "Bed Sets & Blankets", "Towels"],
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
        Polo Republica
        {listPolo === false ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowUpIcon />
        )}
        <Menu
      //   anchorOrigin={{
      //   vertical: "bottom",
      //   horizontal: "right",
      // }}
      // transformOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
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
          open={listPolo}
          ref={poloMenuRef}
        >
          <Box width="100%" display="flex" justifyContent="space-between" 
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

export default PoloPage;
