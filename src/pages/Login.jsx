import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import img from "/img/login.png";

const Login = () => {
  const navigate = useNavigate();

  const [hideRed, setHideRed] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const [fillRed, setFillRed] = useState(false);

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideRed(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setHideContent(true);
    setTimeout(() => setFillRed(true), 100);
    setTimeout(() => navigate("/signup"), 1300);
  };

  const handleWithLogin = () => {
    setHideContent(true);
    setTimeout(() => setFillRed(true), 100);
    setTimeout(() => navigate("/"), 1300);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex bg-white">
      {/* الأحمر عند دخول الصفحة */}
      <div
        className={`absolute top-0 right-0 h-full bg-red-500 z-50
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
          z-50
        `}
      ></div>

      <div
        className="flex flex-col lg:flex-row w-full h-full relative z-10
          lg:bg-[linear-gradient(115deg,#ffffff_60%,#ef4444_60%)]
          bg-white
          md:border-4 md:border-red-500
          md:shadow-[0_0_15px_rgba(239,68,68,0.7)]
        "
      >
        <div
          className={`flex-1 flex flex-col justify-center px-6 lg:pl-32 pt-10 md:pt-20 gap-4 md:gap-6
            transition-all duration-700 ease-in-out
            ${hideContent ? "-translate-x-40 opacity-0" : "opacity-100"}
          `}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-red-500">
            Log in to Exclusive
          </h2>
          <p className="text-base md:text-2xl text-black">
            Enter your details below
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 w-full max-w-[450px]"
          >
            <label className="flex flex-col">
              <div className="flex justify-between items-center text-sm md:text-base">
                <span>Email or Phone number:</span>
                <FaPhoneFlip className="text-red-500" />
              </div>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border-b-2 border-red-400 outline-none mt-2 py-1 bg-transparent"
              />
            </label>

            <label className="flex flex-col">
              <div className="flex justify-between items-center text-sm md:text-base">
                <span>Password:</span>
                <MdOutlinePassword className="text-red-500" size={22} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-2 border-red-400 outline-none mt-2 py-1 bg-transparent"
              />
            </label>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <button
                onClick={handleWithLogin}
                type="button"
                className="w-full sm:w-32 h-12 bg-red-500 rounded-md text-white font-bold cursor-pointer hover:bg-red-600 transition-colors"
              >
                Log in
              </button>

              <button
                type="button"
                className="text-red-500 text-sm md:text-base hover:underline"
              >
                Forget password?
              </button>
            </div>

            <div className="flex gap-2 text-sm md:text-[18px] justify-center pt-8">
              <p>No account yet?</p>
              <button
                type="button"
                onClick={handleClick}
                className="text-red-500 font-bold underline cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        {/* قسم الصورة - يظهر فقط في الشاشات الكبيرة */}
        <div
          className={`hidden lg:flex flex-1 justify-center items-center pr-20
            transition-all duration-700 ease-in-out
            ${hideContent ? "translate-x-40 opacity-0" : "opacity-100"}
          `}
        >
          <img
            src={img}
            className="max-w-[500px] object-contain"
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
