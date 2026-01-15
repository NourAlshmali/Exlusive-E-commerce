import React from "react";
import { useNavigate } from "react-router-dom";


const AccountDropdown = ({ items }) => {
    const navigate = useNavigate();

 const handleIconClick = (tab) => {
   
    if (tab.path) {
      navigate(tab.path);
      return;
    }
  }

  return (
    <ul className="absolute right-0 mt-3 w-52 bg-black rounded-md shadow-lg z-50">
      {items.map((item) => (
        <li
         onClick={() => handleIconClick(item)}
          key={item.id}
          className="flex items-center gap-3 px-4 py-3 text-white cursor-pointer hover:bg-gray-700"
        >
          {item.icon}
          <span className="text-sm">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default AccountDropdown;
