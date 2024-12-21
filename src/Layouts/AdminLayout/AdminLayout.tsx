import { Outlet } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import HeaderAdmin from "./HeaderAdmin";

const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </>
  );
};

export default AdminLayout;
