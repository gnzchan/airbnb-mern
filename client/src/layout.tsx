import { Outlet } from "react-router-dom";

import { Header } from "./components/header";

export const Layout = () => {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
