import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "../userSlice";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Access user from Redux store
  const user = useSelector((state) => state.user.user);

  // ✅ Keep user logged in (localStorage persistence)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(login(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  // ✅ Logout handler
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/"); // Redirect to home
  };

  return (
    <>
      <header className="shadow fixed top-0 left-0 w-full z-50 bg-white">
        <nav className="flex justify-between items-center px-4 md:px-10 lg:px-16 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Foodpanda Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://content.kaspersky-labs.com/fm/site-editor/46/464b4eeefc3330f46bb67a2b7e6e34d0/processed/foodpandaicon-q93.png"
                alt="Foodpanda Logo"
                className="h-8"
              />
              <h1 className="text-xl font-poppins font-semibold ml-2 text-pink-600">
                foodpanda
              </h1>
            </Link>
          </div>

          {/* Address */}
          <div className="hidden md:flex items-center font-semibold hover:bg-gray-100 text-gray-800 rounded-md px-4 py-2">
            📍 New PTCL Telephone Exchange Service Road W Islamabad
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-pink-600 border-black font-medium text-sm px-4 py-2"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-pink-600 hover:bg-pink-700 font-medium rounded-lg text-sm px-4 py-2 transition"
                >
                  Sign up for Free Delivery
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="text-white bg-pink-600 hover:bg-pink-700 font-medium rounded-lg text-sm px-4 py-2 transition"
              >
                Logout
              </button>
            )}

            <Link
              to="#"
              className="text-black bg-gray-100 hover:bg-gray-200 font-medium rounded-md text-sm px-7 py-2 transition"
            >
              EN
            </Link>
            <Link to="/" className="flex items-left">
              <img
                src="https://avatars.mds.yandex.net/i?id=2411b1b52ebf994126a2d696da563ef21abc1cc5-8895799-images-thumbs&ref=rim&n=33&w=250&h=250"
                alt="User Avatar"
                className="h-8 rounded-full"
              />
            </Link>
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="hidden lg:flex justify-start bg-white py-4 px-14">
          <ul className="flex space-x-12 font-poppins font-semibold text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-black ${
                    isActive ? "text-black underline underline-offset-4" : ""
                  }`
                }
              >
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pickup"
                className={({ isActive }) =>
                  `hover:text-black ${
                    isActive ? "text-black underline underline-offset-4" : ""
                  }`
                }
              >
                Pickup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shops"
                className={({ isActive }) =>
                  `hover:text-black ${
                    isActive ? "text-black underline underline-offset-4" : ""
                  }`
                }
              >
                Pandamart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-black ${
                    isActive ? "text-black underline underline-offset-4" : ""
                  }`
                }
              >
                Shops
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-black ${
                    isActive ? "text-black underline underline-offset-4" : ""
                  }`
                }
              >
                Caterers
              </NavLink>
            </li>
          </ul>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-pink-600">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 text-2xl"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col space-y-4 mt-6 px-6 text-gray-800">
          <li>
            <NavLink
              to="/"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shops"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Shops
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              PandaMart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <hr className="my-6 border-t-2 border-pink-200 mx-6" />

        {/* ✅ Sidebar Logout or Login */}
        <div className="px-6">
          {!user ? (
            <Link
              to="/signup"
              className="block text-center bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition-all"
              onClick={() => setSidebarOpen(false)}
            >
              Sign up for Free Delivery
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setSidebarOpen(false);
              }}
              className="block w-full text-center bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition-all"
            >
              Logout
            </button>
          )}
        </div>
        
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </>
  );
}
