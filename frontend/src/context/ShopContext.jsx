import { createContext, useEffect, useState } from "react";
import { swiftProducts, johnStoresProducts } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₦";
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size = null, color = null, quantity = 1) => {
    const product = swiftProducts.find((item) => item._id === itemId);

    // ✅ Check size ONLY if product has sizes
    if (product?.sizes?.length > 0 && !size) {
      toast.error("Select Product Size");
      return;
    }

    // ✅ Check color ONLY if product has colors
    if (product?.color?.length > 0 && !color) {
      toast.error("Select Product Color");
      return;
    }

    let cartData = structuredClone(cartItems);

    let variantKey = "default";

    if (size && color) {
      variantKey = `${size}-${color}`;
    } else if (size) {
      variantKey = size;
    } else if (color) {
      variantKey = color;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][variantKey]) {
        cartData[itemId][variantKey] += quantity;
      } else {
        cartData[itemId][variantKey] = quantity;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][variantKey] = quantity;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0; // ✅ This will hold the total number of items in the cart

    // Loop through each product in the cart
    for (const productId in cartItems) {
      // ✅ productId: the unique ID of each product in your cart

      const productVariants = cartItems[productId];
      // ✅ productVariants: an object containing all variants for this product
      // Example: { "default": 2, "M": 1, "L-red": 3 }

      // Loop through each variant (size-color, size only, color only, or default)
      for (const variantKey in productVariants) {
        // ✅ variantKey: the unique key for a variant
        // Can be: "default", "M", "red", "M-red" etc.

        try {
          const quantity = productVariants[variantKey];
          // ✅ Get the quantity for this specific variant

          if (quantity > 0) {
            // ✅ Only add if the quantity is greater than 0
            totalCount += quantity;
            // ✅ Add this variant's quantity to the total cart count
          }
        } catch (error) {
          // ❌ Just in case something goes wrong, skip it
        }
      }
    }

    return totalCount;
    // ✅ Returns the total number of items in the cart
  };

  const value = {
    swiftProducts,
    currency,
    navigate,
    johnStoresProducts,
    cartItems,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
