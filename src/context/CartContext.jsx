import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [findProduct, setFindProduct] = useState("");

  const handleAddCart = (product) => {
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
    <CartContext.Provider value={{ cart, setCart, handleAddCart, findProduct, setFindProduct }}>
      {children}
    </CartContext.Provider>
  );
};
