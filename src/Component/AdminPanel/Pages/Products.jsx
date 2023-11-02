import { Box, Button, Card, TextField, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import Category from "./Category";
import DeleteIcon from "@mui/icons-material/Delete";

const Products = () => {
  return (
    <Box height="130vh" width="100vw" bgcolor="lightgray">
      <Box height="10%" width="100%">
        <Box
          height="100%"
          width="90%"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="20px" fontWeight="bold">
            Product grid
          </Typography>

          <Box
            height="80%"
            width="80%"
            display="flex"
            justifyContent="flex-end"
          >
            <Box
              height="100%"
              width="26%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button sx={{ bgcolor: "white", color: "black" }}>
                <CloudUploadIcon sx={{ color: "grey" }} />
                &nbsp;Export
              </Button>
              <Button sx={{ bgcolor: "#3069F2", color: "white" }}>
                + Create new
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box height="10%" width="100%">
        <Box
          height="100%"
          width="90%"
          bgcolor="whitesmoke"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            size="small"
            placeholder="Search"
            sx={{ width: "40%" }}
          ></TextField>
          <Box
            height="80%"
            width="50%"
            display="flex"
            justifyContent="flex-end"
          >
            <Box
              height="100%"
              width="45%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Category />
              <Button sx={{ bgcolor: "#edeff0", color: "black" }}>
                Last Added
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box height="80%" width="100%" mt="4px">
        <Box
          height="50%"
          width="90%"
          bgcolor="whitesmoke"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Card
            elevation={10}
            sx={{
              height: "80%",
              width: "20%",
              bgcolor: "darkkhaki",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img alt="pic" src="Jacket.jpg" height="50%" width="30%" />
            <Typography sx={{ color: "#6e7070" }}>Jacket for Men</Typography>
            <Typography fontWeight="bold">$90.00</Typography>
            <Box>
              <Button sx={{ color: "black", bgcolor: "white" }}>
                {" "}
                <CreateIcon sx={{ color: "#6e7070", fontSize: "15px" }} />{" "}
                &nbsp; Edit
              </Button>
              &nbsp;&nbsp;
              <Button sx={{ color: "red", bgcolor: "white" }}>
                {" "}
                <DeleteIcon sx={{ color: "red", fontSize: "20px" }} /> &nbsp;
                Delete
              </Button>
            </Box>
          </Card>
          <Card
            elevation={10}
            sx={{
              height: "80%",
              width: "20%",
              bgcolor: "darkkhaki",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img alt="pic" src="Jacket.jpg" height="50%" width="30%" />
            <Typography sx={{ color: "#6e7070" }}>Jacket for Men</Typography>
            <Typography fontWeight="bold">$90.00</Typography>
            <Box>
              <Button sx={{ color: "black", bgcolor: "white" }}>
                {" "}
                <CreateIcon sx={{ color: "#6e7070", fontSize: "15px" }} />{" "}
                &nbsp; Edit
              </Button>
              &nbsp;&nbsp;
              <Button sx={{ color: "red", bgcolor: "white" }}>
                {" "}
                <DeleteIcon sx={{ color: "red", fontSize: "20px" }} /> &nbsp;
                Delete
              </Button>
            </Box>
          </Card>
          <Card
            elevation={10}
            sx={{
              height: "80%",
              width: "20%",
              bgcolor: "darkkhaki",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img alt="pic" src="Jacket.jpg" height="50%" width="30%" />
            <Typography sx={{ color: "#6e7070" }}>Jacket for Men</Typography>
            <Typography fontWeight="bold">$90.00</Typography>
            <Box>
              <Button sx={{ color: "black", bgcolor: "white" }}>
                {" "}
                <CreateIcon sx={{ color: "#6e7070", fontSize: "15px" }} />{" "}
                &nbsp; Edit
              </Button>
              &nbsp;&nbsp;
              <Button sx={{ color: "red", bgcolor: "white" }}>
                {" "}
                <DeleteIcon sx={{ color: "red", fontSize: "20px" }} /> &nbsp;
                Delete
              </Button>
            </Box>
          </Card>
        </Box>
        <Box
          height="50%"
          width="90%"
          bgcolor="whitesmoke"
          mx="auto"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Card
            elevation={10}
            sx={{
              height: "80%",
              width: "20%",
              bgcolor: "darkkhaki",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img alt="pic" src="Jacket.jpg" height="50%" width="30%" />
            <Typography sx={{ color: "#6e7070" }}>Jacket for Men</Typography>
            <Typography fontWeight="bold">$90.00</Typography>
            <Box>
              <Button sx={{ color: "black", bgcolor: "white" }}>
                {" "}
                <CreateIcon sx={{ color: "#6e7070", fontSize: "15px" }} />{" "}
                &nbsp; Edit
              </Button>
              &nbsp;&nbsp;
              <Button sx={{ color: "red", bgcolor: "white" }}>
                {" "}
                <DeleteIcon sx={{ color: "red", fontSize: "20px" }} /> &nbsp;
                Delete
              </Button>
            </Box>
          </Card>
          <Card
            elevation={10}
            sx={{
              height: "80%",
              width: "20%",
              bgcolor: "darkkhaki",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img alt="pic" src="Jacket.jpg" height="50%" width="30%" />
            <Typography sx={{ color: "#6e7070" }}>Jacket for Men</Typography>
            <Typography fontWeight="bold">$90.00</Typography>
            <Box>
              <Button sx={{ color: "black", bgcolor: "white" }}>
                {" "}
                <CreateIcon sx={{ color: "#6e7070", fontSize: "15px" }} />{" "}
                &nbsp; Edit
              </Button>
              &nbsp;&nbsp;
              <Button sx={{ color: "red", bgcolor: "white" }}>
                {" "}
                <DeleteIcon sx={{ color: "red", fontSize: "20px" }} /> &nbsp;
                Delete
              </Button>
            </Box>
          </Card>
          <Card
            elevation={10}
            sx={{
              height: "80%",
              width: "20%",
              bgcolor: "darkkhaki",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img alt="pic" src="Jacket.jpg" height="50%" width="30%" />
            <Typography sx={{ color: "#6e7070" }}>Jacket for Men</Typography>
            <Typography fontWeight="bold">$90.00</Typography>
            <Box>
              <Button sx={{ color: "black", bgcolor: "white" }}>
                {" "}
                <CreateIcon sx={{ color: "#6e7070", fontSize: "15px" }} />{" "}
                &nbsp; Edit
              </Button>
              &nbsp;&nbsp;
              <Button sx={{ color: "red", bgcolor: "white" }}>
                {" "}
                <DeleteIcon sx={{ color: "red", fontSize: "20px" }} /> &nbsp;
                Delete
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
