import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { experimentalStyled as styled } from "@mui/material/styles";
import { add } from "../../Redux/CounterReducer";

const MenProduct = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    try {
      const responsee = await axios.get("http://localhost:5000/api/Product");
      // console.warn(responsee.data);
      setProductData(responsee.data);
    } catch (error) {
      console.warn("Product Error", error);
    }
  };

  const dataPost = async (props) => {
    props.productQuantity = 1;
    props.productSubTotal = props.productPrice;
    delete props._id;
    delete props.__v;
    // console.warn(props, "props");

    try {
      const post = await axios.post(
        "http://localhost:5000/api/CartProduct",
        props
      );
      // console.warn("posst some data product men", post);
      dispatch(add());
    } catch (error) {
      console.warn("post Data error fdfdfdf", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    // <Box width="100%">
      <Grid container spacing={2}  bgcolor="lightgray" >
        {productData.map((value, ind) => (
          <Grid item  xs={12} sm={6} md={4} key={ind}>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="center"
              // bgcolor="yellowgreen"
              p={5}
            >
              {/* <Box
                height="70%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor="teal"
              > */}
              <img
                alt="pic"
                height="500px"
                width="80%"
                src={value.productImage}
                style={{borderRadius:"30px"}}
              />
              {/* </Box> */}
              <Item fontWeight="bold">
                Elo Brand : {value.productName}
              </Item>
              <Item fontWeight="bold">
                Price Tag : {value.productPrice}
              </Item>
              <Button
                sx={{
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "grey",
                  color: "white",
                  ":hover": { backgroundColor: "#ea820a" },
                  textTransform: "capitalize" 
                }}
                onClick={() => dataPost(value)}
              >
                Add To Cart
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    // </Box>
  );
};

export default MenProduct;
