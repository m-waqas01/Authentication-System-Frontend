import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("token"); // token saved after login
    setIsAuthenticated(!!token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">MERN Auth</Link>
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-gray-300">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
