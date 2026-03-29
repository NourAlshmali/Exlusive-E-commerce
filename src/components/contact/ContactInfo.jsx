import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded shadow-sm h-full">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#DB4444] p-3 rounded-full text-white text-xl">
            <FiPhone />
          </div>
          <h3 className="font-medium text-lg">Call To Us</h3>
        </div>
        <p className="text-sm mb-2">We are available 24/7, 7 days a week.</p>
        <p className="text-sm font-medium text-gray-800">
          Phone: +8801611112222
        </p>
      </div>

      <hr className="border-gray-300 mb-8" />

      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-[#DB4444] p-3 rounded-full text-white text-xl">
            <FiMail />
          </div>
          <h3 className="font-medium text-lg">Write To Us</h3>
        </div>
        <p className="text-sm mb-4">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="text-sm mb-2">Emails: customer@exclusive.com</p>
        <p className="text-sm">Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
