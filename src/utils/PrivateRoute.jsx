import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = () => {
  const { token } = useContext(AuthContext);
  useEffect(() => {
    if (!token) {
      toast.error("you have to login first", {
        id: "zzz",
      });
    }
  }, []);
  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
