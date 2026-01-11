import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate(); // للتنقل برمجياً

  const [hideRed, setHideRed] = useState(false);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // أنيميشن الأحمر
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideRed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // التحقق من البيانات عند الضغط على Log in
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = number.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8,15}$/;

    // // التحقق من الإيميل أو رقم الهاتف
    // if (!emailRegex.test(value) && !phoneRegex.test(value)) {
    //   setError("Invalid email or phone number");
    //   return;
    // }

    // // التحقق من الباسورد
    // if (password.length < 6) {
    //   setError("Password must be at least 6 characters");
    //   return;
    // }

    // إذا كل شيء صح، نذهب للـ HomePage
    setError("");
    navigate("/"); // هنا التنقل
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex">
      {/* الأحمر اللي بيغطي الصفحة */}
      <div
        className={`absolute top-0 right-0 h-full bg-red-500 z-20
          transition-all duration-[1200ms] ease-in-out
          ${hideRed ? "w-0" : "w-full"}
        `}
      ></div>

      <div
        className="flex w-full h-full relative z-10
          bg-[linear-gradient(115deg,#ffffff_60%,#ef4444_60%)]
          border-4 border-red-500
          shadow-[0_0_15px_rgba(239,68,68,0.7)]
        "
      >
        <div className="flex-1 flex flex-col justify-center pl-50 pt-20 gap-6">
          <h2 className="text-5xl font-extrabold text-red-500">
            Log in to Exclusive
          </h2>
          <p className="text-2xl text-black">Enter your details below</p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-6 w-110 h-120"
          >
            <label className="flex flex-col">
              <div className="flex justify-between items-center">
                <span>Email or Phone number :</span>
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
                <span>Password :</span>
                <MdOutlinePassword size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b-2 border-red-400 outline-none mt-1"
              />
            </label>

            
            {/* {error && <p className="text-red-500">{error}</p>} */}

            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="w-32 h-12 bg-red-500 rounded-md text-white cursor-pointer"
              >
                Log in
              </button>

              <button className="w-37 h-12 border-b-2 border-red-500 rounded-md flex justify-center items-center gap-2">
                forget password ?
              </button>
            </div>
          </form>
        </div>

        <div className="flex-1 hidden lg:flex justify-end items-center"></div>
      </div>
    </div>
  );
};

export default Login;
