import React from "react";
import QR from "/img/Qrcode.png";
import play from "/img/play.png";
import store from "/img/store.png";

const Footer = () => {
  const exclusiveLinks = ["Subscribe"];
  const supportLinks = [
    "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh",
    "exclusive@gmail.com",
    "+88015-88888-9999",
  ];
  const accountLinks = ["My Account", "Login / Register", "Cart", "Wishlist"];
  const quickLinks = ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"];

  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-6xl mx-auto py-10 grid grid-cols-5 gap-30">
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-4xl">Exclusive</h4>
          <ul className="space-y-1">
            {exclusiveLinks.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
          <p className="text-xs mt-2">Get 10% off your first order</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <ul className="space-y-3 text-xs">
            {supportLinks.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Account</h4>
          <ul className="space-y-3 text-xs">
            {accountLinks.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Quick Link</h4>
          <ul className="space-y-3 text-xs">
            {quickLinks.map((link, idx) => (
              <li key={idx}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-2">
          <h4 className="font-bold mb-2">Download App</h4>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>
          <div className="flex flex-col space-y-4">
            <img src={QR} alt="QR" className="w-20 h-20" />
            <div className="flex space-x-3">
              <img src={play} alt="Google Play" className="w-24 h-8" />
              <img src={store} alt="App Store" className="w-24 h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
