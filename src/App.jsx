import "./App.css";
import { CarouselIndex } from "./components/CarouselIndex";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { useState } from "react";

function App() {
  const [findProduct, setFindProduct] = useState("");

  return (
    <>
      <Navbar setFindProduct={setFindProduct} findProduct={findProduct} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!findProduct ? <CarouselIndex /> : <></>}
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
    </>
  );
}

export default App;
