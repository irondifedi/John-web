import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SwiftLogistics from "./pages/SwiftLogistics";
import EasyMedia from "./pages/EasyMedia";
import JohnStores from "./pages/JohnStores";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SwiftProduct from "./components/SwiftProduct";
import Cart from "./pages/Cart";
import { ToastContainer, toast } from "react-toastify";
import CartForm from "./pages/CartForm";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/swift-logistics" element={<SwiftLogistics />} />
        <Route path="/easy-media" element={<EasyMedia />} />
        <Route path="/john-stores" element={<JohnStores />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/swift-product/:productId" element={<SwiftProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart-form" element={<CartForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
