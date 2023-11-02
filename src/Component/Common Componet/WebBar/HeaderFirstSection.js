import { Box, Typography } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const HeaderFirstSection = () => {
  const iconsAndText = [
    { icon: <MailIcon />, label: "Email" },
    { icon: <FacebookIcon />, label: "Facebook" },
    { icon: <InstagramIcon />, label: "Instagram" },
    { icon: <TwitterIcon />, label: "Twitter" },
    { icon: <YouTubeIcon />, label: "YouTube" },
  ];
  return (
    <Box
      width="95%"
      display="flex"
      mx="auto"
      justifyContent="space-between"
      // bgcolor={"orangered"}
    >
      <Box
        width="15%"
        // bgcolor={"blue"}
        display="flex"
        alignItems="center"
      >
        {iconsAndText.map((item, index) => (
          <Box
            key={index}
            mx="auto"
            display="flex"
            alignItems="center"
            // bgcolor="yellowgreen"
          >
            <Typography
              sx={{
                cursor: "pointer",
                color: "whitesmoke",
                ":hover": { color: "#ea820a" },
              }}
            >
              {item.icon}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        width="40%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          fontFamily="sans-serif"
          fontSize="14px"
          fontWeight="bold"
          sx={{
            cursor: "pointer",
            color: "whitesmoke",
            ":hover": { color: "#ea820a" },
          }}
        >
          30 DAYS HAPPINESS GUARANTEE
        </Typography>
      </Box>
      <Box
        width="20%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Typography
          fontFamily="sans-serif"
          fontSize="14px"
          fontWeight="bold"
          sx={{
            cursor: "pointer",
            color: "whitesmoke",
            ":hover": { color: "#ea820a" },
          }}
        >
          HELP &nbsp; &nbsp; RETRUN & EXCHANGE
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderFirstSection;
