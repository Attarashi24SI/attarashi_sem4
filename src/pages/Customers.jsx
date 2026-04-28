import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../assets/data/CustomersData";

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

  const getLoyaltyBgColor = (loyalty) => {
    switch (loyalty) {
      case "Gold":
        return "bg-amber-400";
      case "Silver":
        return "bg-gray-300";
      case "Bronze":
        return "bg-orange-600";
      default:
        return "bg-gray-300";
    }
  };

  return (


        <div className="p-6">
          <PageHeader
            title="Customers"
            breadcrumb={["Home", "Customers"]}
          />

          {/* BUTTON */}
          <div className="m-5">
            <button
              onClick={() => setShowForm(true)}
              className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600"
            >
              + Add Customer
            </button>
          </div>

          {/* FORM */}
          {showForm && (
            <div className="bg-white p-5 m-5 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-5 text-slate-800">
                Add New Customer
              </h2>

              <form
                onSubmit={handleAddCustomer}
                className="grid grid-cols-2 gap-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                  required
                />

                <select
                  name="loyalty"
                  value={formData.loyalty}
                  onChange={handleInputChange}
                  className="px-3 py-2 border rounded-md"
                >
                  <option>Bronze</option>
                  <option>Silver</option>
                  <option>Gold</option>
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
                  <th className="p-3 text-left">ID</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Loyalty</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((c) => (
                  <tr key={c.id} className="border-t">
                    <td className="p-3">{c.id}</td>
                    <td className="p-3">{c.name}</td>
                    <td className="p-3">{c.email}</td>
                    <td className="p-3">{c.phone}</td>
                    <td className="p-3">
                      <span
                        className={`${getLoyaltyBgColor(
                          c.loyalty
                        )} text-white px-3 py-1 rounded-full text-xs`}
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