import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistContextData } from "../WishlistContext";
import { CartContextData } from "../CartContext";

import TopNav from "./TopNav";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiMenuBurger,
} from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import AccountDropdown from "./AccountDropDown";
import {
  FaUserCircle,
  FaBoxOpen,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Wishlist from "../../pages/WishList";
import Cart from "../../pages/Cart";

const NavBar = () => {
  const navigate = useNavigate();
  const { wishlist } = useContext(WishlistContextData);
  const { cart } = useContext(CartContextData);

  const [showSearch, setShowSearch] = useState(false);
  const [account, setAccount] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavTabs = [
    { id: 1, tab: "Home", path: "/" },
    { id: 2, tab: "Contact", path: "/Contact" },
    { id: 3, tab: "About", path: "/About" },
    { id: 4, tab: "Sign Up", path: "/signup" },
  ];

  const NavIcons = [
    { id: 1, tab: <CiSearch />, type: "search" },
    { id: 2, tab: <CiHeart />, type: "heart", path: "/wishlist" },
    { id: 3, tab: <CiShoppingCart />, type: "cart", path: "/cart" },
    { id: 4, tab: <IoPersonOutline />, type: "account" },
  ];
  const accountDropDown = [
    {
      id: 1,
      label: "Manage My Account",
      icon: <FaUserCircle size={16} />,
      path: "/account",
    },
    { id: 2, label: "My Orders", icon: <FaBoxOpen size={16} /> },
    { id: 3, label: "My Cancellations", icon: <FaTimesCircle size={16} /> },
    { id: 4, label: "My Reviews", icon: <FaStar size={16} /> },
    {
      id: 5,
      label: "Logout",
      icon: <FaSignOutAlt size={16} />,
      path: "/login",
    },
  ];

  const handleIconClick = (icon) => {
    if (icon.path) {
      navigate(icon.path);
      setMobileMenuOpen(false);
      return;
    }

    if (icon.type === "search") {
      setShowSearch((prev) => !prev);
      setAccount(false);
      return;
    }

    if (icon.type === "account") {
      setAccount((prev) => !prev);
      setShowSearch(false);
      return;
    }
  };

  return (
    <div className="w-full">
      <TopNav />

      <nav className="bg-transparent flex justify-between md:justify-around items-center h-20 relative px-4 md:px-0">
        <h1 className="text-black font-extrabold text-2xl md:text-[35px]">
          Exclusive
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {NavTabs.map((tab) => (
            <li
              onClick={() => handleIconClick(tab)}
              key={tab.id}
              className="text-black text-lg md:text-[20px] cursor-pointer hover:text-red-500"
            >
              {tab.tab}
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <ul className="hidden md:flex gap-10 items-center">
          {NavIcons.map((icon) => (
            <li
              key={icon.id}
              onClick={() => handleIconClick(icon)}
              className={`relative text-2xl md:text-[30px] cursor-pointer ${
                icon.type === "heart"
                  ? "hover:text-red-500"
                  : "hover:text-blue-500"
              }
            
              
              `}
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

              {icon.type === "heart" && wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}

              {icon.type === "cart" && cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}

              {icon.type === "account" && account && (
                <AccountDropdown items={accountDropDown} />
              )}
              {icon.label == ""}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <CiMenuBurger />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 md:hidden">
            <ul className="flex flex-col gap-4 p-6">
              {NavTabs.map((tab) => (
                <li
                  onClick={() => handleIconClick(tab)}
                  key={tab.id}
                  className="text-black text-lg cursor-pointer hover:text-red-500 border-b pb-2"
                >
                  {tab.tab}
                </li>
              ))}
            </ul>
            <ul className="flex gap-6 p-6 border-t">
              {NavIcons.map((icon) => (
                <li
                  key={icon.id}
                  onClick={() => handleIconClick(icon)}
                  className={`relative text-2xl cursor-pointer ${
                    icon.type === "heart"
                      ? "hover:text-red-500"
                      : "hover:text-blue-500"
                  }`}
                >
                  {icon.tab}
                  {icon.type === "heart" && wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                  {icon.type === "cart" && cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                      {cart.length}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="w-full h-0.5 bg-gray-300" />
    </div>
  );
};

export default NavBar;
