import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Chart from "./Chart";
import ChartsPie from "./PieChart";
import BasicTable from "./Table";

export const Dashboard = () => {
  return (
    <Box  paddingTop={5} paddingBottom={5} width="100vw" bgcolor="lightgrey" display="flex" flexDirection="column" gap={5}>
      <Box  width="95%" mx="auto" display="flex" alignItems="center">
        <Typography marginLeft="80px" fontSize="20px" fontWeight="bold">
          Dashboard
        </Typography>
      </Box>
      <Box
        height="10%"
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        mt="10px"
      >
        <Box height="100%" width="25%" display="flex" bgcolor="whitesmoke">
          <Box
            height="100%"
            width="20%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: "#FE911B" }}>
              <AttachMoneySharpIcon />
            </Avatar>
          </Box>
          <Box
            height="100%"
            width="80%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography color="grey">Total Sales</Typography>
            <Typography fontWeight="700px" fontSize="20px">
              $19,93,33
            </Typography>
          </Box>
        </Box>

        <Box height="100%" width="25%" display="flex" bgcolor="whitesmoke">
          <Box
            height="100%"
            width="20%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: "#00B91A" }}>
              <ShoppingCartIcon />
            </Avatar>
          </Box>

          <Box
            height="100%"
            width="80%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography color="grey">Total Orders</Typography>
            <Typography fontWeight="700px" fontSize="20px">
              $19,93,33
            </Typography>
          </Box>
        </Box>
        <Box height="100%" width="25%" display="flex" bgcolor="whitesmoke">
          <Box
            height="100%"
            width="20%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: "#3568EE" }}>
              <ShoppingBasketIcon />
            </Avatar>
          </Box>

          <Box
            height="100%"
            width="80%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography color="grey">Total Product</Typography>
            <Typography fontWeight="700px" fontSize="20px">
              $19,93,33
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        height="40%"
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        mt="20px"
      >
        <Box height="100%" width="58%" bgcolor="whitesmoke">
          <Typography ml="30px" mt="10px" fontWeight="bold" fontSize="15px">
            Sales Statistics
          </Typography>
          <Chart />
        </Box>
        <Box height="100%" width="25%" bgcolor="whitesmoke">
          <Typography ml="20px" mt="10px" fontWeight="bold" fontSize="15px">
            Visitors
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="65%"
            width="100%"
          >
            <Typography fontWeight="bold" fontSize="20px">
              Recent month
            </Typography>
            <ChartsPie />
          </Box>
          <Box
            height="24%"
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Box
              height="100%"
              width="45%"
              display="flex"
              justifyContent="space-between"
            >
              <ul style={{ color: "grey" }}>
                <li>Social media 50%</li>
                <li>Purchased visitors 30%</li>
              </ul>
            </Box>
            <Box height="100%" width="50%">
              <ul style={{ color: "grey" }}>
                <li>Affiliate visitors 18%</li>
                <li>By advertisement 20%</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        height="50%"
        width="100%"
        bgcolor="lightgray"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box height="90%" width="89%" bgcolor="whitesmoke" mx="auto">
          <Typography ml="16px" fontWeight="bold" fontSize="20px">
            Latest orders
          </Typography>
          <BasicTable />
        </Box>
      </Box>
    </Box>
  );
};
