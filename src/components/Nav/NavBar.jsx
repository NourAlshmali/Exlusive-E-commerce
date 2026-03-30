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
import {
  FaTimes,
  FaUserCircle,
  FaBoxOpen,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";
import AccountDropdown from "./AccountDropDown";

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
      setAccount(false);
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
    <div className="w-full relative z-[100]">
      <TopNav />
      <nav className="bg-white flex justify-between md:justify-around items-center h-20 relative px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <h1
          className="text-black font-extrabold text-2xl md:text-[35px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Exclusive
        </h1>

        <ul className="hidden md:flex gap-8">
          {NavTabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className="text-black text-lg md:text-[20px] cursor-pointer hover:text-red-500 transition-colors"
            >
              {tab.tab}
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex gap-6 lg:gap-10 items-center">
          {NavIcons.map((icon) => (
            <li
              key={icon.id}
              onClick={() => handleIconClick(icon)}
              className="relative text-2xl md:text-[30px] cursor-pointer hover:text-red-500 transition-all"
            >
              {icon.type === "search" && showSearch ? (
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  onBlur={() => setTimeout(() => setShowSearch(false), 200)}
                  className="w-40 px-2 py-1 text-[16px] rounded-md border border-gray-300 outline-none"
                />
              ) : (
                icon.tab
              )}

              {icon.type === "heart" && wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] min-w-[20px] h-5 flex items-center justify-center rounded-full px-1">
                  {wishlist.length}
                </span>
              )}

              {icon.type === "cart" && cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] min-w-[20px] h-5 flex items-center justify-center rounded-full px-1">
                  {cart.length}
                </span>
              )}

              {icon.type === "account" && account && (
                <div className="absolute right-0 top-10 z-[110]">
                  <AccountDropdown items={accountDropDown} />
                </div>
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl cursor-pointer p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <CiMenuBurger />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-xl z-[100] md:hidden border-t">
            <ul className="flex flex-col gap-2 p-6">
              {NavTabs.map((tab) => (
                <li
                  onClick={() => {
                    navigate(tab.path);
                    setMobileMenuOpen(false);
                  }}
                  key={tab.id}
                  className="text-black text-lg py-3 border-b border-gray-100 last:border-none active:text-red-500"
                >
                  {tab.tab}
                </li>
              ))}
            </ul>
            <ul className="flex gap-8 p-6 bg-gray-50 items-center justify-center relative">
              {NavIcons.map((icon) => (
                <li
                  key={icon.id}
                  onClick={() => handleIconClick(icon)}
                  className="relative text-3xl cursor-pointer active:scale-90 transition-transform"
                >
                  {icon.tab}
                  {icon.type === "heart" && wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                  {icon.type === "cart" && cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                      {cart.length}
                    </span>
                  )}
                  {icon.type === "account" && account && (
                    <div className="absolute right-0 bottom-12 z-[120]">
                      <AccountDropdown items={accountDropDown} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      <div className="w-full h-[1px] bg-gray-200" />
    </div>
  );
};

export default NavBar;
