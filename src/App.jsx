import "./App.css";
import { CarouselIndex } from "./components/CarouselIndex";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Checkout } from "./components/Checkout";
import { CheckoutExito } from "./components/CheckoutExito";
import { Error } from "./components/Error";

function App() {
  const { findProduct } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!findProduct ? <CarouselIndex /> : <></>}
              <ItemListContainer />
            </>
          }
        />
        <Route path="category/:name" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="exito/:id" element={<CheckoutExito />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
