import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileForm from "../components/ProfileForm";
import Breadcrumb from "../components/Breadcrumb";

const AccountPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      <div className="flex justify-between items-center mb-10">
     <Breadcrumb items={["Home"]} current="My Account" />
        <p className="text-sm">
          Welcome! <span className="text-red-500">Md Rimel</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 bg-white p-8 rounded shadow-sm border border-gray-50">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
