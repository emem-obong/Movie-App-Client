import React from "react";
import useAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Dropdown = () => {
  const { token, handleLogOutUser } = useAuth();

  return (
    <div className="position-absolute  mt-3 my-dropdown">
      {token ? (
        <div>
          <button
            onClick={() => {
              handleLogOutUser();
            }}
            className="btn btn-danger text-white"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-2">
          <Link to="/signin" className="btn btn-danger text-white">
            SignIn
          </Link>
          <Link to="/signup" className="btn btn-danger text-white">
            SignUp
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
