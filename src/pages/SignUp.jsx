import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import img from "/img/login.png";

const SignUp = () => {
  const navigate = useNavigate();

  const [hideContent, setHideContent] = useState(false);
  const [hideRed, setHideRed] = useState(false);
  const [fillRed, setFillRed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideRed(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleWithCreate = () => {
    setHideContent(true);

    // بعد ما يختفي الفورم + الصورة
    setTimeout(() => {
      setFillRed(true); // الأحمر يبلش يغطي الشاشة بالكامل
    }, 100);
    setTimeout(() => {
      navigate("/");
    }, 1300);
  };

  const handleSignUpClick = () => {
    setHideContent(true);

    // بعد ما يختفي الفورم + الصورة
    setTimeout(() => {
      setFillRed(true); // الأحمر يبلش يغطي الشاشة بالكامل
    }, 100);
    setTimeout(() => {
      navigate("/login");
    }, 1300);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    navigate("/"); // بعد تسجيل الدخول، يتم التوجيه إلى الصفحة الرئيسية
  };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="flex flex-col lg:flex-row w-full h-screen relative z-10
          bg-[linear-gradient(115deg,#ffffff_60%,#ef4444_60%)]
          border-4 border-red-500
          shadow-[0_0_15px_rgba(239,68,68,0.7)]"
    >
      {/* الأحمر عند دخول الصفحة */}
      <div
        className={`absolute top-0 right-0 h-full bg-red-500 z-20
          transition-all duration-1200 ease-in-out
          ${hideRed ? "w-0" : "w-full"}
        `}
      ></div>

      {/* الأحمر عند الخروج لصفحة signup */}
      <div
        className={`absolute top-0 right-0 h-full bg-red-500
          origin-right
          transition-all duration-1000 ease-in-out
          ${fillRed ? "w-full" : "w-0"}
          z-30
        `}
      ></div>
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        <div
          className={`flex flex-col px-6 md:pl-50 gap-4 md:gap-5
            transition-all duration-700 ease-in-out
            ${
              hideContent
                ? "-translate-x-40 opacity-0"
                : "translate-x-0 opacity-100"
            }
          `}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-red-500">
            Create an account
          </h2>
          <p className="text-lg md:text-2xl text-black pl-3">Enter your details below</p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:gap-6 pl-4 md:pl-10 pt-6 md:pt-10 w-full md:w-120 h-auto md:h-130"
          >
            <label className="flex flex-col">
              <div className="flex justify-between">
                <span>Name:</span>
                <MdDriveFileRenameOutline size={20} />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b-2 border-red-400 outline-none"
              />
            </label>

            <label className="flex flex-col">
              <div className="flex justify-between">
                <span>Email or Phone number:</span>
                <FaPhoneFlip size={20} />
              </div>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border-b-2 border-red-400 outline-none"
              />
            </label>

            <label className="flex flex-col">
              <div className="flex justify-between">
                <span>Password:</span>
                <MdOutlinePassword size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-2 border-red-400 outline-none"
              />
            </label>

            <div className="flex flex-col items-center pt-6 md:pt-10 gap-y-4">
              <button
                onClick={handleWithCreate}
                type="submit"
                className="w-40 md:w-50 h-10 md:h-12 bg-red-500 rounded-md cursor-pointer text-white"
              >
                Create Account
              </button>

              <p>___ OR ___</p>

              <button className="w-40 md:w-50 h-10 md:h-12 border-2 border-red-500 rounded-md flex justify-center items-center gap-4">
                <FcGoogle size={22} /> sign up with google
              </button>
            </div>
          </form>

          <div className="flex gap-3 pl-10 md:pl-30 text-lg md:text-[20px]">
            <p>Already have account?</p>
            <button
              type="button"
              onClick={handleSignUpClick}
              className="text-red-500 font-semibold underline cursor-pointer"
            >
              log in
            </button>
          </div>
        </div>

        <div
          className={`hidden lg:flex justify-end items-center pl-120
            transition-all duration-700 ease-in-out
            ${hideContent ? "translate-x-40 opacity-0" : "opacity-100"}
          `}
        >
          <img src={img} className="w-[700px]" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
