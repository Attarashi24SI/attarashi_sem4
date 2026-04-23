import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import "./assets/tailwind.css";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import NotFound404 from "./pages/NotFound404";
import Error401 from "./pages/Error401";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";



function App() {
  return (
    <div className="flex-1 p-4">

      <Routes>
        <Route path="*" element={<NotFound404 />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/Error401" element={<Error401 />} />
        <Route path="/Error400" element={<Error400 />} />
        <Route path="/Error403" element={<Error403 />} />
      </Routes>

    </div>
  );
}

export default App;
