import React, { useRef } from "react";
import automotiveImage from "../../../../assets/images/automotiveindustry.png";
import footware from "../../../../assets/images/footware.png";
import luggage from "../../../../assets/images/luggage.png";
import stationary from "../../../../assets/images/stationary.png";
import decoration from "../../../../assets/images/decoration.png";
import sports from "../../../../assets/images/sports.png";
import garment from "../../../../assets/images/garment.png";
import uphostry from "../../../../assets/images/upholstery.png";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

const OurProducts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const imgesData = [
    {
      image: automotiveImage,
      title: "Automotive Industry",
    },
    {
      image: footware,
      title: "Footwear Industry",
    },
    {
      image: luggage,
      title: "Luggage Industry",
    },
    {
      image: stationary,
      title: "Stationary Industry",
    },
    {
      image: decoration,
      title: "Furnishing/ Decoration Industry",
    },
    {
      image: sports,
      title: "Sports Goods Industry",
    },
    {
      image: garment,
      title: "Garment Industry",
    },
    {
      image: uphostry,
      title: "Upholstery Industry",
    },
  ];

  return (
    <div className="w-full py-24 lg:px-24 px-4 relative">
      <h1 className="text-5xl font-semibold text-center mb-8">Our Products</h1>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute lg:block hidden left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700"
      >
        <GoTriangleLeft />
      </button>
      <button
        onClick={scrollRight}
        className="absolute lg:block hidden right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700"
      >
        <GoTriangleRight />
      </button>

      {/* Scrollable Cards Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 w-full overflow-x-scroll scrollbar-hide"
      >
        {imgesData.map((service, index) => (
          <div
            key={index}
            className="relative bg-gray-400 h-[8rem] md:h-[15rem] w-[15rem] md:w-[25rem] rounded-xl flex-shrink-0 overflow-hidden"
          >
            <img
              src={service.image}
              alt=" prod_image"
              className="w-full h-full object-cover scale-150"
            />

            <div className="bg-white absolute -top-2 left-2 md:left-8 p-2 rounded-xl md:text-lg text-sm px-4 shadow-lg">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
