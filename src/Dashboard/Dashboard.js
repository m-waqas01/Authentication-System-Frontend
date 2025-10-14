import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect if not logged in
      return;
    }

    // Fetch user data from backend
    axios
      .get("http://localhost:8000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.name} 👋</h2>
        <p className="mb-2">Email: {user.email}</p>
        <p className="mb-2">User ID: {user._id}</p>
      </div>
    </div>
  );
};

export default Dashboard;
