import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../assets/data/CustomersData";
import { Link } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phone) {
      const newCustomer = {
        id: customers.length + 1,
        ...formData,
      };

      setCustomers([...customers, newCustomer]);

      setFormData({
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze",
      });

      setShowForm(false);
    }
  };

  // Diperbarui agar warnanya senada dengan gaya badge yang soft (light bg, dark text)
  const getLoyaltyBadgeStyle = (loyalty) => {
    switch (loyalty) {
      case "Gold":
        return "bg-amber-100 text-amber-700";
      case "Silver":
        return "bg-slate-200 text-slate-700";
      case "Bronze":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <PageHeader title="Customers" breadcrumb={["Home", "Customers"]} />

      {/* HEADER SECTION - Dibuat sejajar seperti di Product */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
          Customer Dashboard
        </h2>
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {customers.length} Customers
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-md shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
          >
            {showForm ? "Close Form" : "+ Add Customer"}
          </button>
        </div>
      </div>

      {/* FORM SECTION - Disesuaikan dengan border dan shadow yang sama */}
      {showForm && (
        <div className="bg-white p-6 mb-6 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/60 transition-all">
          <h2 className="text-lg font-bold mb-4 text-slate-800 border-b border-slate-100 pb-2">
            Add New Customer
          </h2>

          <form onSubmit={handleAddCustomer} className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
              required
            />

            <select
              name="loyalty"
              value={formData.loyalty}
              onChange={handleInputChange}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-700 bg-slate-50"
            >
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
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
                Save Customer
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TABLE SECTION - Identik dengan tampilan Product */}
      <div className="overflow-hidden bg-white shadow-xl shadow-slate-200/60 rounded-xl border border-slate-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
              <th className="p-4 font-bold text-xs uppercase">ID</th>
              <th className="p-4 font-bold text-xs uppercase">Name</th>
              <th className="p-4 font-bold text-xs uppercase">Email</th>
              <th className="p-4 font-bold text-xs uppercase">Phone</th>
              <th className="p-4 font-bold text-xs uppercase text-center">
                Loyalty
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {customers.map((c, index) => (
              <tr key={c.id} className="hover:bg-blue-50/30 transition-colors">
                <td className="p-4 text-slate-400 text-sm">{index + 1}</td>

                <Link
                  to={`/customers/${c.id}`}
                  className="text-emerald-400 hover:text-emerald-500"
                >
                  {c.name}
                </Link>



                <td className="p-4 text-sm text-slate-600">{c.email}</td>
                <td className="p-4 text-sm text-slate-600 font-mono">
                  {c.phone}
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded text-xs font-bold ${getLoyaltyBadgeStyle(
                      c.loyalty,
                    )}`}
                  >
                    {c.loyalty}
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
