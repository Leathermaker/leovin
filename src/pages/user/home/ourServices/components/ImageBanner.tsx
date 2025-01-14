import React from "react";
import ServiceCard from "./ServiceCard";
import leatherImage from "../../../../../assets/images/mainimg.png";
const ImageBanner: React.FC = () => {
  return (
    <div  style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${leatherImage})`, // Replace with your image path
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundPosition: "center", // Centers the image
    }} className="h-[30rem] relative">
      <div className="flex flex-col justify-center items-center gap-2 pt-24">
        <h1 className="text-blue-400 font-semibold text-2xl ">PRODUCT RANGE</h1>
        <div className="md:text-6xl sm:text-3xl text-2xl text-white font-bold">
          <h1 className="text-center">Timeless elegance,</h1>
          <h1 className="text-center"> unmatched durability</h1>
        </div>

        <ServiceCard />
      </div>
    </div>
  );
};

export default ImageBanner;
