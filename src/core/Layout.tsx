import { Route, Routes, useRoutes } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import ProductList from "../pages/Admin/ProductList";
import ActionProduct from "../pages/Admin/ActionProduct";
import path from "node:path/win32";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import UserLayout from "../Layouts/UserLayout/UserLayout";
import Home from "../pages/User/Home";

const Layout = () => {
  // return (
  //   <Routes>
  //     <Route path="/" element={<AdminLayout />}>
  //       <Route index element={<ProductList />} />
  //       <Route path="/add_product" element={<ActionProduct />} />
  //       <Route path="/update_product/:id" element={<ActionProduct />} />
  //     </Route>
  //   </Routes>
  // );

  const router = [
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: <ProductList /> },
        { path: "add_product", element: <ActionProduct /> },
        { path: "update_product/:id", element: <ActionProduct /> },
      ],
    },
    {
      path: "/",
      element: <UserLayout />,
      children: [{ path: "home", element: <Home /> }],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
  return useRoutes(router);
};

export default Layout;
