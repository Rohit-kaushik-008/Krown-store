import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import DealsOffers from "../pages/DealsOffers";
import Wishlist from "../pages/Wishlist";
import Setting from "../pages/Setting";

const display = ({ openNav }) => {
  return (
    <div className="relative lg:w-full">
      <div className="sticky top-0 left-0 border-2 border-theme-main w-screen lg:w-full z-10">
        <Navbar openNav={openNav} />
      </div>

      <div className="text-white h-auto z-90">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/deals&offers" element={<DealsOffers />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
};

export default display;
