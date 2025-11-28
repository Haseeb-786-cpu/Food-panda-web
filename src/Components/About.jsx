import React, { useState } from "react";

export default function About() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Nestle Milk Pack 1L",
      price: "Rs ...",
      img: "https://img.freepik.com/free-photo/milk-glass-bottle-background-farm_1142-40886.jpg?semt=ais_hybrid",
      category: "Dairy",
    },
    {
      id: 2,
      name: "Coca-Cola 1.5L",
      price: "Rs ...",
      img: "https://i.ytimg.com/vi/me0pH52ZjoE/maxresdefault.jpg",
      category: "Beverages",
    },
    {
      id: 3,
      name: "Dawn Bread Family Pack",
      price: "Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=7a51ec7474eabcffb7607d7a81a4ffd65e7fa325-10876270-images-thumbs&n=13",
      category: "Bakery",
    },
    {
      id: 4,
      name: "Lay’s French Cheese",
      price: "Rs ...",
      img: "https://content2.flowwow-images.com/data/flowers/524x524/01/1653339628_66253801.jpg",
      category: "Snacks",
    },
    {
      id: 5,
      name: "Olpers Cream 200ml",
      price: "Rs ...",
      img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/agrolife/shutterstock_2483159649.jpg",
      category: "Dairy",
    },
    {
      id: 6,
      name: "Tapal Danedar Tea 500g",
      price: "Rs ...",
      img: "https://avatars.mds.yandex.net/get-altay/2425845/2a0000017261f79c41b7e5f14213af5a09ee/XXL_height",
      category: "Beverages",
    },
    {
      id: 7,
      name: "Slice Mango Drink",
      price: "Rs ...",
      img: "https://t4.ftcdn.net/jpg/02/79/69/21/360_F_279692163_4O1mMxIe4KdK3GZYl8gDY02zBFn65Gj0.jpg",
      category: "Beverages",
    },
    {
      id: 8,
      name: "Pringles Original",
      price: "Rs ...",
      img: "https://live.staticflickr.com/7033/6791154413_b56b5801b0_b.jpg",
      category: "Snacks",
    },
  ];

  const categories = ["All", "Beverages", "Snacks", "Dairy", "Bakery"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen  mt-24 w-100 ml-48 text-gray-800">

      

    

      {/* Search  */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/2 border border-gray-300 rounded-full px-5 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  category === cat
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-pink-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/*  Products */}
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          {category === "All" ? "Popular Items" : `${category} Products`}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-2xl shadow-sm hover:shadow-lg transition bg-white"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-pink-600 font-bold">{product.price}</p>
                  <button className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-10">No products found.</p>
        )}
      </section>

      {/* Choose */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Why Choose pandamart?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Delivery",
                desc: "Groceries delivered in under 25 minutes right to your doorstep.",
            
              },
              {
                title: "Always Fresh",
                desc: "We handpick the freshest products to ensure top quality.",
                icon: "",
              },
              {
                title: "Best Discounts",
                desc: "Save big with exclusive offers and weekly deals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-pink-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Order Now from pandamart</h2>
        <p className="text-lg mb-6">Fast delivery. Fresh products. Great prices.</p>
        <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>
    </div>
  );
}
