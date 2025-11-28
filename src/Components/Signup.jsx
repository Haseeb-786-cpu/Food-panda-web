import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../userSlice"; // make sure you have signup action

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userData = { email, password, firstName, lastName, loggedIn: true };
      dispatch(signup(userData));
      navigate("/");
    } catch (err) {
      setError("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 relative z-50">

       <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 font-semibold"
        >
          &larr; Back
        </button> 
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://content.kaspersky-labs.com/fm/site-editor/46/464b4eeefc3330f46bb67a2b7e6e34d0/processed/foodpandaicon-q93.png"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Sign up for an account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-600 hover:text-pink-700 font-semibold"
          >
            Login
          </Link>
        </p>

        {/* Form */}
        <form className="space-y-2" onSubmit={handleSignUp}>
            <div>
            <label className="block text-sm ml-2 text-left font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-left ml-2 text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left ml-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-left ml-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-600 focus:outline-none"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded-lg transition duration-300 disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
