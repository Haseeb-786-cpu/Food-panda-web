import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // Here you’d normally call your backend API or Appwrite method
    alert(`Password reset link sent to ${email}`);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleReset}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm border"
      >
        <h2 className="text-2xl font-semibold text-center text-pink-600 mb-6">
          Reset Password
        </h2>

        <label className="block mb-2 text-gray-700 text-sm font-medium">
          Enter your email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          type="submit"
          className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-all"
        >
          Send Reset Link
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-4 w-full text-sm text-gray-500 hover:underline"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}
