import React from "react";
import { ProductCard } from "../ProductCard";
import styles from "./ItemListContainer.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

export const ItemListContainer = ({ findProduct, setFindProduct, cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { name } = useParams();
  let URL_API;

  if (!name) {
    URL_API = "https://fakestoreapi.com/products";
  } else {
    URL_API = `https://fakestoreapi.com/products/category/${name}`;
  }

  const getProducts = async () => {
    try {
      setFindProduct("");
      setLoading(true);
      const res = await axios(URL_API);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [URL_API]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (findProduct) {
    const productosFiltrados = products.filter((product) =>
      product.title.toLowerCase().includes(findProduct.toLowerCase())
    );

    return (
      <div className={styles.contenedorItems}>
        {productosFiltrados.map((product) => (
          <ProductCard key={product.id} product={product} setCart={setCart} cart={cart} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.contenedorItems}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} setCart={setCart} cart={cart} />
      ))}
    </div>
  );
};
