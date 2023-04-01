import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import banner from "../src/assets/shop_banner.png";

export const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <img className="banner" src={banner} alt="shop banner" />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  );
};
