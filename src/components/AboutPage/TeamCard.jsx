import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const TeamCard = ({ image, name, job, twitter, instagram, linkedin }) => {
  return (
    <div className="group w-full max-w-[350px] h-[500px] flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      <div className="relative grow overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain  grayscale-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-liner-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8 text-center bg-white">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">
          {name}
        </h3>
        <p className="text-sm font-semibold text-blue-600 mb-6 uppercase tracking-[0.1em]">
          {job}
        </p>

        <div className="flex justify-center gap-6 border-t border-gray-50 pt-6">
          <SocialIcon
            href={twitter}
            icon={<FaTwitter />}
            color="hover:text-blue-400"
          />
          <SocialIcon
            href={instagram}
            icon={<FaInstagram />}
            color="hover:text-pink-500"
          />
          <SocialIcon
            href={linkedin}
            icon={<FaLinkedinIn />}
            color="hover:text-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

const SocialIcon = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-400 text-xl transition-all duration-300 hover:-translate-y-1 ${color}`}
  >
    {icon}
  </a>
);

export default TeamCard;
