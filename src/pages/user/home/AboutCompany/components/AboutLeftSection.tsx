import React from "react";
import leatherImage from "../../../../../assets/images/leatherimage.png";
const AboutLeftSection: React.FC = () => {
  return (
    <div className="  lg:m-12 relative">
      <div className=" h-[45rem]">
        <img
          src={leatherImage}
          alt="image"
          className="object-cover rounded-xl h-full"
        />
      </div>

     
    </div>
  );
};

export default AboutLeftSection;
