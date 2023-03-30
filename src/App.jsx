import "./App.css";
import { CarouselIndex } from "./components/CarouselIndex";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const [findProduct, setFindProduct] = useState("");
  const [cart, setCart] = useState([]);

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
    <CartContext.Provider value={handleAddCart}>
      <Navbar
        setFindProduct={setFindProduct}
        findProduct={findProduct}
        cart={cart}
        setCart={setCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!findProduct && <CarouselIndex />}
              <ItemListContainer setFindProduct={setFindProduct} findProduct={findProduct} />
            </>
          }
        />
        <Route
          path="category/:name"
          element={<ItemListContainer setFindProduct={setFindProduct} findProduct={findProduct} />}
        />
        <Route path="item/:id" element={<ItemDetailContainer setFindProduct={setFindProduct} />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
