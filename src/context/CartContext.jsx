import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [findProduct, setFindProduct] = useState("");

  const toastyAddProduct = () =>
    toast("Producto Agregado", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: "💕",
      progressStyle: {
        background: "#fb07dc",
      },
    });

  const toastyDeleteProduct = () =>
    toast("Producto Eliminado", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: "😢",
      progressStyle: {
        background: "#fb07dc",
      },
    });

  const toastyClearCart = () =>
    toast("Carrito Vacio", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: "👜",
      progressStyle: {
        background: "#fb07dc",
      },
    });

  const handleAddCart = (product, cant = 1) => {
    const newCart = [...cart];
    const indexProduct = newCart.findIndex((item) => item.id == product.id);

    if (indexProduct !== -1) {
      newCart[indexProduct].cantidad += cant;
      setCart(newCart);
      toastyAddProduct();
    } else {
      const newProduct = {
        id: product.id,
        cantidad: cant,
        title: product.title,
        price: product.price,
        image: product.image,
      };
      newCart.push(newProduct);
      setCart(newCart);
      toastyAddProduct();
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddCart,
        findProduct,
        setFindProduct,
        toastyDeleteProduct,
        toastyClearCart,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};
