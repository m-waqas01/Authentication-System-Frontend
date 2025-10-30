import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/auth/me`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
    </div>
  );
};

export default Profile;
