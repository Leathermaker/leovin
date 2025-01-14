import React from "react";
import mainImage from "../../../../../assets/images/homeimage.png";

const HeroRightSection: React.FC = () => {
  return (
    <div className="w-full h-full">
      <img
        src={mainImage}
        alt="image"
        className="object-cover rounded-xl w-full h-auto max-h-[30rem] lg:max-h-[40rem] xl:max-h-[50rem]"
      />
    </div>
  );
};

export default HeroRightSection;