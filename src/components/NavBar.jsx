import React, { useState } from "react";
import TopNav from "./TopNav";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const NavTabs = [
    { id: 1, tab: "Home" },
    { id: 2, tab: "contact" },
    { id: 3, tab: "About" },
    { id: 4, tab: "signUp" },
  ];
  const NavIcones = [
    { id: 1, tab: <CiSearch />, type: "search" },
    { id: 2, tab: <CiHeart />, type: "heart" },
    { id: 3, tab: <CiShoppingCart />, type: "cart" },
  ];

  const handleSearch = (tab) => {
    if (tab.type === "search") {
      setShowSearch((prev) => !prev);
    }
  };

  return (
    <div className="w-full">
      <TopNav />
      <nav className="bg-transparent flex justify-around items-center h-20">
        <div>
          <h1 className="text-black font-extrabold text-[35px]">Exlusive</h1>
        </div>
        <ul className=" flex gap-8">
          {NavTabs.map((tab) => (
            <li key={tab.id} className="text-black text-[20px] cursor-pointer">
              <span>{tab.tab}</span>
            </li>
          ))}
        </ul>

        <ul className=" flex gap-10">
          {NavIcones.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleSearch(tab)}
              className="text-black text-[30px] cursor-pointer"
            >
              {tab.type === "search" && showSearch ? (
                <input
                  type="text"
                  placeholder="Search..."
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                  className="w-40 px-2 py-1 text-[16px] rounded-md border border-black outline-none"
                />
              ) : (
                <span>{tab.tab}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full h-0.5 bg-gray-300 "></div>
    </div>
  );
};

export default NavBar;
