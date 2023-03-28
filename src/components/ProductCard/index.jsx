import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, cart, setCart }) => {
  // ver posibilidad de enviar funcion a APP.jsx
  const handleAddCart = () => {
    const newCart = [...cart];
    const indexProduct = newCart.findIndex((item) => item.id == product.id);

    if (indexProduct !== -1) {
      newCart[indexProduct].cantidad++;
      setCart(newCart);
    } else {
      const newProduct = {
        id: product.id,
        cantidad: 1,
        title: product.title,
        price: product.price,
        image: product.image,
      };
      newCart.push(newProduct);
      setCart(newCart);
    }
  };

  return (
    <Card
      sx={{
        height: 500,
        width: 300,
        transition: " 0.2s",
        "&:hover": { transform: "scale(1.05)" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia sx={{ height: 300 }} image={product.image} title={product.title} />
      <CardContent sx={{ flexGrow: 1, padding: "0px", margin: "0 !important" }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ margin: "0px" }}>
          {product.title}
        </Typography>
        <Typography variant="h7" color="text">
          Precio: $ {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" size="large" color="secondary">
          <Link to={`/item/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
            Ver
          </Link>
        </Button>
        <Button variant="contained" size="large" color="primary" onClick={handleAddCart}>
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
};
