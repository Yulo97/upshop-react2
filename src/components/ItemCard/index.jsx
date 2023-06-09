import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCard = ({ product }) => {
  const { handleAddCart } = useContext(CartContext);

  const styleCard = {
    height: 500,
    width: 300,
    transition: " 0.2s",
    "&:hover": { transform: "scale(1.05)" },
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Card sx={styleCard}>
      <CardMedia sx={{ height: 300 }} image={product.image} title={product.title} />
      <CardContent sx={{ flexGrow: 1, padding: "0px", margin: "0 !important" }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ margin: "0px" }}>
          {product.title}
        </Typography>
        <Typography variant="h6" color="text">
          Precio: $ {product.price}
        </Typography>
        <Typography variant="h7" sx={{ margin: "0px" }}>
          Stock: {product.stock}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", gap: 2 }}>
        <Link to={`/item/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
          <Button variant="contained" size="large" color="secondary">
            Ver
          </Button>
        </Link>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => handleAddCart(product)}
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};
