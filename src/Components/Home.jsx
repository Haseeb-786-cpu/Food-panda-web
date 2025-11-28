import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Nestle Milk Pack 1L",
      price: "Pakistani in store price Rs ...",
      img: "https://img.freepik.com/free-photo/milk-glass-bottle-background-farm_1142-40886.jpg?semt=ais_hybrid",
      category: "Dairy",
    },

    {
      id: 2,
      name: "Coca-Cola 1.5L",
      price: "Pakistani in store price Rs ...",
      img: "https://i.ytimg.com/vi/me0pH52ZjoE/maxresdefault.jpg",
      category: "Beverages",
    },
    {
      id: 3,
      name: "Bread Family Pack",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=7a51ec7474eabcffb7607d7a81a4ffd65e7fa325-10876270-images-thumbs&n=13",
      category: "Bakery",
    },
    {
      id: 4,
      name: "Lay’s French Cheese",
      price: "Pakistani in store price Rs ...",
      img: "https://content2.flowwow-images.com/data/flowers/524x524/01/1653339628_66253801.jpg",
      category: "Snacks",
    },
    {
      id: 5,
      name: "Olpers Cream 200ml",
      price: "Pakistani in store price Rs ...",
      img: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/agrolife/shutterstock_2483159649.jpg",
      category: "Dairy",
    },
    {
      id: 6,
      name: "Drinks",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/get-altay/2425845/2a0000017261f79c41b7e5f14213af5a09ee/XXL_height",
      category: "Beverages",
    },
    {
      id: 7,
      name: "Slice Mango Drink",
      price: "Pakistani in store price Rs ...",
      img: "https://t4.ftcdn.net/jpg/02/79/69/21/360_F_279692163_4O1mMxIe4KdK3GZYl8gDY02zBFn65Gj0.jpg",
      category: "Beverages",
    },
    {
      id: 8,
      name: "Pringles Original",
      price: "Pakistani in store price Rs ...",
      img: "https://live.staticflickr.com/7033/6791154413_b56b5801b0_b.jpg",
      category: "Snacks",
    },



    {
      id: 9,
      name: "Fast Food Items",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=1df26002fcbcf6f56e9d09084e6f8c9d63e8adda-7752980-images-thumbs&n=13",
      rating: 4,
    },
    {
      id: 10,
      name: "Fast Food Items",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=2b2b15dc4fc799547d2800019e26f59f4d40a667-3513278-images-thumbs&n=13",
      rating: 5,
    },
    {
      id: 11,
      name: "Fast Food Items",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=a4a6718f444f143ee4be5fc9c01d748f91d8a711-4286590-images-thumbs&n=13",
      rating: 5,
    },
    {
      id: 12,
      name: "Fast Food Items",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=9c83d41b4d488a54d2e928c2c21c9c081c104b71-5327407-images-thumbs&n=13",
      rating: 4,
    },
    {
      id: 13,
      name: "Fast Food Items",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=7000ab1a31affa4455f54d0d9195d801e4347293-7213677-images-thumbs&n=13",
      rating: 5,
    },
    {
      id: 14,
      name: "Fast Food Items",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=175feeedd9d7f83c78b6026e7220a6068695a22d-5213696-images-thumbs&n=13",
      rating: 4,
    },
    {
      id: 15,
      name: "Fast Food Items",
      price: "Pakistani in store price Rs ...",
      img: "https://avatars.mds.yandex.net/i?id=912f6d0fc68967cc27e843df80a0b77bf66e578a-16459917-images-thumbs&n=13",
      rating: 5,
    },


  ];


  const categories = ["All", "Beverages", "Snacks", "Dairy", "Bakery"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen  mt-27 w-100 ml-52 text-gray-800">

      <section className="relative">
        <div className="absolute inset-0 bg-black  mt-3 bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
          <p className="text-lg font-medium"></p>
        </div>
      </section>


      {/* Search  */}
      <section className="max-w-full mt-16 px-4 py-7 mx-auto ">
        <div className="flex flex-col ml-12 font-color-gray-900 md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search for restaurants, Cuisines and Dishes"
            className="w-full  border  font-poppins bg-gray-100   rounded-full px-5 py-4 focus:ring-2 hover:ring-pink-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />




        </div>



        <section className="relative bg-pink-100 rounded-2xl w-100 overflow-hidden mt-5 flex flex-col md:flex-row items-center justify-between ml-8 px-8 md:px-10 ">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 z-10 text-left">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Sign up for free delivery on your first order
            </h2>
            <Link
              to="/Signup"
              className="bg-pink-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-pink-700 transition"
            >
              Sign up
            </Link>

          </div>

          {/* Panda Background Image */}
          <div className="absolute inset-0 md:static md:w-1/2 flex justify-end items-center">
            <img
              src="https://www.foodpanda.com/wp-content/uploads/2023/10/Pau-Pau-image-2-1-1-1-1-1.png"
              alt="panda"
              className="absolute right-0 bottom-0 w-[380px] md:w-[520px] object-contain md:relative"
            />
          </div>

          {/* Optional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-pink-100 to-transparent opacity-10 pointer-events-none"></div>
        </section>






        <section className="bg-white rounded-lg mt-3 py-16">
          <div className="max-w-6xl  mx-auto px-9 text-left">
            <h2 className="text-3xl  font-poppins font-bold text-black mb-6">Your Daily Deals</h2>
            <div className="grid md:grid-cols-3  gap-8">
              {/* <img src="https://www.foodpanda.pk/campaigns?url_key=Tier+1+Campaign+food&lat=33.700392219225385&lng=73.0367097185436" alt="" /> */}

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
                // {
                //   title: "Best Discounts",
                //   desc: "Save big with exclusive offers and weekly deals.",
                // },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-pink-200 rounded-2xl p-8 shadow hover:shadow-xl transition"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>







        <div className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-3xl text-left font-poppins font-bold text-pink-600 mb-6">
            Cuisines for you
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">{[
            {
              name: "Burgers",
              image: "https://avatars.mds.yandex.net/i?id=7000ab1a31affa4455f54d0d9195d801e4347293-7213677-images-thumbs&n=13",
            }, {
              name: "Drinks",
              image: "https://img.freepik.com/free-photo/milk-glass-bottle-background-farm_1142-40886.jpg?semt=ais_hybrid",
            }, {
              name: "Pizza",
              image: "https://i.ytimg.com/vi/me0pH52ZjoE/maxresdefault.jpg",
            }, {
              name: "Flowers",
              image: "https://content2.flowwow-images.com/data/flowers/524x524/01/1653339628_66253801.jpg",
            }, {
              name: "Organic",
              image: "https://s56442.cdn.ngenix.net/img/0/0/resize/rshb/agrolife/shutterstock_2483159649.jpg",
            }, {
              name: "Groceries",
              image: "https://avatars.mds.yandex.net/get-altay/2425845/2a0000017261f79c41b7e5f14213af5a09ee/XXL_height",
            }, {
              name: "Desserts",
              image: "https://live.staticflickr.com/7033/6791154413_b56b5801b0_b.jpg",
            },
          ].map((cuisine, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-24 md:h-28 lg:h-32 overflow-hidden rounded-xl shadow hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                <img src={cuisine.image} alt={cuisine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-gray-800 font-semibold text-sm md:text-base">
                {cuisine.name}
              </p> </div>
          ))}
          </div>
        </div>








        {/*  Products */}
        <h2 className="text-xl mt-5 ml-4 text-gray-500 invisible mb-7 text-left">
          {category === "All" ? "Popular Items" : `${category} Products`}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                <div className="p-2">
                  <h3 className="text-md font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-black ">{product.price}</p>
                  <button className="mt-2 w-40 bg-pink-600 hover:bg-pink-700 text-white py-1 rounded-lg font-medium transition">
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




      {/* <section className="bg-white rounded-lg mt-3 py-16">
        <div className="max-w-6xl mx-auto px-9 text-left">
          <h2 className="text-3xl font-poppins font-bold text-black mb-6">Your Daily Deals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <img src="https://www.foodpanda.pk/campaigns?url_key=Tier+1+Campaign+food&lat=33.700392219225385&lng=73.0367097185436" alt="" />

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
      </section> */}









      {/* Choose
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
      </section> */}




      <section className="mt-6 bg-gradient-to-r w-100 from-pink-200 to-pink-300 rounded-2xl text-black flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 shadow-lg overflow-hidden">
        {/* Left image */}
        <div className="w-100 mr-4 md:w-1/2 flex justify-center mb-2 md:mb-0">
          <img
            src="https://avatars.mds.yandex.net/i?id=4c0b81d6e5bfa4c88227d1ec8dbfe43cab49155e-5869826-images-thumbs&n=13"
            alt="Order food illustration"
            className="w-60 border-black md:w-[280px] rounded-xl"
          />
        </div>

        {/* Right text & buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Unlock exclusive deals and more in our mobile app
          </h2>
          <p className="text-black/90 mb-6 text-lg">
            Meal for one, fast checkout, food & grocery deals: get it all on foodpanda app
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-white text-black font-semibold border border-black px-5 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
                alt="App Store"
                className="h-5"
              />
              App Store
            </button>
            <button className="bg-white text-black font-semibold border border-black px-5 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-5"
              />
              Play Store
            </button>
          </div>
        </div>
      </section>





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
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${category === cat
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
        <h2 className="text-2xl font-bold text-black mb-4 text-center">
          {category === "5" ? "Popular Items" : `${category} Products`}
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
                  <p className="text-black">{product.price}</p>
                  <button className="mt-2 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition">
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





      {/* Footer
      <section className="bg-pink-600 ml-4 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Order Now from pandamart</h2>
        <p className="text-lg mb-6">Fast delivery. Fresh products. Great prices.</p>
        <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section> */}

      <div className="mt-10 ml-10 text-left" >
        <h1 className="text-4xl font-semibold mb-6">Food delivery in Islamabad has never been easier</h1>
        <p>Pakistan's capital and a pulsating, energetic and cosmopolitan city, Islamabad enjoys a multicultural and diverse food scene. Thanks to its rapid urbanisation, you can find numerous international chains as well as incredibly popular local and traditional establishments, offering nearly unlimited cuisine options when it comes to dining out. What's even more exciting, food delivery in Islamabad is now made super-easy and convenient. Reason? foodpanda serves across the length and breadth of this largest city of Pakistan, enabling easy delivery from restaurants in Islamabad.

        </p>
      </div>


      <div className="mt-10 ml-10 text-left" >
        <h1 className="text-4xl font-semibold mb-6">Islamabad food delivery is just what modern fast-paced lifestyles need</h1>
        <p>Aside from health reasons, savouring great food could be a wonderful stress-buster! Especially in a thriving metropolis like Islamabad, you would be leading a very busy lifestyle where food always takes a backseat. Late to the office? No time to prepare food for lunch? Lazy to get up on a Sunday morning? Well, these are just a few of the everyday scenarios where you are most likely going to skip your meals. With food delivery in Islamabad, you never have to forgo your food. With our online portal and mobile app, you can quickly choose from hundreds and hundreds of restaurants, cafes, and takeaways in your city and get satisfying, healthy and delicious food right at your doorstep!

        </p>
      </div>


      <div className="mt-10 ml-10 text-left" >
        <h1 className="text-3xl font-semibold mb-6">What to order from Islamabad restaurants for delivery</h1>
        <p>Perhaps, you are a die-hard fan of local delicacies prepared in a traditional way. Angeethi, Andaaz, Al-Nakheel Lebanese Cuisine, and Islamabad Grill are a few of the excellent places you can consider for authentic Pakistani food prepared just like at home. If lucky, you can even snap up our fantastic food deals in Islamabad to save some decent money while indulging to your heart's content. Maybe, you are gathering together with your friends to watch that most awaited cricket match of the year. Why not order some wonderful food, desserts and drinks to spice up the moment? Fish Fingers, Chicken Strips, and Chili Fries from Incantare Cafe & Grill, or Rajasthani Chicken Malai boti with drink and Masala Fish With Naan + Drink from Humpty Dumpty are some of the best-selling options worth a try using our prompt food delivery in Islamabad. From Subway sandwiches to Johnny Rockets burgers, from Sarang Sindhi Cuisine's Chicken Briyani to Big Bites' Chicken Combo, from Fruit Factory's smoothies to Chick Fillet pizzas, our impressive selection of restaurants come handy to suit every taste, mood, and occasion

        </p>
      </div>


      <div className="mt-10 ml-10 text-left" >
        <h1 className="text-3xl font-semibold mb-6">Famous restaurants for online food delivery in Islamabad</h1>
        <p>Looking for the best pizza places in Islamabad? Want to treat your friends to the finest sandwiches in the city? Or simply love to experiment with your food choices or need late night foode delivery in Islamabad? Well, take advantage of these most popular Islamabad food delivery options, favoured by thousands of discerning foodies and casual customers alike.

        </p>
      </div>


      <div className="mt-10 ml-10 text-left" >
        <h1 className="text-3xl font-semibold mb-6">Top Restaurants of Islamabad include…</h1>
        <br />
        <p>✓ 14th Street Pizza: One of the best places for pizzas In Islamabad
          <br />
          ✓ KFC : Classic and beloved fried chicken
          <br />
          ✓ The New Yorker Pizza – another favourite of the city’s pizza lovers
          <br />
          ✓ McDonald's – needs no introduction and offers something for everyone
          <br />
          ✓ Char Grill Centre(CGC): Comfort food that everyone adores!
          <br />

        </p>
      </div>


      <div className="mt-10 ml-10 text-left" >
        <h1 className="text-3xl font-semibold mb-6">Presenting “no-cook Ramzan” only by foodpanda</h1>
        <p>Feeling tired? Don’t want to go out in this scorching hot weather? Here comes the solution to your problem. Now order food in Islamabad from your favourite restaurants through foodpanda and make your Ramzan flavorful with bestest Sehri and Iftari deals with free delivery services. foodpanda fulfil your cravings by delivering food at your doorstep.

        </p>
      </div>


      <div className="mt-10 ml-10 text-left" >
        <h1 className="text-3xl font-semibold mb-6">foodpanda bringing your favourite food to your doorstep!</h1>
        <p>foodpanda provides you ease to order through online food delivery in Islamabad. Ordering food becomes easier because foodpanda provides you free delivery with minimum order of just Rs.200/-. Want to have delicious Sehri without going out? Just order through foodpanda anytime. Ramzan is all about food, fasting becomes delightful when scrumptious Iftari delivered within minutes.

        </p>
      </div>


      <div className="mt-10  mb-5 ml-10 text-left" >
        <h1 className="text-3xl font-semibold mb-6">Best Ramzan deals – for sehri and iftari available for delivery</h1>
        <p>foodpanda giving major discounted deals to the people of Islamabad on Sehri and Iftari. So Islamabadis, don’t waste your time and boost your cravings this Ramzan with foodpanda delivery services without any hassle.
          <br />
          <br />
          ✓ KFC
          <br />
          ✓ Mcdonalds
          <br />
          ✓ Chaaye Khana
          <br />
          ✓ ChikaChino
          <br />
          ✓ Tuscany Courtyard
          <br />
          ✓ Street 1 cafe

        </p>
      </div>





    </div>
  );
}

