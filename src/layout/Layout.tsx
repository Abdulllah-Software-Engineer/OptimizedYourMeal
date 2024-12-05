import { FC } from "react";
import { Outlet } from "react-router-dom";
import LayoutHeader from "./LayoutHeader";

const Layout: FC = () => {
  return (
    <div className="relative h-screen overflow-x-hidden scrollbar-thin">
      <LayoutHeader />
      <main className="scrollbar-thin min-h-[100vh] pb-10 bg-gradient-to-r from-[#fbeeee] via-[#d8c3d9] to-[#c8e1f2]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
