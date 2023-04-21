import React from "react";
import { ItemCard } from "../ItemCard";
import styles from "./ItemListContainer.module.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../../db/firebase-config.js";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const { setFindProduct, findProduct } = useContext(CartContext);

  const { name } = useParams();

  const traerProductos = async () => {
    setLoading(true);
    try {
      if (!name) {
        const coleccion = collection(db, "items");
        const querySnapshot = await getDocs(coleccion);
        const items = [];
        querySnapshot.forEach((item) => {
          items.push({
            id: item.id,
            ...item.data(),
          });
        });
        setLoading(false);
        setProducts(items);
      } else {
        const coleccion = collection(db, "items");
        const q = query(coleccion, where("category", "==", name));

        const querySnapshot = await getDocs(q);
        const items = [];
        querySnapshot.forEach((item) => {
          items.push({
            id: item.id,
            ...item.data(),
          });
        });
        setLoading(false);
        setProducts(items);

        if (items.length == 0) {
          navigate("/error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = () => {
    setFindProduct("");
    traerProductos();
  };

  useEffect(() => {
    getProducts();
  }, [name]);

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
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.contenedorItems}>
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};
