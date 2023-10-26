import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdMovie} from "react-icons/md";

const AuthLayout = () => {
  return (
    <div>
        <Link to="/"><MdMovie className="fs-1 custom-text-red my-5"/></Link>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
