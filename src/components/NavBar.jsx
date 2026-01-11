import React, { useState } from "react";
import TopNav from "./TopNav";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import {
  FaUserCircle,
  FaBoxOpen,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [account, setAccount] = useState(false);

  const NavTabs = [
    { id: 1, tab: "Home" },
    { id: 2, tab: "Contact" },
    { id: 3, tab: "About" },
    { id: 4, tab: "Sign Up" },
  ];

  const NavIcons = [
    { id: 1, tab: <CiSearch />, type: "search" },
    { id: 2, tab: <CiHeart />, type: "heart" },
    { id: 3, tab: <CiShoppingCart />, type: "cart" },
    { id: 4, tab: <IoPersonOutline />, type: "account" },
  ];

  const accountDropDown = [
    { id: 1, label: "Manage My Account", icon: <FaUserCircle size={16} /> },
    { id: 2, label: "My Orders", icon: <FaBoxOpen size={16} /> },
    { id: 3, label: "My Cancellations", icon: <FaTimesCircle size={16} /> },
    { id: 4, label: "My Reviews", icon: <FaStar size={16} /> },
    { id: 5, label: "Logout", icon: <FaSignOutAlt size={16} /> },
  ];

  const handleIconClick = (icon) => {
    if (icon.type === "search") {
      setShowSearch((prev) => !prev);
      setAccount(false);
    }

    if (icon.type === "account") {
      setAccount((prev) => !prev);
      setShowSearch(false);
    }
  };

  return (
    <div className="w-full">
      <TopNav />

      <nav className="bg-transparent flex justify-around items-center h-20 relative">
        <h1 className="text-black font-extrabold text-[35px]">Exclusive</h1>

        <ul className="flex gap-8">
          {NavTabs.map((tab) => (
            <li
              key={tab.id}
              className="text-black text-[20px] cursor-pointer hover:text-red-500"
            >
              {tab.tab}
            </li>
          ))}
        </ul>

        <ul className="flex gap-10 items-center">
          {NavIcons.map((icon) => (
            <li
              key={icon.id}
              onClick={() => handleIconClick(icon)}
              className={`relative text-[30px] cursor-pointer ${
                icon.type === "heart"
                  ? "hover:text-red-500"
                  : "hover:text-blue-500"
              }`}
            >
              {icon.type === "search" && showSearch ? (
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                  className="w-40 px-2 py-1 text-[16px] rounded-md border border-black outline-none"
                />
              ) : (
                icon.tab
              )}

              {icon.type === "account" && account && (
                <ul className="absolute right-0 mt-3 w-52 bg-black rounded-md shadow-lg z-50">
                  {accountDropDown.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 px-4 py-3 text-white cursor-pointer hover:bg-gray-700"
                    >
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-full h-0.5 bg-gray-300" />
    </div>
  );
};

export default NavBar;
