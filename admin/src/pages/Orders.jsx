// pages/Orders.jsx - Complete with proper data structure
import { useState, useEffect } from "react";
import OrderDetails from "../components/OrderDetails";

const ordersAPI = {
  fetchOrders: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
      {
        id: "1",
        orderId: "JS-2026-021",
        itemSum: "2 Items",
        sender: "Gloria Johnson",
        recipientName: "-",
        total: 10240,
        paymentStatus: "Paid",
        orderStatus: "Completed",
        items: [
          {
            name: "Premium Rose Bouquet (Red, Medium)",
            quantity: 1,
            price: 4999,
          },
          { name: "Chocolate Gift Box", quantity: 1, price: 5241 },
        ],
        customer: { name: "Gloria Johnson", phone: "+234 802 345 6789" },
        recipient: { name: "-", phone: "-" },
        subtotal: 10000,
        deliveryFee: 240,
      },
      {
        id: "2",
        orderId: "JS-2026-005",
        itemSum: "2 Items",
        sender: "Junior Ikenna",
        recipientName: "Laurence Peter",
        total: 10000,
        paymentStatus: "Pending",
        orderStatus: "Pending",
        items: [{ name: "Gift Box", quantity: 2, price: 5000 }],
        customer: { name: "Junior Ikenna", phone: "+234 802 345 6789" },
        recipient: { name: "Laurence Peter", phone: "+234 803 456 7890" },
        subtotal: 10000,
        deliveryFee: 0,
      },
      {
        id: "3",
        orderId: "JS-2026-040",
        itemSum: "1 Items",
        sender: "Malachy Itubo",
        recipientName: "-",
        total: 76240,
        paymentStatus: "Paid",
        orderStatus: "Processing",
        items: [{ name: "Luxury Watch", quantity: 1, price: 76240 }],
        customer: { name: "Malachy Itubo", phone: "+234 802 345 6789" },
        recipient: { name: "-", phone: "-" },
        subtotal: 76240,
        deliveryFee: 0,
      },
      {
        id: "4",
        orderId: "JS-2026-010",
        itemSum: "1 Items",
        sender: "Shruti Bharti",
        recipientName: "-",
        total: 1000240,
        paymentStatus: "Paid",
        orderStatus: "Completed",
        items: [{ name: "Diamond Necklace", quantity: 1, price: 1000240 }],
        customer: { name: "Shruti Bharti", phone: "+234 802 345 6789" },
        recipient: { name: "-", phone: "-" },
        subtotal: 1000240,
        deliveryFee: 0,
      },
      {
        id: "5",
        orderId: "JS-2026-031",
        itemSum: "2 Items",
        sender: "Chloe Brendan",
        recipientName: "Chloe John",
        total: 700490,
        paymentStatus: "Pending",
        orderStatus: "Pending",
        items: [{ name: "Designer Bag", quantity: 1, price: 700490 }],
        customer: { name: "Chloe Brendan", phone: "+234 802 345 6789" },
        recipient: { name: "Chloe John", phone: "+234 803 456 7890" },
        subtotal: 700490,
        deliveryFee: 0,
      },
      {
        id: "6",
        orderId: "JS-2026-056",
        itemSum: "2 Items",
        sender: "Thompson Clinton",
        recipientName: "Frank Ibeb",
        total: 270000,
        paymentStatus: "Paid",
        orderStatus: "Completed",
        items: [{ name: "Laptop", quantity: 1, price: 270000 }],
        customer: { name: "Thompson Clinton", phone: "+234 802 345 6789" },
        recipient: { name: "Frank Ibeb", phone: "+234 803 456 7890" },
        subtotal: 270000,
        deliveryFee: 0,
      },
      {
        id: "7",
        orderId: "JS-2026-021",
        itemSum: "3 Items",
        sender: "Anaka Lopez",
        recipientName: "-",
        total: 10240,
        paymentStatus: "Paid",
        orderStatus: "Processing",
        items: [{ name: "Flower Bouquet", quantity: 3, price: 3413 }],
        customer: { name: "Anaka Lopez", phone: "+234 802 345 6789" },
        recipient: { name: "-", phone: "-" },
        subtotal: 10240,
        deliveryFee: 0,
      },
    ];
  },
  markAsPaid: async (orderId) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  },
  completeOrder: async (orderId) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  },
  updateOrderStatus: async (orderId, status) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  },
  updatePaymentStatus: async (orderId, status) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  },
};

const Orders = () => {
  const [orderDetails, setOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const data = await ordersAPI.fetchOrders();
      setOrders(data);
    } catch (error) {
      console.error("Failed to load orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setOrderDetails(true);
  };

  const handleMarkAsPaid = async (orderId) => {
    setIsUpdating(true);
    try {
      await ordersAPI.markAsPaid(orderId);
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId
            ? { ...order, paymentStatus: "Paid", orderStatus: "Processing" }
            : order,
        ),
      );
      // Update modal if it's open for this order
      if (selectedOrder?.id === orderId) {
        setSelectedOrder((prev) => ({
          ...prev,
          paymentStatus: "Paid",
          orderStatus: "Processing",
        }));
      }
    } catch (error) {
      console.error("Failed to mark as paid:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCompleteOrder = async (orderId) => {
    setIsUpdating(true);
    try {
      await ordersAPI.completeOrder(orderId);
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, orderStatus: "Completed" } : order,
        ),
      );
      // Update modal if it's open for this order
      if (selectedOrder?.id === orderId) {
        setSelectedOrder((prev) => ({
          ...prev,
          orderStatus: "Completed",
        }));
      }
    } catch (error) {
      console.error("Failed to complete order:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdateStatus = async (status) => {
    if (!selectedOrder) return;
    setIsUpdating(true);
    try {
      await ordersAPI.updateOrderStatus(selectedOrder.orderId, status);
      setOrders((prev) =>
        prev.map((order) =>
          order.id === selectedOrder.id
            ? { ...order, orderStatus: status }
            : order,
        ),
      );
      setSelectedOrder((prev) => ({ ...prev, orderStatus: status }));
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdatePayment = async (status) => {
    if (!selectedOrder) return;
    setIsUpdating(true);
    try {
      await ordersAPI.updatePaymentStatus(selectedOrder.orderId, status);
      setOrders((prev) =>
        prev.map((order) =>
          order.id === selectedOrder.id
            ? { ...order, paymentStatus: status }
            : order,
        ),
      );
      setSelectedOrder((prev) => ({ ...prev, paymentStatus: status }));
    } catch (error) {
      console.error("Failed to update payment:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const filteredOrders = () => {
    switch (activeTab) {
      case "johns":
        return orders.filter((order) => order.sender === "Gloria Johnson");
      case "swift":
        return orders.filter((order) => order.recipientName !== "-");
      case "pending":
        return orders.filter((order) => order.paymentStatus === "Pending");
      case "completed":
        return orders.filter((order) => order.orderStatus === "Completed");
      default:
        return orders;
    }
  };

  const getStatusBadgeStyle = (status) => {
    const styles = {
      Paid: "bg-[#DCFCE7] text-[#2D2D2D]",
      Pending: "bg-[#F2EEC1] text-[#2D2D2D]",
      Completed: "bg-[#DCFCE7] text-[#2D2D2D]",
      Processing: "bg-[rgba(230,211,172,0.45)] text-[#2D2D2D]",
    };
    return styles[status] || "bg-gray-100 text-gray-600";
  };

  const tabCounts = {
    all: orders.length,
    johns: orders.filter((o) => o.sender === "Gloria Johnson").length,
    swift: orders.filter((o) => o.recipientName !== "-").length,
    pending: orders.filter((o) => o.paymentStatus === "Pending").length,
    completed: orders.filter((o) => o.orderStatus === "Completed").length,
  };

  const showMarkPaidButton = (order) => order.paymentStatus === "Pending";
  const showCompleteButton = (order) =>
    order.orderStatus === "Processing" && order.paymentStatus === "Paid";
  return (
    <div className="w-full flex flex-col">
      <div className="p-6">
        {/* Tabs */}
        <div className="flex justify-start items-center gap-6 mb-6 border-b border-[rgba(113,113,130,0.45)] overflow-x-auto">
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-3 px-2 font-medium text-sm font-clash-grotesk transition-colors whitespace-nowrap ${
              activeTab === "all"
                ? "text-[#E3494E] border-b-2 border-[#E3494E]"
                : "text-[#717182] hover:text-[#2D2D2D]"
            }`}
          >
            All Orders ({tabCounts.all})
          </button>
          <button
            onClick={() => setActiveTab("johns")}
            className={`pb-3 px-2 font-medium text-sm font-clash-grotesk transition-colors whitespace-nowrap ${
              activeTab === "johns"
                ? "text-[#E3494E] border-b-2 border-[#E3494E]"
                : "text-[#717182] hover:text-[#2D2D2D]"
            }`}
          >
            Johns Stores ({tabCounts.johns})
          </button>
          <button
            onClick={() => setActiveTab("swift")}
            className={`pb-3 px-2 font-medium text-sm font-clash-grotesk transition-colors whitespace-nowrap ${
              activeTab === "swift"
                ? "text-[#E3494E] border-b-2 border-[#E3494E]"
                : "text-[#717182] hover:text-[#2D2D2D]"
            }`}
          >
            Swift Logistics ({tabCounts.swift})
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`pb-3 px-2 font-medium text-sm font-clash-grotesk transition-colors whitespace-nowrap ${
              activeTab === "pending"
                ? "text-[#E3494E] border-b-2 border-[#E3494E]"
                : "text-[#717182] hover:text-[#2D2D2D]"
            }`}
          >
            Pending Payment ({tabCounts.pending})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`pb-3 px-2 font-medium text-sm font-clash-grotesk transition-colors whitespace-nowrap ${
              activeTab === "completed"
                ? "text-[#E3494E] border-b-2 border-[#E3494E]"
                : "text-[#717182] hover:text-[#2D2D2D]"
            }`}
          >
            Completed ({tabCounts.completed})
          </button>
        </div>

        {/* Orders Table */}
        <div className="w-full h-auto rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-[#FAFAFA] border-b border-[rgba(107,107,107,0.1)]">
                <tr>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Order ID
                  </th>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Item Sum
                  </th>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Sender's Name
                  </th>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Recipient's Name
                  </th>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Total
                  </th>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Payment Status
                  </th>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Order Status
                  </th>
                  <th className="text-left px-4 py-3 text-[#717182] font-medium text-xs font-clash-grotesk">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-10 text-[#717182]"
                    >
                      Loading orders...
                    </td>
                  </tr>
                ) : (
                  filteredOrders().map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-[rgba(107,107,107,0.05)] hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <span className="text-[#2D2D2D] font-medium text-[13px] font-clash-grotesk">
                          {order.orderId}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[#2D2D2D] text-[13px] font-clash-grotesk">
                          {order.itemSum}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[#2D2D2D] text-[13px] font-clash-grotesk">
                          {order.sender}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[#2D2D2D] text-[13px] font-clash-grotesk">
                          {order.recipientName}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-[#3B0002] font-medium text-[13px] font-clash-grotesk">
                          ₦{order.total.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex px-3 py-1 rounded-sm text-xs font-medium ${getStatusBadgeStyle(order.paymentStatus)}`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex px-3 py-1 rounded-sm text-xs font-medium ${getStatusBadgeStyle(order.orderStatus)}`}
                        >
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <button
                            onClick={() => handleViewOrder(order)}
                            className="text-[#E3494E] font-bold text-[13px] underline hover:no-underline font-dm-sans-700 cursor-pointer whitespace-nowrap"
                          >
                            View
                          </button>

                          {showMarkPaidButton(order) && (
                            <button
                              onClick={() => handleMarkAsPaid(order.id)}
                              disabled={isUpdating}
                              className="text-[#032817] font-bold text-[13px] underline hover:no-underline font-dm-sans-700 cursor-pointer whitespace-nowrap disabled:opacity-50"
                            >
                              Mark Paid
                            </button>
                          )}

                          {showCompleteButton(order) && (
                            <button
                              onClick={() => handleCompleteOrder(order.id)}
                              disabled={isUpdating}
                              className="text-[#008236] font-medium text-[13px] hover:underline font-dm-sans-700 cursor-pointer whitespace-nowrap disabled:opacity-50"
                            >
                              Complete
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {orderDetails && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div onClick={(e) => e.stopPropagation()}>
            <OrderDetails
              onClose={() => {
                setOrderDetails(false);
                setSelectedOrder(null);
              }}
              orderData={selectedOrder}
              onUpdateStatus={handleUpdateStatus}
              onUpdatePayment={handleUpdatePayment}
              isLoading={isUpdating}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
