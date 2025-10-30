import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Login from "./auth/Login.js";
import Dashboard from "./Dashboard/Dashboard.js";
import Signup from "./auth/Signup.js";
import Profile from "./Profile/profile.js";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-serif mt-6">MERN Authentication System</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
