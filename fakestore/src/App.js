import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import Home from "./screens/Home/Home";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import Footer from "./components/Footer/Footer";
import ProductsPag from "./screens/ProductsPag";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPag />} />
          <Route path="/product/:id" element={<DetailsProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
