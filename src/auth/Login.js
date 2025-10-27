// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/api/login", formData);

//       // Save JWT token to localStorage
//       localStorage.setItem("token", res.data.token);

//       alert("Login successful!");
//       navigate("/dashboard"); // redirect to dashboard
//       window.location.reload(); // refresh navbar
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md w-96"
//       >
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="w-full border p-2 mb-3"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="w-full border p-2 mb-3"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // ✅ Automatically switch between local and deployed API
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL ||
    "https://authentication-system-brown.vercel.app"; // Replace with your actual backend deployment URL

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Ensure correct API route
      const res = await axios.post(`${API_BASE_URL}/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      // ✅ Check if token exists before storing
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("✅ Login successful!");
        navigate("/dashboard"); // redirect after login
        window.location.reload(); // refresh navbar
      } else {
        alert("⚠️ No token received from server");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
