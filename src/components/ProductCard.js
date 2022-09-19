import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product , handleAddToCart}) => {
  return (
    <Card className="card">
      <CardMedia component="img" height="194" image={product.image} alt="" />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>${product.cost}</Typography>
        <Rating name="read-only" value={product.rating} readOnly/>
      </CardContent>
      <CardActions>
        <Button
           className="card-button"
          variant="contained"
          onClick={() => {
            handleAddToCart(
              localStorage.getItem("token"),
              [],
              [],
              product._id,
              1,
              {preventDuplicate:true}
            )
          }}
        >
          <AddShoppingCartOutlined />
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
