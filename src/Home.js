import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-100 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to MERN Auth System
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A secure and modern authentication system built with MongoDB,
            Express, React, and Node.js.
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-transparent border border-blue-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-400 hover:text-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose Our Auth System?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                Protects your data using industry-standard hashing and JWT
                authentication.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Fast Performance
              </h3>
              <p className="text-gray-600">
                Built on Node.js and React for quick responses and smooth user
                experience.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Easily connect with your existing projects using clean API
                endpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">
          Join us today and explore a secure and modern authentication
          experience.
        </p>
        <Link
          to="/signup"
          className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default Home;
