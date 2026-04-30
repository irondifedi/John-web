import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Mock API — replace with your real API calls
const productsAPI = {
  fetchProductById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    // Simulated product data — swap with real fetch
    const mockProducts = {
      1: {
        id: "1",
        name: "Premium Rose Bouquet",
        brand: "Swift Logistics",
        category: "Flowers",
        description: "",
        image: "/api/placeholder/60/60",
        price: 4999,
        stock: 35,
        sizes: [],
        isFeatured: false,
      },
      2: {
        id: "2",
        name: "Running Shoes Elite",
        brand: "John's Stores",
        category: "Shoes",
        description: "",
        image: "/api/placeholder/60/60",
        price: 4999,
        stock: 0,
        sizes: ["M", "L", "XL"],
        isFeatured: false,
      },
    };
    return mockProducts[id] || null;
  },
  saveProduct: async (product) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true, product };
  },
};

/**
 * ProductForm — handles both Add (/products/new) and Edit (/products/edit/:id)
 * Reads :id from the URL via useParams to determine mode automatically.
 */
const ProductForm = () => {
  const { id } = useParams(); // present on edit route, undefined on new
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    brand: "John's Stores",
    category: "",
    description: "",
    imageUrl: "",
    price: "",
    stock: "",
    sizes: "",
    isFeatured: false,
  });

  const [loading, setLoading] = useState(isEditing); // show loader while fetching
  const [isSaving, setIsSaving] = useState(false);

  // If editing, fetch the product and pre-fill the form
  useEffect(() => {
    if (!isEditing) return;

    const loadProduct = async () => {
      try {
        const product = await productsAPI.fetchProductById(id);
        if (product) {
          setFormData({
            name: product.name || "",
            brand: product.brand || "John's Stores",
            category: product.category || "",
            description: product.description || "",
            imageUrl: product.image || "",
            price: product.price?.toString() || "",
            stock: product.stock?.toString() || "",
            sizes: product.sizes?.join(", ") || "",
            isFeatured: product.isFeatured || false,
          });
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, isEditing]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const productPayload = {
        id: isEditing ? id : Date.now().toString(),
        name: formData.name,
        brand: formData.brand,
        brandIcon: "/john-stores.svg",
        category: formData.category,
        description: formData.description,
        image: formData.imageUrl || "/api/placeholder/60/60",
        price: Number(formData.price),
        stock: Number(formData.stock),
        status: Number(formData.stock) > 0 ? "In Stock" : "Out of Stock",
        sizes: formData.sizes
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        isFeatured: formData.isFeatured,
      };

      await productsAPI.saveProduct(productPayload);
      navigate("/products"); // go back to list after save
    } catch (error) {
      console.error("Failed to save product:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full py-20">
        <p className="text-[#717182] font-dm-sans-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Products Management
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col justify-center items-start w-full p-3 rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex items-center py-[20px] gap-2">
          <button
            onClick={() => navigate("/products")}
            className="flex flex-col justify-center items-center w-[36px] h-[36px] rounded-[12px] cursor-pointer"
          >
            <img src="/left-arrow.svg" alt="Go back" />
          </button>

          <div className="flex flex-col items-start gap-2">
            <p className="text-[#2D2D2D] font-medium text-xl leading-[18px] tracking-[-0.2px] font-clash-grotesk">
              {isEditing ? "Edit Product" : "Add New Product"}
            </p>
            <p className="text-[#717182] font-medium text-sm leading-[16px] tracking-[-0.2px] capitalize font-dm-sans-500">
              {isEditing ? `Editing product #${id}` : "Create a new Product"}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full py-[30px] px-[30px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          <div className="flex flex-col w-full items-end shrink-0 gap-5">
            {/* Product Name */}
            <div className="flex flex-col w-full items-start gap-1.5">
              <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Product Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter product name"
                className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
              />
            </div>

            {/* Brand */}
            <div className="flex flex-col w-full items-start gap-1.5">
              <p className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Brand
              </p>
              <div className="flex justify-between w-full items-center px-[21px] py-[19px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white">
                <div className="flex gap-0.5 items-center">
                  <img src="/john-stores.svg" alt="" />
                  <p className="text-[#2D2D2D] font-medium text-base leading-[18px] tracking-[-0.5px] font-dm-sans">
                    {formData.brand}
                  </p>
                </div>
                <img src="/keyboard-arrow.svg" alt="" />
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col w-full items-start gap-1.5">
              <p className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Category
              </p>
              <div className="flex justify-between w-full items-center px-[21px] py-[19px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white">
                <p className="text-[#2D2D2D] font-medium text-base leading-[18px] tracking-[-0.5px] font-dm-sans">
                  {formData.category || "Select Category"}
                </p>
                <img src="/keyboard-arrow.svg" alt="" />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col w-full items-start gap-1.5">
              <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Product Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Enter product description..."
                className="flex items-center w-full h-[100px] pt-[21px] pb-[21px] pl-[21px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans resize-none"
              />
            </div>

            {/* Product Images */}
            <div className="flex flex-col w-full items-start gap-1.5">
              <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Product Images
              </label>
              <div className="flex w-full gap-1">
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => handleChange("imageUrl", e.target.value)}
                  placeholder="Enter image URL"
                  className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                />
                <img src="/add.svg" alt="" />
              </div>
            </div>

            {/* Price & Stock */}
            <div className="flex w-full items-start gap-5">
              <div className="flex flex-col w-full items-start gap-1.5">
                <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                  Price (₦)
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  placeholder="0"
                  className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                />
              </div>
              <div className="flex flex-col w-full items-start gap-1.5">
                <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => handleChange("stock", e.target.value)}
                  placeholder="0"
                  className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                />
              </div>
            </div>

            {/* Size Options */}
            <div className="flex flex-col w-full items-start gap-1.5">
              <label className="text-[#2D2D2D] font-medium text-base leading-[18px] font-dm-sans-500">
                Size Options
              </label>
              <div className="flex w-full gap-1">
                <input
                  type="text"
                  value={formData.sizes}
                  onChange={(e) => handleChange("sizes", e.target.value)}
                  placeholder="e.g., M, L, XL"
                  className="flex items-center w-full h-[60px] pt-[21px] pb-[21px] pl-[21px] rounded-[14px] border-[1.5px] border-[#D1D5DC] bg-white placeholder:text-[rgba(45,45,45,0.50)] placeholder:font-normal placeholder:text-base placeholder:leading-[18px] font-dm-sans"
                />
                <img src="/add.svg" alt="" />
              </div>
            </div>

            {/* Featured */}
            <div className="flex w-full items-center gap-2">
              <div
                onClick={() => handleChange("isFeatured", !formData.isFeatured)}
                className={`flex justify-center items-center w-[20px] h-[20px] aspect-square rounded-[4px] border cursor-pointer transition-colors ${
                  formData.isFeatured
                    ? "bg-[#032817] border-[#032817]"
                    : "border-[rgba(3,40,23,0.35)] bg-[rgba(3,40,23,0.15)]"
                }`}
              >
                {formData.isFeatured && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <p className="text-[#2D2D2D] font-semibold text-base leading-[18px] font-dm-sans-700">
                Mark as Featured Product
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#D1D5DC] mt-4"></div>

            {/* Actions */}
            <div className="flex gap-1">
              <button
                onClick={() => navigate("/products")}
                className="flex flex-col justify-center items-center px-[20px] h-[60px] rounded-[14px] bg-[#ECECF0]"
              >
                <p className="text-black font-medium text-base leading-[18px] font-clash-grotesk">
                  Cancel
                </p>
              </button>

              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex flex-col justify-center items-center px-[20px] h-[60px] gap-[10px] rounded-[12px] border border-white bg-[#16CB5E] disabled:opacity-60"
              >
                <p className="text-white font-medium text-base leading-[18px] font-clash-grotesk">
                  {isSaving
                    ? "Saving..."
                    : isEditing
                      ? "Update Product"
                      : "Save Product"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
