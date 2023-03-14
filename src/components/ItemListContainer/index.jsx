import React from "react";
import styles from "./ItemListContainer.module.scss";

export const ItemListContainer = ({ geeting }) => {
  return (
    <div className={styles.contenedorItems}>
      <h4>{geeting}</h4>
    </div>
  );
};
