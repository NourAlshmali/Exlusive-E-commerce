import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import img from "/img/login.png";

const Login = () => {
  const navigate = useNavigate();

  // أنيميشن الدخول
  const [hideRed, setHideRed] = useState(false);

  // أنيميشن الخروج (زر signup)
  const [hideContent, setHideContent] = useState(false);
  const [fillRed, setFillRed] = useState(false);

  // فورم
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideRed(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // زر Sign up
  const handleClick = () => {
    setHideContent(true);

    setTimeout(() => {
      setFillRed(true);
    }, 100);

    setTimeout(() => {
      navigate("/signup");
    }, 1300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleWithLogin = () => {
    setHideContent(true);

    setTimeout(() => {
      setFillRed(true);
    }, 100);

    setTimeout(() => {
      navigate("/");
    }, 1300);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex">
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

      <div
        className="flex flex-col lg:flex-row w-full h-full relative z-10
          bg-[linear-gradient(115deg,#ffffff_60%,#ef4444_60%)]
          border-4 border-red-500
          shadow-[0_0_15px_rgba(239,68,68,0.7)]
        "
      >
        <div
          className={`flex-1 flex flex-col justify-center px-6 md:pl-50 pt-10 md:pt-20 gap-4 md:gap-6
            transition-all duration-700 ease-in-out
            ${hideContent ? "-translate-x-40 opacity-0" : "opacity-100"}
          `}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-red-500">
            Log in to Exclusive
          </h2>
          <p className="text-lg md:text-2xl text-black">
            Enter your details below
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 w-full md:w-120 h-auto md:h-130"
          >
            <label className="flex flex-col">
              <div className="flex justify-between items-center">
                <span>Email or Phone number:</span>
                <FaPhoneFlip size={20} />
              </div>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border-b-2 border-red-400 outline-none mt-1"
              />
            </label>

            <label className="flex flex-col">
              <div className="flex justify-between items-center">
                <span>Password:</span>
                <MdOutlinePassword size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-2 border-red-400 outline-none mt-1"
              />
            </label>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 md:mt-6 gap-4">
              <button
                onClick={handleWithLogin}
                type="button"
                className="w-32 h-10 md:h-12 bg-red-500 rounded-md text-white cursor-pointer"
              >
                Log in
              </button>

              <button
                type="button"
                className="w-37 h-10 md:h-12 border-b-2 border-red-500 rounded-md"
              >
                forget password?
              </button>
            </div>

            <div className="flex gap-3 text-lg md:text-[20px] self-center pt-5">
              <p>No account yet?</p>
              <button
                type="button"
                onClick={handleClick}
                className="text-red-500 underline cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div className="hidden lg:flex flex-1 justify-end items-center"></div>
        <div
          className={`hidden lg:flex justify-end items-center pl-120
                    transition-all duration-700 ease-in-out
                    ${hideContent ? "translate-x-40 opacity-0" : "opacity-100"}
                  `}
        >
          <img src={img} className="w-175" />
        </div>
      </div>
    </div>
  );
};

export default Login;
