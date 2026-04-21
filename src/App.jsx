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
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex-1 p-4">
      <Routes>
        <Route path="*" element={<NotFound404 />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
