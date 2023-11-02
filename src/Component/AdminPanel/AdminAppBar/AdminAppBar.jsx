import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import MuiDrawer from "../Pages/MuiDrawer";

const AdminAppBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(8)})`,

      [theme.breakpoints.up("md")]: {
        width: "100ch",
      },
    },
  }));

  const settings = ["Profile", "Account", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const handleOpenUserMenu = () => {
    setAnchorElUser(!anchorElUser);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(!anchorElUser);
  };
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#FFFFFF" }}>
        <MuiDrawer />
        <Search sx={{ bgcolor: "#e5e8e9" }}>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "gray" }} />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{ color: "gray" }}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <WbSunnyIcon sx={{ color: "grey" }} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge color="error" variant="dot">
              <NotificationsIcon sx={{ color: "grey" }} />
            </Badge>
          </IconButton>
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.jpg"
            />
            <KeyboardArrowDownIcon sx={{ color: "grey" }} />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={anchorElUser}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default AdminAppBar;
