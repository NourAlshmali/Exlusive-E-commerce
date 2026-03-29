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
    <div className="w-full h-14 bg-black flex justify-between items-center pr-20 pl-130 gap-40 ">
      <div className="flex gap-3">
        <p className="text-white text-[20px]">
          summer sale for all swim suits and free express delivery-off 50%!
        </p>
        <a href="#" className="text-white text-[20px] underline">
          shop now
        </a>
      </div>

      <div className="relative ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2  text-white"
        >
          <FaGlobe className="cursor-pointer" />
          <span>{selectedLang.label}</span>
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
