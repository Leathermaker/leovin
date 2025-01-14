import React from "react";
import image from '../../../..//assets/images/quality.png'
const Policies: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 lg:gap-12 px-4 lg:px-24 mt-8 lg:mt-12 ">
    <div className="hidden lg:flex lg:col-span-4 justify-center">
      <div className="bg-gray-300 rounded-lg w-full max-w-[20rem] h-[26rem] motion-translate-x-in-[24%] motion-translate-y-in-[11%] motion-rotate-in-[-23deg]">
        <img
          src={image}
          alt="quality"
          className="rounded-lg h-full w-full object-cover"
        />
      </div>
    </div>
    <div className="col-span-12 lg:col-span-8 pb-4 lg:pb-6 rounded-lg  motion-preset-fade">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 ">
        Quality Policy
      </h1>
      <div className="text-gray-700 text-sm sm:text-base lg:text-lg space-y-4 my-6 lg:my-12">
        <p className="leading-relaxed">
          The need for leather can be varied but we only deliver quality Vinyl
          or synthetic leather or artificial leather, so that our clients are
          always satisfied and willing to have more in future. Let it be
          standard or customized, leatherite Indiawe manufacture Vinyl also
          known as PVC leather cloth, leatherite, synthetic leater and
          artificial leather, that suits each of your needs.
        </p>
        <p className="leading-relaxed">
          Vinyl owned products, itself makes a quality product. Along with its
          Royal looks, PVC leather cloth or leatherite gives durability and
          are available in many colors and shapes. Vinyl being an artificial
          or synthetic leather, can be easily cleaned off. It being synthetic
          leather also tops the market, with its Recyclable quality.
        </p>
        <p className="leading-relaxed">
          We can make any product of PVC Leather cloth or leatherite in any
          grade in any thickness having any type of goodness. The quality of
          our product is result of hard work, done by our personnel in getting
          the best and varied artificial leather, synthetic leather or
          leatherite for various industries.
        </p>
        <p className="leading-relaxed">
          LEO VINYLS is eagerly waiting to fulfill your request, with Prime
          Quality leather also known with Polyvinyl chloride leather cloth,
          artificial leather, synthetic leather and Leatherite
        </p>
      </div>
    </div>
  </div>
  );
};

export default Policies;
