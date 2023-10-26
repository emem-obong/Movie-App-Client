import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Search from "../components/Search/Search";
import useAuth from "../hooks/UseAuth";

const RootLayout = () => {
  const { handleGetUser } = useAuth();

  useEffect(() => {
    handleGetUser();
  }, []);
  return (
    <div className="py-md-4 d-xl-flex">
      <Sidebar />
      <div className="w-100">
        <Search />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
