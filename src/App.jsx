
import { Link, Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import NotFound404 from "./pages/NotFound404";
import Error401 from "./pages/Error401";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Fogot";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="*" element={<NotFound404 />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/Error401" element={<Error401 />} />
        <Route path="/Error400" element={<Error400 />} />
        <Route path="/Error403" element={<Error403 />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
  );
}

export default App;
