import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";


function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/Signup";

  return (
    <div className="relative min-h-screen">
      {/* Layout content: blur if on login page */}
      <div className={isLoginPage ? "filter blur-sm pointer-events-none" : ""}>
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>

      {/* Login form above everything if on login page */}
      {isLoginPage && <Login />}
      {isSignUpPage && <SignUp />}
    </div>
  );
}

export default Layout;
