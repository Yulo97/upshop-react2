import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material/";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import styles from "./ItemDetailContainer.module.scss";
import { Typography, Button, CircularProgress } from "@mui/material/";

export const ItemDetailContainer = ({ setFindProduct, setCart, cart }) => {
  const { id } = useParams();
  const URL_API = `https://fakestoreapi.com/products/${id}`;

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const res = await axios(URL_API);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    setFindProduct("");
    getProduct();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vhss" }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }} className={styles.contenedor}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Box>
            <img src={product.image} alt={product.title} className={styles.imagenProducto} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ gap: "20px", display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" color="initial">
              {product.title}
            </Typography>
            <Typography variant="body1" color="initial">
              {product.description}
            </Typography>
            <Typography variant="h5" color="initial">
              Precio: $ {product.price}
            </Typography>
            <Box>
              <Button variant="contained" size="large" color="primary" onClick={handleAddCart}>
                Agregar al Carrito
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
