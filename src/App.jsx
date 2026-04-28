import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import { Suspense } from "react";
import Loading from "./components/Loading";
// import Dashboard from "./pages/Dashboard";
// import Customers from "./pages/Customers";
// import Orders from "./pages/Orders";
// import NotFound404 from "./pages/NotFound404";
// import Error401 from "./pages/Error401";
// import Error400 from "./pages/Error400";
// import Error403 from "./pages/Error403";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";

function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const Customers = React.lazy(() => import("./pages/Customers"));
  const Orders = React.lazy(() => import("./pages/Orders"));
  const NotFound404 = React.lazy(() => import("./pages/NotFound404"));
  const Error400 = React.lazy(() => import("./pages/Error400"));
  const Error401 = React.lazy(() => import("./pages/Error401"));
  const Error403 = React.lazy(() => import("./pages/Error403"));
  const Login = React.lazy(() => import("./pages/auth/Login"));
  const Register = React.lazy(() => import("./pages/auth/Register"));
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
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
    </Suspense>
  );
}

export default App;
