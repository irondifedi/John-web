import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const userData = {
    name: "Johnpaul Ajuonwu",
    email: "AJUONWUCHIEMERIE@.",
    avatar: "/api/placeholder/40/40",
  };

  const pageTitle = {
    "/": "Dashboard",
    "/orders": "Orders Management",
    "/products": "Products",
    "/categories": "Categories",
    "/analytics": "Analytics",
    "/easy-media": "Easy Media",
    "/settings": "Settings",
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Fixed/Static */}
      <Sidebar
        activePath={location.pathname}
        onMenuItemClick={handleMenuItemClick}
        userData={userData}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "ml-20" : "ml-65"
        } h-screen overflow-hidden`}
      >
        {/* Sticky Top Nav */}
        <div className="sticky top-0 z-10 flex items-center justify-between h-[68px] px-6 bg-white border-b border-[rgba(107,107,107,0.15)] shrink-0">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-[18px] tracking-[-0.2px] font-clash-grotesk">
            {pageTitle[location.pathname] || "Dashboard"}
          </p>
          <img src="/noti.svg" alt="Notifications" />
        </div>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
