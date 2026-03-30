import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const TopNav = () => {
  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const setLang = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="w-full h-11 bg-black flex justify-between items-center px-4 md:px-20 lg:px-30 gap-4 md:gap-10 lg:gap-40">
      <div className="flex gap-2 md:gap-3">
        <p className="text-white text-xs md:text-[16px]">
          summer sale for all swim suits and free express delivery-off 50%!
        </p>
        <a href="#" className="text-white text-xs md:text-[16px] underline">
          shop now
        </a>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-2 md:px-4 py-2 text-white"
        >
          <FaGlobe className="cursor-pointer" />
          <span className="hidden md:inline">{selectedLang.label}</span>
        </button>

        {isOpen && (
          <ul className="absolute right-0 mt-2 bg-black border rounded-md">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => setLang(lang)}
                className="px-4 py-2 text-white cursor-pointer hover:bg-gray-700"
              >
                {lang.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TopNav;
