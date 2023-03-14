import "./App.css";
import { CarouselIndex } from "./components/CarouselIndex";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CarouselIndex />
      <ItemListContainer geeting="Estos son los productos" />
    </>
  );
}

export default App;
