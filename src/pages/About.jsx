import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import img2 from "/img/AboutImage.png";

const About = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-40 pt-10 ">
        <div className="space-y-4">
          <Breadcrumb items={["Home"]} current="About" />
        </div>
        <div className="grid grid-cols-2 gap-20 ">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
