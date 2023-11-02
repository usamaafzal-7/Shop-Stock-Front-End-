import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, minss } from "../../Redux/CounterReducer";

const CartProduct = () => {
  const dispatch = useDispatch();
  let [totalCart, setTotalCart] = useState(0);
  const [cartData, setCartData] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/CartProduct");
      // console.warn("get Cart Product", response.data);

      response.data.map((val, ind) => {
        totalCart = val.productSubTotal + totalCart;
        // console.warn("tooootallll", totalCart);
      });

      setCartData(response.data);
      setTotalCart(totalCart);
      // console.warn("total cart", totalCart);
    } catch (error) {
      console.warn("Cart product Error", error);
    }
  };

  const adding = async (props) => {
    // console.warn(props, "props");
    totalCart = 0;
    props.productQuantity = props.productQuantity + 1;
    props.productSubTotal = props.productQuantity * props.productPrice;
    const putSome = await axios.put(
      `http://localhost:5000/api/CartProduct/${props._id}`,
      props
    );
    // console.warn("put someee", putSome);
    getProduct();
    dispatch(add());
  };
  const minus = async (props) => {
    totalCart = 0;
    // console.warn("minussss1", props);
    props.productQuantity = props.productQuantity - 1;
    props.productSubTotal = props.productQuantity * props.productPrice;
    // console.warn("minussss2", props);
    const putSome1 = await axios.put(
      `http://localhost:5000/api/CartProduct/${props._id}`,
      props
    );
    getProduct();
    dispatch(minss());
  };
  const handleDelete = async (picking) => {
    totalCart = 0;
    const deleteProduct = await axios.delete(
      `http://localhost:5000/api/CartProduct/${picking}`
    );
    getProduct();
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Box width="100%" display="flex" flexDirection="column" gap={3}>
      <Box
        height="15%"
        width="100%"
        display="flex"
        alignItems="center"
        paddingTop={2}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "25px", marginLeft: "50px" }}
        >
          Shopping Cart
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-evenly"
        // bgcolor="yellowgreen"
        paddingTop={2}
        paddingBottom={2}
      >
        <Box
          width="50%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          ml="10px"
        >
          <Typography fontWeight="bold">Products</Typography>
        </Box>
        <Box
          width="40%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            width="80%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight="bold">Price</Typography>
            <Typography fontWeight="bold">Quantity</Typography>
            <Typography fontWeight="bold">Total</Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ width: "93%", mx: "auto" }}></Divider>
      {cartData.map((value, index) => (
        <Box key={index}>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box
              width="50%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                alt="Product"
                width="50%"
                height="300px"
                src={value.productImage}
              />  
              <Box
                width="45%"
                display="flex"
                flexDirection="column"
                gap={2}
                // justifyContent="space-evenly"
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: "#146EB4",
                    fontSize: "21px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    ":hover": { color: "#ea820a" },
                  }}
                >
                  Men's Collection
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: "#000000",
                    fontFamily: "sans-serif",
                  }}
                >
                  Name :&nbsp;{value.productName}{" "}
                </Typography>
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: "#000000",
                    fontFamily: "sans-serif",
                    display:'flex',
                    alignItems:"center",
                    gap:"10px"
                  }}
                >
                  Size : &nbsp; 
                  <Button sx={{ textTransform: "capitalize" }} variant="outlined" size="small"  >Small</Button>
                  <Button  sx={{ textTransform: "capitalize" }}  variant="outlined" size="medium">Medium</Button>
                  <Button  sx={{ textTransform: "capitalize" }}  variant="outlined" size="large">Large</Button>
                </Typography>
              </Box>
            </Box>
            <Box
              height="100%"
              width="5%"
              display="flex"
              justifyContent="centerdata"
              alignItems="center"
            >
              <Typography>{value.productPrice}</Typography>{" "}
            </Box>
            <Box
              height="100%"
              width="15%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                sx={{
                  backgroundColor: "#ff9800",
                  ":hover": { backgroundColor: "#ff9800" },
                  height: "30px",
                  color: "white",
                }}
                onClick={() => {
                  minus(value);
                }}
              >
                -
              </Button>
              &nbsp; &nbsp; {value.productQuantity} &nbsp; &nbsp;
              <Button
                sx={{
                  backgroundColor: "#ff9800",
                  ":hover": { backgroundColor: "#ff9800" },
                  height: "30px",
                  color: "white",
                }}
                onClick={() => {
                  adding(value);
                }}
              >
                +
              </Button>
            </Box>
            <Box
              height="100%"
              width="5%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>{value.productSubTotal}</Typography>
            </Box>
            <IconButton onClick={() => handleDelete(value._id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Divider sx={{ width: "93%", mx: "auto" }}></Divider>
        </Box>
      ))}
      <Box
        paddingTop={2}
        paddingBottom={2}
        width="93%"
        bgcolor="lightgrey"
        mx="auto"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Box
          width="20%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
          fontSize="20px"
        >
          SubTotal :
        </Box>
        <Box
          width="11%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr="50px"
          fontWeight="bold"
          fontSize="20px"
        >
          {totalCart}
        </Box>
      </Box>
      <Box
        paddingTop={2}
        paddingBottom={2}
        width="100%"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Link to="/menproduct" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              mr: "130px",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#3A89D6",
              ":hover": { color: "#eab709" },
            }}
          >
            Continue Shopping
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default CartProduct;
