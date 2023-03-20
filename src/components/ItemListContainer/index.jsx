import React from "react";
import { ProductCard } from "../ProductCard";
import styles from "./ItemListContainer.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export const ItemListContainer = ({ geeting }) => {
  const [products, setProducts] = useState([]);

  const URL_API = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    try {
      const res = await axios(URL_API);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <div className={styles.contenedorItems}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
