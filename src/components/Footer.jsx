import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // اختياري لشكل السهم
import QR from "/img/Qrcode.png";
import play from "/img/play.png";
import store from "/img/store.png";

const Footer = () => {
  const sections = [
    {
      title: "Support",
      links: [
        "111 Bijoy sarani, Dhaka, Bangladesh",
        "exclusive@gmail.com",
        "+88015-88888-9999",
      ],
    },
    {
      title: "Account",
      links: ["My Account", "Login / Register", "Cart", "Wishlist"],
    },
    {
      title: "Quick Link",
      links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
    },
  ];

  return (
    <footer className="bg-black text-white mt-20 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
        {/* قسم Exclusive - يبقى ظاهراً دائماً */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-2xl md:text-3xl">Exclusive</h4>
          <p className="font-medium text-lg">Subscribe</p>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          <div className="relative mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white rounded py-2 px-4 w-full text-sm focus:outline-none"
            />
            <button className="absolute right-3 top-2">➤</button>
          </div>
        </div>

        {/* أقسام الروابط - في الموبايل تأخذ العرض الكامل وفي اللابتوب تتوزع بجانب بعضها */}
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h4 className="font-bold text-lg border-b border-white/10 pb-2 md:border-none">
              {section.title}
            </h4>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* قسم تحميل التطبيق - ضبط التنسيق ليكون مرناً */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg">Download App</h4>
          <p className="text-xs text-gray-400 font-medium">
            Save $3 with App New User Only
          </p>

          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded">
              <img src={QR} alt="QR" className="w-16 h-16 md:w-20 md:h-20" />
            </div>

            <div className="flex flex-col gap-2">
              <img
                src={play}
                alt="Google Play"
                className="w-24 md:w-28 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img
                src={store}
                alt="App Store"
                className="w-24 md:w-28 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-gray-500">
          © Copyright Rimel 2026. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
