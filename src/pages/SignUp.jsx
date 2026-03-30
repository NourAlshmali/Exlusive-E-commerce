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

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideRed(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleTransition = (targetPath) => {
    setHideContent(true);
    setTimeout(() => {
      setFillRed(true);
    }, 100);
    setTimeout(() => {
      navigate(targetPath);
    }, 1300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTransition("/");
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

      {/* الأحمر عند الانتقال لصفحة أخرى */}
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
        {/* Container المحتوى */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
          {/* قسم الفورم */}
          <div
            className={`flex-1 flex flex-col justify-center px-6 lg:pl-32 pt-10 md:pt-20 gap-4
              transition-all duration-700 ease-in-out
              ${hideContent ? "-translate-x-40 opacity-0" : "translate-x-0 opacity-100"}
            `}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-red-500">
              Create an account
            </h2>
            <p className="text-base md:text-2xl text-black">
              Enter your details below
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:gap-6 mt-6 w-full max-w-[450px]"
            >
              <label className="flex flex-col">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span>Name:</span>
                  <MdDriveFileRenameOutline
                    className="text-red-500"
                    size={20}
                  />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-b-2 border-red-400 outline-none mt-2 py-1 bg-transparent"
                />
              </label>

              <label className="flex flex-col">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span>Email or Phone number:</span>
                  <FaPhoneFlip className="text-red-500" size={18} />
                </div>
                <input
                  type="text"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="border-b-2 border-red-400 outline-none mt-2 py-1 bg-transparent"
                />
              </label>

              <label className="flex flex-col">
                <div className="flex justify-between items-center text-sm md:text-base">
                  <span>Password:</span>
                  <MdOutlinePassword className="text-red-500" size={20} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b-2 border-red-400 outline-none mt-2 py-1 bg-transparent"
                />
              </label>

              <div className="flex flex-col items-center pt-6 gap-y-4">
                <button
                  type="submit"
                  className="w-full h-12 bg-red-500 rounded-md text-white font-bold hover:bg-red-600 transition-all active:scale-95 shadow-md"
                >
                  Create Account
                </button>

                <p className="text-gray-400 text-sm">OR</p>

                <button
                  type="button"
                  className="w-full h-12 border-2 border-gray-200 rounded-md flex justify-center items-center gap-3 hover:bg-gray-50 transition-colors"
                >
                  <FcGoogle size={22} />
                  <span className="text-sm md:text-base font-medium">
                    Sign up with Google
                  </span>
                </button>
              </div>
            </form>

            <div className="flex gap-2 text-sm md:text-[18px] justify-center lg:justify-start pt-6">
              <p>Already have an account?</p>
              <button
                type="button"
                onClick={() => handleTransition("/login")}
                className="text-red-500 font-bold underline cursor-pointer hover:text-red-700"
              >
                Log in
              </button>
            </div>
          </div>

          <div
            className={`hidden lg:flex flex-1 justify-center items-center pr-10
              transition-all duration-700 ease-in-out
              ${hideContent ? "translate-x-40 opacity-0" : "opacity-100"}
            `}
          >
            <img
              src={img}
              className="max-w-[600px] object-contain"
              alt="Signup Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
