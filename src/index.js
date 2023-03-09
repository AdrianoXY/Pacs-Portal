import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Login from "./Pages/login/login.jsx";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Search from "./Pages/Search/Search.jsx";
import Manage from "./Pages/Manage/Manage.jsx";
import Payment from "./Pages/Payment/Payment.jsx";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
