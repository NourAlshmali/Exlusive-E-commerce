import Breadcrumb from "../components/Breadcrumb";
import img2 from "/img/AboutImage.png";
import { CiCamera, CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import CategoryCard from "../components/CategoryCard";
import Team from "../components/AboutPage/Team";
import ServicesSection from "../components/Home/ServicesSection";

const About = () => {
  const categories = [
    {
      id: 1,
      name: "10.5k Sallers active our site",
      icon: <CiMobile4 size={56} />,
    },
    {
      id: 2,
      name: "33k Mopnthly Produduct Sale",
      icon: <HiOutlineDesktopComputer size={56} />,
    },
    {
      id: 3,
      name: "45.5k Customer active in our site",
      icon: <BsSmartwatch size={56} />,
    },
    {
      id: 4,
      name: "25k Anual gross sale in our site",
      icon: <CiCamera size={56} />,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="space-y-4">
          <Breadcrumb items={["Home"]} current="About" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-40 pt-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
            <p className="text-gray-600 leading-relaxed">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Exclusive has more than 1 million products to offer, growing very
              fast. It offers a diverse assortment in categories ranging from
              consumer goods and beyond.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img src={img2} alt="About" className="w-full object-contain" />
          </div>
        </div>
        <ul className="w-full flex gap-10 mt-20">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </ul>
        <Team className="mt-20" />
      </div>
      <ServicesSection />
    </div>
  );
};

export default About;
