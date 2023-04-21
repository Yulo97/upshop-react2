import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material/";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import styles from "./ItemDetailContainer.module.scss";
import { Typography, Button, CircularProgress } from "@mui/material/";
import { CartContext } from "../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config.js";
import { useNavigate } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { setFindProduct, handleAddCart } = useContext(CartContext);

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      console.log(docRef.id);

      if (docSnap.exists()) {
        setLoading(false);
        setProduct({ ...docSnap.data(), id: docRef.id });
      } else {
        navigate(`/error`);
      }
    } catch (error) {
      console.log("Error: " + error);
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
            <Typography variant="body1" color="initial">
              Stock: {product.stock}
            </Typography>
            <Typography variant="h5" color="initial">
              Precio: $ {product.price}
            </Typography>
            <Box>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => handleAddCart(product)}
              >
                Agregar al Carrito
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
