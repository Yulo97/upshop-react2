import "./App.css";
import { CarouselIndex } from "./components/CarouselIndex";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { useState } from "react";

function App() {
  const [findProduct, setFindProduct] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <>
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
              {!findProduct ? <CarouselIndex /> : <></>}
              <ItemListContainer
                setFindProduct={setFindProduct}
                findProduct={findProduct}
                setCart={setCart}
                cart={cart}
              />
            </>
          }
        />
        <Route
          path="category/:name"
          element={
            <ItemListContainer
              setFindProduct={setFindProduct}
              findProduct={findProduct}
              setCart={setCart}
              cart={cart}
            />
          }
        />
        <Route
          path="item/:id"
          element={
            <ItemDetailContainer setFindProduct={setFindProduct} setCart={setCart} cart={cart} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
