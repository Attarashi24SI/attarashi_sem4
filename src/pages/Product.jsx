import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import productData from "../assets/data/Product.json";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <div className=" p-6">
        <PageHeader title="Products" breadcrumb={["Home", "Products"]} />

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Inventory Dashboard
          </h2>
          <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {productData.length} Items Loaded
          </div>
        </div>

        <div className="overflow-hidden bg-white shadow-xl shadow-slate-200/60 rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <th className="p-4 font-bold text-xs uppercase">No</th>
                <th className="p-4 font-bold text-xs uppercase">Code</th>
                <th className="p-4 font-bold text-xs uppercase">
                  Product Name
                </th>
                <th className="p-4 font-bold text-xs uppercase">Brand</th>
                <th className="p-4 font-bold text-xs uppercase text-right">
                  Price
                </th>
                <th className="p-4 font-bold text-xs uppercase text-center">
                  Stock
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {productData.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="p-4 text-slate-400 text-sm">{index + 1}</td>
                  <td className="p-4">
                    <span className="font-mono text-xs font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded">
                      {item.code}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-900">
                      <Link
                        to={`/products/${item.id}`}
                        className="text-emerald-400 hover:text-emerald-500"
                      >
                        {item.title}
                      </Link>
                    </div>
                    <div className="text-xs text-slate-500">
                      {item.category}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600">{item.brand}</td>
                  <td className="p-4 text-right font-medium text-slate-900">
                    Rp {item.price.toLocaleString("id-ID")}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`inline-block w-12 py-1 rounded text-xs font-bold ${
                        item.stock < 20
                          ? "bg-red-100 text-red-600"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      {item.stock}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
