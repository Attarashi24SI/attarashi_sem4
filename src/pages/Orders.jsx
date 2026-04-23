import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "Pending":
        return "bg-yellow-400";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-6">
          <PageHeader title="Orders" breadcrumb={["Home", "Orders"]} />

          {/* BUTTON */}
          <div className="m-5">
            <button
              onClick={() => setShowForm(true)}
              className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600"
            >
              + Add Order
            </button>
          </div>

          {/* FORM */}
          {showForm && (
            <div className="bg-white p-5 m-5 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-5">Add New Order</h2>

              <form
                onSubmit={handleAddOrder}
                className="grid grid-cols-2 gap-5"
              >
                <input
                  type="text"
                  name="id"
                  placeholder="Order ID (ex: ORD015)"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                  required
                />

                <input
                  type="text"
                  name="customerName"
                  placeholder="Customer Name"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                  required
                />

                <input
                  type="number"
                  name="totalPrice"
                  placeholder="Total Price"
                  value={formData.totalPrice}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                  required
                />

                <input
                  type="date"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                  required
                />

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md col-span-2"
                >
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>

                <div className="col-span-2 flex justify-end gap-3">
                  <button
                    type="submit"
                    className="bg-emerald-500 text-white px-5 py-2 rounded-md"
                  >
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-200 px-5 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TABLE */}
          <div className="m-5 overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Order ID</th>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Total</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.customerName}</td>
                    <td className="p-3">{formatDate(order.orderDate)}</td>
                    <td className="p-3">Rp {formatPrice(order.totalPrice)}</td>
                    <td className="p-3">
                      <span
                        className={`${getStatusColor(
                          order.status
                        )} text-white px-3 py-1 rounded-full text-xs`}
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
      </div>
    </div>
  );
}