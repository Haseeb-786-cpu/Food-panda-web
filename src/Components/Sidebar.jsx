import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  // Track which categories are selected
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category) // remove if already selected
        : [...prev, category] // add if not selected
    );
  };

  const categories = ["Burgers", "Pizza", "Asian"];

  return (
    <aside className="fixed top-[100px] mt-6 left-0 ml-0 h-[calc(100vh-120px)] w-60 bg-white rounded-2xl shadow-lg border border-gray-100 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 transition-all duration-300 hover:shadow-xl">
      {/* Logo */}
      <div className="sticky top-0 bg-white z-50 p-4 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <img
            src="https://images.deliveryhero.io/image/foodpanda/groceries-landing/pandamart.png"
            className="h-10"
            alt="pandamart logo"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2.5 rounded-lg font-medium transition-all ${
              isActive
                ? "bg-pink-100 text-pink-600"
                : "text-gray-800 hover:bg-pink-50 hover:text-pink-600"
            }`
          }
        >
          ◎ Delivery
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block px-4 py-2.5 rounded-lg font-medium transition-all ${
              isActive
                ? "bg-pink-100 text-pink-600"
                : "text-gray-800 hover:bg-pink-50 hover:text-pink-600"
            }`
          }
        >
          ◎ Panda-Mart
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block px-4 py-2.5 rounded-lg font-medium transition-all ${
              isActive
                ? "bg-pink-100 text-pink-600"
                : "text-gray-800 hover:bg-pink-50 hover:text-pink-600"
            }`
          }
        >
          ◎ Contact
        </NavLink>

        <hr className="border-t border-gray-200 my-4" />

        {/* Quick Filters */}
        <h2 className="text-sm font-semibold text-gray-700 px-2 mb-2 uppercase tracking-wide">
          Quick Filters
        </h2>

        <div className="flex flex-col space-y-2">
          <button className="w-40 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 rounded-full font-medium transition">
            Rating 4+
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2 rounded-full font-medium transition">
            Super Restaurants
          </button>
        </div>

        <hr className="border-t border-gray-200 my-5" />

        {/* Search Bar */}
        <div className="mt-3 relative">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
        </div>

        {/* Selectable Food Categories */}
        <div className="flex flex-col space-y-2 mb-10 mt-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`w-full flex items-center justify-between px-4 py-2 rounded-full font-medium text-sm transition ${
                selectedCategories.includes(category)
                  ? "bg-pink-100 text-pink-600 border border-pink-300"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
              {selectedCategories.includes(category) && (
                <span className="text-pink-500 font-bold">✔</span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
