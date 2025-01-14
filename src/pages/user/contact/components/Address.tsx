import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { motion, useScroll, useTransform } from "motion/react"; // Ensure you're using "framer-motion"

interface AddressProps {
  icon: React.ReactNode;
  title: string;
  desc1: string;
  desc2: string;
  desc3?: string;
  desc4?: string;
  desc5?: string;
  desc6?: string;
}

const Address: React.FC = () => {
  const address: AddressProps[] = [
    {
      icon: <SlLocationPin />,
      title: "Address",
      desc1: "Kapurthala Road,",
      desc2: "Jalandhar 144002 Punjab, INDIA",
    },
    {
      icon: <MdOutlineEmail />,
      title: "Email Us",
      desc1: "E-mail - info@leovinyls.com",
      desc2: "Fax - +91-181-2406026, 2651732",
    },
    {
      icon: <BiPhoneCall />,
      title: "Call Now",
      desc1: "+91-181-2651732, +91-181- 3259445",
      desc2: "+91-181-3259445, +91-181-5093344",
    },
    {
      icon: <BiPhoneCall />,
      title: "Contact Person",
      desc1: "Mr. Tarun Sikka +91-9815400034",
      desc2: "Mr. Pankaj Sikka +91-98140-60970",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 sm:px-8 lg:px-16 xl:px-24 ">
      {address.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-3xl text-gray-600 bg-gray-100 p-4 rounded-full mb-4">
            {item.icon}
          </div>
          <div className="text-xl font-semibold text-blue-950 mb-2">{item.title}</div>
          <div className="text-sm lg:text-[0.9vw] xl:text-sm text-gray-600">
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
            {item.desc3 && <p>{item.desc3}</p>}
            {item.desc4 && <p>{item.desc4}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Address;