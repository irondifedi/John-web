import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Categories from "./pages/Category";
import Analytics from "./pages/Analytics";
import EasyMedia from "./pages/EasyMedia";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";
import EditProduct from "./components/EditProduct";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="categories" element={<Categories />} />
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<ProductForm />} /> {/* Add */}
        <Route path="products/edit/:id" element={<EditProduct />} />{" "}
        {/* Edit */}
        <Route path="analytics" element={<Analytics />} />
        <Route path="easy-media" element={<EasyMedia />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
