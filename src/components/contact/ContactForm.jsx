import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded shadow-sm h-full">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="bg-[#F5F5F5] p-3 rounded focus:outline-none border-none text-sm w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="bg-[#F5F5F5] p-3 rounded focus:outline-none border-none text-sm w-full"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone *"
            className="bg-[#F5F5F5] p-3 rounded focus:outline-none border-none text-sm w-full"
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows="8"
          className="bg-[#F5F5F5] p-3 rounded focus:outline-none border-none text-sm w-full resize-none"
        ></textarea>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#DB4444] text-white px-10 py-4 cursor-pointer rounded hover:bg-[#c13a3a] transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
