import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/data/OrderData.json";

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddOrder = (e) => {
    e.preventDefault();

    if (
      formData.id &&
      formData.customerName &&
      formData.totalPrice &&
      formData.orderDate
    ) {
      setOrders([
        ...orders,
        {
          ...formData,
          totalPrice: Number(formData.totalPrice),
        },
      ]);

      setFormData({
        id: "",
        customerName: "",
        status: "Pending",
        totalPrice: "",
        orderDate: "",
      });

      setShowForm(false);
    }
  };

  // Diperbarui dengan gaya badge yang soft (light bg, dark text) agar senada
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  return (
    <div className="p-6">
      <PageHeader title="Orders" breadcrumb={["Home", "Orders"]} />

      {/* HEADER SECTION - Sejajar dengan tombol */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
          Order Dashboard
        </h2>
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {orders.length} Orders
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
          >
            {showForm ? "Close Form" : "+ Add Order"}
          </button>
        </div>
      </div>

      {/* FORM SECTION - Desain disamakan dengan form Customers */}
      {showForm && (
        <div className="bg-white p-6 mb-6 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/60 transition-all">
          <h2 className="text-lg font-bold mb-4 text-slate-800 border-b border-slate-100 pb-2">
            Add New Order
          </h2>

          <form onSubmit={handleAddOrder} className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="id"
              placeholder="Order ID (ex: ORD015)"
              value={formData.id}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
              required
            />

            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              value={formData.customerName}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
              required
            />

            <input
              type="number"
              name="totalPrice"
              placeholder="Total Price"
              value={formData.totalPrice}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
              required
            />

            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
              required
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50 col-span-2"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <div className="col-span-2 flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-slate-100 text-slate-600 font-semibold text-sm px-5 py-2 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-emerald-500 text-white font-semibold text-sm px-5 py-2 rounded-lg hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20"
              >
                Save Order
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TABLE SECTION - Identik dengan tampilan Product & Customers */}
      <div className="overflow-hidden bg-white shadow-xl shadow-slate-200/60 rounded-xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
              <th className="p-4 font-bold text-xs uppercase">Order ID</th>
              <th className="p-4 font-bold text-xs uppercase">Customer</th>
              <th className="p-4 font-bold text-xs uppercase">Date</th>
              <th className="p-4 font-bold text-xs uppercase text-right">Total</th>
              <th className="p-4 font-bold text-xs uppercase text-center">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                <td className="p-4">
                  <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    {order.id}
                  </span>
                </td>
                <td className="p-4 font-semibold text-slate-900">
                  {order.customerName}
                </td>
                <td className="p-4 text-sm text-slate-600">
                  {formatDate(order.orderDate)}
                </td>
                <td className="p-4 text-right font-medium text-slate-900">
                  Rp {formatPrice(order.totalPrice)}
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded text-xs font-bold ${getStatusBadgeStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}