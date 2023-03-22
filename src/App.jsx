import "./App.css";
import { CarouselIndex } from "./components/CarouselIndex";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CarouselIndex />
              <ItemListContainer />
            </>
          }
        />
        <Route path="category/:name" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
