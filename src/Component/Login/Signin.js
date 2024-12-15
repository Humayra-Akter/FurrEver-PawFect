import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    account: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, 
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.account || !formData.username || !formData.password) {
      setErrorMessage("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("role", formData.account);
        navigate(`/${formData.account}Dashboard`);
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-200 mt-6 mb-3">
        <span className="text-gray-600">Hope </span>
        <span className="text-red-600">Horizon</span>
      </h1>
      <div className="flex justify-center items-center">
        <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="account"
              >
                Select Account
              </label>
              <select
                id="account"
                value={formData.account}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Choose your account</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="donor">Donor</option>
                <option value="volunteer">Volunteer</option>
                <option value="needy people">Needy People</option>
              </select>
            </div>
            {/* Username field */}
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {/* Password field */}
            <div className="mb-6">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="****"
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <div className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </div>
            </div>
            {/* Error message */}
            {errorMessage && (
              <div className="text-red-500 text-center mb-4">
                {errorMessage}
              </div>
            )}
            {/* Sign in button */}
            <input
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value=" Sign in"
            />

            {/* Sign Up link */}
            <div className="text-gray-400 text-center mt-4">
              Do not have an account yet?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-500 inline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
