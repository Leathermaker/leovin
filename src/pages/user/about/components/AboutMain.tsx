import React from "react";
import AboutImageSection from "./AboutImageSection";
import AboutContentSection from "./AboutContentSection";

const AboutMain: React.FC = () => {
  return (
    <div className="grid grid-cols-12 lg:mx-24 mx-4  ">
      <div className="lg:col-span-6 col-span-12 my-12">
        <AboutImageSection />
      </div>
      <div className="lg:col-span-6 col-span-12 my-12   flex lg:items-end lg: pb-12">
        <AboutContentSection/>
      </div>
    </div>
  );
};

export default AboutMain;
