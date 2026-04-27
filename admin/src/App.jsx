import React from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import JohnstoresOrder from "./pages/JohnstoresOrder";
import CompletedOrder from "./pages/CompletedOrder";
import PendingOrder from "./pages/PendingOrder";
import SwiftOrder from "./pages/SwiftOrder";
import OrderDetails from "./components/OrderDetails";
import ProductForm from "./pages/ProductForm";
import Products from "./pages/Products";
import DeleteProduct from "./components/DeleteProduct";
import EditProduct from "./components/EditProduct";
import Category from "./pages/Category";
import AddCategory from "./components/AddCategory";
import Analytics from "./pages/Analytics";
import EasyMedia from "./pages/EasyMedia";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/johnstores-orders" element={<JohnstoresOrder />} />
          <Route path="/complete-orders" element={<CompletedOrder />} />
          <Route path="/pending-orders" element={<PendingOrder />} />
          <Route path="/swift-orders" element={<SwiftOrder />} />
          <Route path="/view" element={<OrderDetails />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/product" element={<Products />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/edit" element={<EditProduct />} />
          <Route path="/category" element={<Category />} />
          <Route path="/add-cate" element={<AddCategory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/easy-media" element={<EasyMedia />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
