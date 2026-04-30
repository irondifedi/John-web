import { useState, useEffect } from "react";
import AddCategory from "../components/AddCategory";
import DeleteCategory from "../components/DeleteCategory";
import UpdateCategory from "../components/UpdateCategory";

// Mock API service
const categoryAPI = {
  fetchCategories: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
      {
        id: "1",
        name: "Gadgets",
        brand: "John's Stores",
        brandIcon: "/john-stores.svg",
      },
      {
        id: "2",
        name: "Flowers",
        brand: "Swift Logistics",
        brandIcon: "/swift-log.svg",
      },
    ];
  },
  createCategory: async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { id: Date.now().toString(), ...data };
  },
  updateCategory: async (id, data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { id, ...data };
  },
  deleteCategory: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  },
};

const Category = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showDeleteCategory, setShowDeleteCategory] = useState(false);
  const [showUpdateCategory, setShowUpdateCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    try {
      const data = await categoryAPI.fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to load categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCategory = async (formData) => {
    setIsLoading(true);
    try {
      const newCategory = await categoryAPI.createCategory({
        name: formData.categoryName,
        brand: formData.brand,
      });
      setCategories((prev) => [...prev, newCategory]);
      setShowAddCategory(false);
    } catch (error) {
      console.error("Failed to add category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCategory = async (formData) => {
    if (!selectedCategory) return;
    setIsLoading(true);
    try {
      const updated = await categoryAPI.updateCategory(selectedCategory.id, {
        name: formData.categoryName,
        brand: formData.brand,
      });
      setCategories((prev) =>
        prev.map((cat) => (cat.id === selectedCategory.id ? updated : cat)),
      );
      setShowUpdateCategory(false);
      setSelectedCategory(null);
    } catch (error) {
      console.error("Failed to update category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCategory = async () => {
    if (!selectedCategory) return;
    setIsLoading(true);
    try {
      await categoryAPI.deleteCategory(selectedCategory.id);
      setCategories((prev) =>
        prev.filter((cat) => cat.id !== selectedCategory.id),
      );
      setShowDeleteCategory(false);
      setSelectedCategory(null);
    } catch (error) {
      console.error("Failed to delete category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* header */}
      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Categories Management
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      {/*body */}
      <div className="flex flex-col justify-end items-center w-full pt-[25px] pb-[14px] px-[15px] gap-5 rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex w-full justify-between items-center px-1">
          <p className="text-[#717182] font-medium text-base leading-[25px] tracking-[-0.2px] capitalize font-dm-sans-500">
            Manage Products Categories <br /> Both Brands Here
          </p>
          <button
            onClick={() => setShowAddCategory(true)}
            className="flex justify-center items-center px-6 h-[45px] gap-2 rounded-[10px] bg-[#032817] cursor-pointer"
          >
            <img src="/addition.svg" alt="" />
            <p className="text-white text-center font-medium text-sm leading-[20px] font-dm-sans-500">
              Add Category
            </p>
          </button>
        </div>

        {/* Table Header */}
        <div className="flex px-[15px] w-full justify-between items-center bg-white">
          <div className="flex w-full justify-between items-start">
            <div className="flex items-center w-[137px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Category Image
              </p>
            </div>
            <div className="flex items-center w-[134px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Brand
              </p>
            </div>
            <div className="flex items-center w-[98px] h-[65px] px-[2px]">
              <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                Actions
              </p>
            </div>
          </div>
        </div>

        {/* Table Rows - Dynamic */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <p className="text-[#717182]">Loading categories...</p>
          </div>
        ) : (
          categories.map((category) => (
            <div
              key={category.id}
              className="flex px-[15px] w-full justify-between items-center bg-white"
            >
              <div className="flex w-full justify-between items-start">
                <div className="flex items-center w-[137px] h-[65px] px-[2px]">
                  <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                    {category.name}
                  </p>
                </div>
                <div className="flex items-center w-[134px] h-[65px] px-[2px]">
                  <div className="flex gap-1 items-center">
                    <img src={category.brandIcon} alt="" />
                    <p className="text-[#717182] font-medium text-[14px] leading-[14px] font-clash-grotesk">
                      {category.brand}
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-[98px] gap-1 h-[65px] px-[2px]">
                  <button
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowUpdateCategory(true);
                    }}
                    className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0 cursor-pointer"
                  >
                    <img src="/write.svg" alt="" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowDeleteCategory(true);
                    }}
                    className="flex flex-col items-start w-[32px] h-[32px] pt-[8px] px-[8px] rounded-[12px] shrink-0 cursor-pointer"
                  >
                    <img src="/delete.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modals */}
      {showAddCategory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowAddCategory(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AddCategory
              onClose={() => setShowAddCategory(false)}
              onSubmit={handleAddCategory}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}

      {showDeleteCategory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowDeleteCategory(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteCategory
              onClose={() => setShowDeleteCategory(false)}
              onConfirm={handleDeleteCategory}
              isLoading={isLoading}
              categoryName={selectedCategory?.name}
            />
          </div>
        </div>
      )}

      {showUpdateCategory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setShowUpdateCategory(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <UpdateCategory
              onClose={() => {
                setShowUpdateCategory(false);
                setSelectedCategory(null);
              }}
              onSubmit={handleUpdateCategory}
              initialData={{
                name: selectedCategory?.name,
                brand: selectedCategory?.brand,
              }}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
