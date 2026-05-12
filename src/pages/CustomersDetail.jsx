import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function CustomersDetail() {
    const { id } = useParams()
    const [customer, setCustomer] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Menggunakan endpoint /users dari dummyjson sebagai data customer
        axios
            .get(`https://dummyjson.com/users/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.message)
                    return
                }
                setCustomer(response.data)
            })
            .catch((err) => {
                setError(err.message)
            })
    }, [id])

    if (error) return <div className="text-red-600 p-4 font-medium text-center mt-10">Error: {error}</div>
    if (!customer) return <div className="p-4 text-slate-500 font-medium text-center mt-10">Loading customer data...</div>

    return (
        <div className="p-8 bg-white rounded-xl shadow-xl shadow-slate-200/60 max-w-md mx-auto mt-10 border border-slate-200">
            <div className="flex flex-col items-center text-center">
                <img
                    src={customer.image}
                    alt={`${customer.firstName} ${customer.lastName}`}
                    className="rounded-full mb-5 w-32 h-32 object-cover border-4 border-slate-50 shadow-md bg-slate-100"
                />
                
                <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
                    {customer.firstName} {customer.lastName}
                </h2>
                
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    @{customer.username}
                </span>

                <div className="w-full text-left bg-slate-50 p-4 rounded-lg border border-slate-100 mt-2">
                    <div className="mb-2">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email</p>
                        <p className="text-slate-700 font-medium">{customer.email}</p>
                    </div>
                    <div className="mb-2">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-slate-700 font-medium font-mono">{customer.phone}</p>
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Blood Group</p>
                        <p className="text-slate-700 font-medium">{customer.bloodGroup}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}