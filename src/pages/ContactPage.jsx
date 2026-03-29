import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Breadcrumb from "../components/Breadcrumb";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="space-y-4">
        <Breadcrumb items={["Home"]} current="Contact" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 py-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
