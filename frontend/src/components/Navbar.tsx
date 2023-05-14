// Navbar.tsx
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Additional logic for logout or redirect
    alert("You are logged out successfully!!!");
    navigate("/login");
  };

  return (
    <div className="bg-[#1b2c3b] p-4 ">
      <div className="max-w-[1240px] py-[16px]  flex items-center justify-between ">
        <div className="text-3xl font-bold bg-green-500">nutrifit_ninjas</div>
        {toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white md:hidden block text-2xl"
          />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white md:hidden block text-2xl"
          />
        )}
        <ul className="hidden md:flex text-white gap-10">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/exercise">
            <li>Exercise</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signup">
            <li>Signup</li>
          </Link>
          {token ? (
            <li
              className="hover:text-red-500 hover:bg-gray-200"
              onClick={handleLogout}
            >
              Logout
            </li>
          ) : (
            ""
          )}
        </ul>
        {/* responsive menu*/}
        <ul
          className={`duration-300 md:hidden w-full h-screen  text-white fixed bg-black  top-[92px] ${
            toggle ? `left-[-100%]` : `left-[0%]`
          }`}
        >
          <Link to="/">
            <li className="p-5">Home</li>
          </Link>
          <Link to="/dashboard">
            <li className="p-5">Dashboard</li>
          </Link>
          <Link to="/exercise">
            <li className="p-5">Exercise</li>
          </Link>
          <Link to="/diet">
            <li className="p-5">Diet</li>
          </Link>
          <Link to="/diet">
            <li className="p-5 ">Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
