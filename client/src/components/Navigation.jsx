import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

//icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navigation = () => {
  const [nav, setNav] = useState(false);

  const { user } = useAuthContext();
  const { logout } = useLogout();
  const goLogout = () => {
    logout();
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full flex justify-between items-center h-24 mx-auto px-4 sticky absolute inset-0 z-10 top-0 bg-white shadow-lg">
      <a
        className="w-full text-3xl font-bold font-old font-semibold text-xl tracking-tight hover:text-slate-700"
        href="/"
        as={NavLink}
      >
        Dirty Soles
      </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="/" as={NavLink}>
            Home
          </a>
        </li>
        <li className="p-4">
          {" "}
          <a href="/products" as={NavLink}>
            Products
          </a>
        </li>
        <li className="p-4">
          {" "}
          <a href="/about-us" as={NavLink}>
            About
          </a>
        </li>
        {user && (
          <li className="p-4">
            <a href="/admin" as={NavLink}>
              Account
            </a>
          </li>
        )}
        {user && (
          <li className="p-4 border border-black hover:bg-black hover:text-white hover:rounded-lg duration-500">
            <button type="button" onClick={goLogout} className="">
              Logout
            </button>
          </li>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl text-white m-4 font-bold font-old font-semibold tracking-tight">
          Dirty Soles
        </h1>
        <li className="p-4 hover:text-black hover:bg-slate-100 border-b border-gray-600 duration-300">
          {" "}
          <a href="/" as={NavLink}>
            Home
          </a>
        </li>
        <li className="p-4 hover:text-black hover:bg-slate-100 border-b border-gray-600 duration-300">
          {" "}
          <a href="/products" as={NavLink}>
            Products
          </a>
        </li>
        <li className="p-4 hover:text-black hover:bg-slate-100 border-b border-gray-600 duration-300">
          <a href="/about-us" as={NavLink}>
            About
          </a>
        </li>
        {user && (
          <li className="p-4 hover:text-black hover:bg-slate-100 border-b border-gray-600 duration-300">
            <a href="/admin" as={NavLink}>
              Account
            </a>
          </li>
        )}
        {user && (
          <li className="p-4 hover:text-black hover:bg-slate-100 duration-300">
            <button type="button" onClick={goLogout} className="">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
