import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import leatherImage from '../../../../assets/images/footerbg.png'
import { FaAsterisk } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";



const Services = [
  { type: "services", title: "Home " },
  { type: "services", title: "Products" },
  { type: "services", title: "About Us" },
  { type: "services", title: "PVC Leather Cloth" },
  { type: "services", title: "Infrastructure" },
  { type: "services", title: "Quality Policy" },
];  

const NavigationLinks = [
  { type: "nav", title: "About", href: "/about" },
  { type: "nav", title: "Products", href: "/products" },
  { type: "nav", title: "Infrastructure", href: "/work" },
  { type: "nav", title: "Contact", href: "/contact" },
];

const Contact = [
  { type: "contact", title: "Kapurthala Road,Jalandhar", href: "/contact-us" },
  { type: "contact", title: "Punjab (INDIA)", href: "/contact-us" },
  { type: "contact", title: "+91 181-2651732", href: "/contact-us" },
  { type: "contact", title: "info@leovinyls.com", href: "/contact-us" },
  { type: "terms", title: "Terms & Conditions", href: "/term-and-conditions" },
];

const Footer: React.FC = () => {
  const [visibleType, setVisibleType] = React.useState("");

  const isVisibleHandler = (type: string) => {
    if (visibleType === type) {
      setVisibleType("");
    } else {
      setVisibleType(type);
    }
  };

  return (
    <div  style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(${leatherImage})`, // Replace with your image path
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }} className="grid grid-cols-12 bg-elite-dark pt-12 pb-20 px-4 md:px-12 relative ">
      {/* Left Section */}
      <div className="md:col-span-6 col-span-12 flex flex-col gap-8">
        <div>
          <h1 className="text-red-500 font-bold text-5xl">LEO</h1>
          <p className="font-semibold text-gray-500">VINYLS</p>
        </div>
       
        <div>
          <h1 className="text-lg font-semibold mb-2 text-white">
            Get latest updates and special 
            offers
          </h1>
          <div className="flex items-center bg-white border-2 w-full md:w-fit rounded-full gap-2 bg-elite-whiteSmoke ps-4">
            <input
              type="email"
              className="border-0 bg-elite-whiteSmoke rounded-full focus:border-0 focus:outline-none w-full py-2"
              placeholder="Example@gmail.com"
            />
            <div className="bg-blue-200/50 flex justify-center items-center bg-elite-green rounded-full p-3 aspect-square scale-75">
            <RiSendPlaneLine size={25} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:col-span-6 col-span-12 text-white md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div className="mt-12 md:mt-0 cursor-pointer">
            <h1
              className="font-bold flex justify-between items-center md:border-b-0 border-b-[1px] border-white/75 pb-2 cursor-pointer"
              onClick={() => isVisibleHandler("services")}
            >
              Services
              <MdKeyboardArrowDown
                className={`md:hidden transition-transform ${visibleType === "services" ? "rotate-180" : "rotate-0"}`}
              />
            </h1>
            <div className="flex flex-col gap-4 py-6">
              {Services.map((service, index) => (
                <h1
                  key={`SERVICES_${index}`}
                  className={`text-sm text-white cursor-pointer  ${
                    visibleType === "services" ? "block" : "hidden md:block"
                  }`}
                >
                  {service.title}
                </h1>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="mt-1 md:mt-0 cursor-pointer">
            <h1
              className="font-bold flex justify-between items-center md:border-b-0 border-b-[1px] border-white/75 pb-2 "
              onClick={() => isVisibleHandler("nav")}
            >
              Company
              <MdKeyboardArrowDown
                className={`md:hidden transition-transform ${visibleType === "nav" ? "rotate-180" : "rotate-0"}`}
              />
            </h1>
            <div className="flex flex-col gap-4 py-6">
              {NavigationLinks.map((link, index) => (
                <h1
                  key={`NAVIGATION_${index}`}
                  className={`text-sm text-white ${
                    visibleType === "nav" ? "block" : "hidden md:block"
                  }`}
                >
                  {link.title}
                </h1>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-1 md:mt-0 cursor-pointer">
            <h1
              className="font-bold flex justify-between items-center md:border-b-0 border-b-[1px] border-white/75 pb-2 cursor-pointer"
              onClick={() => isVisibleHandler("contact")}
            >
              Contact
              <MdKeyboardArrowDown
                className={`md:hidden transition-transform ${visibleType === "contact" ? "rotate-180" : "rotate-0"}`}
              />
            </h1>
            <div className="flex flex-col gap-4 py-6">
              {Contact.map((con, index) => (
                <Link
                  to={con.href}
                  key={`CONTACT_${index}`}
                  className={`text-sm text-white ${
                    visibleType === "contact" ? "block" : "hidden md:block"
                  }`}
                >
                  {con.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy and Policy */}
      <Link
        to="/privacy-and-policy"
        className="absolute flex bottom-12 right-12 text-white text-sm items-center gap-2"
      >
        <FaAsterisk color="#fffff" /> Privacy and Policy
      </Link>
    </div>
  );
};

export default Footer;
