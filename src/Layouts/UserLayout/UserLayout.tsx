import HeaderUser from "./HeaderUser";
import FooterUser from "./FooterUser";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <HeaderUser />

      <Outlet />
      <FooterUser />
    </>
  );
};

export default UserLayout;
