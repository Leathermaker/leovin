import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Title: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <h1 className="md:text-5xl lg:text-[3vw]  text-4xl font-bold text-blue-950 text-center lg:text-left  ">
        Where <span className="text-yellow-500 motion-preset-typewriter">Leather </span> Meets Innovation
        Timeless Style, Unmatched Durability
      </h1>

      <p className="md:text-xl text-gray-600 w-full text-wrap lg:pe-24 lg:text-left text-center">
        Welcome to Leo Vinyls, where style meets durability. Since 1995, we’ve
        been India’s trusted manufacturer and exporter of premium PVC Leather
        Cloth, blending elegance with unmatched quality. 
      </p>

      <button className="bg-blue-600  flex items-center justify-center gap-2  lg:mx-0 text-white px-12 w-[13rem] rounded-lg py-4 hover:-translate-y-2 duration-500 hover:shadow-lg shadow-blue-400">
        <h1>Explore</h1>
        <HiOutlineArrowRight />
      </button> 
    </div>
  );
};

export default Title;
