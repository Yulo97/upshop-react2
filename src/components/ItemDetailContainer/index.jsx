import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material/";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import styles from "./ItemDetailContainer.module.scss";
import { Typography, Button, CircularProgress } from "@mui/material/";

export const ItemDetailContainer = ({ setFindProduct }) => {
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

  useEffect(() => {
    setFindProduct("");
    getProduct();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
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
              <Button variant="contained" size="large" color="primary">
                Agregar al Carrito
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
