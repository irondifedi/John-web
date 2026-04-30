import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ─────────────────────────────────────────────
// MOCK DATA — replace with API calls later
// ─────────────────────────────────────────────
const mockStats = [
  {
    id: "revenue",
    label: "Total Revenue",
    icon: "/naira.svg",
    value: "₦1,997,494",
    badge: { text: "+2.1%", color: "text-[#1FB35B]" },
    badgeSuffix: "vs last month",
  },
  {
    id: "orders",
    label: "Total Orders",
    icon: "/orders.svg",
    value: "75",
    badge: { text: "-2.1%", color: "text-[#C3383F]" },
    badgeSuffix: "vs last month",
  },
  {
    id: "pending",
    label: "Pending Payments",
    icon: "/pending.svg",
    value: "7",
    badge: { text: "Pending", color: "text-[#C3383F]" },
    badgeSuffix: "",
  },
  {
    id: "completed",
    label: "Completed Orders",
    icon: "/completed.svg",
    value: "7",
    badge: { text: "Cleared", color: "text-[#1FB35B]" },
    badgeSuffix: "",
  },
  {
    id: "lowstock",
    label: "Low Stock Items",
    icon: "/completed.svg",
    value: "7",
    badge: { text: "3", color: "text-[#C3383F]" },
    badgeSuffix: "Categories",
    badgePrefix: "From",
  },
];

const mockRecentOrders = [
  {
    id: "1",
    orderId: "JS-2026-021",
    brand: "John's Stores",
    brandIcon: "/john-stores.svg",
    customerName: "Gloria Johnson",
    total: "₦100,240",
    status: "Processing",
    statusColor: "bg-[rgba(230,211,172,0.45)]",
    date: "March 14, 2026",
  },
  {
    id: "2",
    orderId: "JS-2026-005",
    brand: "John's Stores",
    brandIcon: "/john-stores.svg",
    customerName: "Junior Ikenna",
    total: "₦10,000",
    status: "Pending",
    statusColor: "bg-[#F2EEC1]",
    date: "March 14, 2026",
  },
  {
    id: "3",
    orderId: "JS-2026-056",
    brand: "Swift Logistics",
    brandIcon: "/swift-log.svg",
    customerName: "Thompson Clinton",
    total: "₦270,000",
    status: "Completed",
    statusColor: "bg-[#DCFCE7]",
    date: "March 14, 2026",
  },
];

const dateFilterOptions = [
  "Today",
  "This Week",
  "This Month",
  "Last 30 Days",
  "Custom Range",
];

// ─────────────────────────────────────────────
// STAT CARD — reusable per metric
// ─────────────────────────────────────────────
const StatCard = ({ stat }) => (
  <div className="flex justify-center items-center w-full p-[12px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-[#FAFAFA]">
    <div className="flex w-full flex-col items-start shrink-0 gap-[15px]">
      {/* Icon + Label */}
      <div className="flex items-center gap-[10px]">
        <img src={stat.icon} alt={stat.label} />
        <p className="text-[#717182] font-medium text-xs leading-[16px] font-clash-grotesk">
          {stat.label}
        </p>
      </div>

      {/* Value + Badge */}
      <div className="flex items-center self-stretch pl-[12px] py-[15px] rounded-[10px] border border-[rgba(107,107,107,0.10)] bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
        <div className="flex flex-col gap-2">
          <p className="text-[#3B0002] font-medium text-[22px] leading-[28px] font-clash-grotesk">
            {stat.value}
          </p>
          <span className="text-[#6B6B6B] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
            {stat.badgePrefix && `${stat.badgePrefix} `}
            <span
              className={`${stat.badge.color} font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500`}
            >
              {stat.badge.text}
            </span>
            {stat.badgeSuffix && ` ${stat.badgeSuffix}`}
          </span>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// RECENT ORDER ROW — one row per order
// onView is passed from Dashboard, do not call
// handleViewOrder directly here
// ─────────────────────────────────────────────
const OrderRow = ({ order, onView }) => (
  <div className="flex items-center w-full px-[25px] border-b border-[rgba(107,107,107,0.15)] h-[52px]">
    <div className="flex-1 min-w-0">
      <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] font-clash-grotesk truncate">
        {order.orderId}
      </p>
    </div>
    <div className="flex-1 flex gap-1 items-center min-w-0">
      <img src={order.brandIcon} alt={order.brand} className="shrink-0" />
      <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500 truncate">
        {order.brand}
      </p>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[#2D2D2D] font-medium text-[13px] leading-[14px] tracking-[-0.5px] font-dm-sans-500 truncate">
        {order.customerName}
      </p>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk truncate">
        {order.total}
      </p>
    </div>
    <div className="flex-1 min-w-0">
      <div
        className={`inline-flex justify-center items-center px-3 h-[24px] rounded-[4px] ${order.statusColor}`}
      >
        <p className="text-[#2D2D2D] font-medium text-[12px] leading-[14px] tracking-[-0.5px] font-dm-sans-500">
          {order.status}
        </p>
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[#3B0002] font-medium text-[13px] leading-[14px] font-clash-grotesk truncate">
        {order.date}
      </p>
    </div>
    <div className="flex-1 min-w-0">
      {/* Calls onView prop — wired to handleViewOrder inside Dashboard */}
      <button
        onClick={() => onView?.(order)}
        className="text-[#E3494E] font-bold text-[13px] leading-[14px] tracking-[-0.5px] underline font-dm-sans-700 cursor-pointer"
      >
        View
      </button>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// MAIN DASHBOARD COMPONENT
// Props:
//   stats        — array of stat card data (defaults to mockStats)
//   recentOrders — array of recent order rows (defaults to mockRecentOrders)
// ─────────────────────────────────────────────
const Dashboard = ({ stats = mockStats, recentOrders = mockRecentOrders }) => {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Last 30 Days");

  // Navigate to Orders page and auto-open the matching order modal
  const handleViewOrder = (order) => {
    navigate(`/orders?orderId=${order.orderId}`);
  };

  const handleFilterSelect = (option) => {
    setSelectedFilter(option);
    setFilterOpen(false);
    // TODO: call API with selected date filter
  };

  return (
    <div className="w-full flex flex-col">
      {/* ── BODY ───────────────────────────────── */}
      <div className="flex flex-col justify-center items-start w-full p-[12px] gap-[20px] rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        {/* ── STAT CARDS ─────────────────────────── */}
        <div className="grid grid-cols-5 gap-[20px] w-full">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>

        {/* ── RECENT ORDERS TABLE ────────────────── */}
        <div className="w-full h-auto pt-[24px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          {/* Title + Date Filter */}
          <div className="flex items-center w-full px-[25px] justify-between mb-2">
            <p className="text-[#2D2D2D] font-medium text-[18px] leading-base tracking-[-0.2px] font-clash-grotesk">
              Recent Orders
            </p>

            {/* Date Filter Dropdown */}
            <div className="relative">
              <div
                className="flex gap-1 items-center justify-center cursor-pointer"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <img src="/calendar.svg" alt="" />
                <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                  {selectedFilter}
                </p>
                <div className="flex flex-col gap-0.5">
                  <img src="/up-arrow.svg" alt="" />
                  <img src="/down-arrow.svg" alt="" />
                </div>
              </div>

              {/* Dropdown Options */}
              {filterOpen && (
                <div className="absolute top-full right-1 mt-2 w-[135px] bg-white shadow-md rounded-[10px] z-10">
                  {dateFilterOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleFilterSelect(option)}
                      className={`flex items-center self-stretch pl-[16px] py-[10px] border-b border-[#DADADA] cursor-pointer hover:bg-gray-50 rounded-[10px] ${
                        selectedFilter === option ? "bg-[#E6D3AC]" : ""
                      }`}
                    >
                      <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                        {option}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Table — no scroll, full width, flex-1 columns */}
          <div className="w-full">
            {/* Column Headers */}
            <div className="flex items-center w-full px-[25px] py-[10px] bg-[#FAFAFA]">
              {[
                "Order ID",
                "Brand",
                "Customer's Name",
                "Total",
                "Status",
                "Date",
                "Action",
              ].map((col) => (
                <div key={col} className="flex-1 h-[44px] flex items-center">
                  <p className="text-[#717182] font-bold text-[13px] leading-[14px] font-clash-grotesk">
                    {col}
                  </p>
                </div>
              ))}
            </div>

            {/* Order Rows */}
            <div className="flex flex-col">
              {recentOrders.map((order) => (
                <OrderRow
                  key={order.id}
                  order={order}
                  onView={handleViewOrder}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
