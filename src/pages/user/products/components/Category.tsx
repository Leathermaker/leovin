import React from "react";

const Category: React.FC = () => {
  const category = [
    {
      id: 1,
      name: "Automotive  Industry",
      image: "http://www.leovinyls.com/images/automobile_thumb.jpg",
    },
    {
      id: 2,
      name: "Footwear Industry",
      image: "http://www.leovinyls.com/images/footwear-thumb.jpg",
    },
    {
      id: 3,
      name: "Luggage Industry",
      image: "http://www.leovinyls.com/images/luggage-thumb.jpg",
    },
    {
      id: 4,
      name: "Stationery Industry",
      image: "http://www.leovinyls.com/images/stationarythumb.jpg",
    },
    {
      id: 1,
      name: "Furnishing Industry",
      image: "http://www.leovinyls.com/images/furnishing-thumb.jpg",
    },
    {
      id: 1,
      name: "Sports Industry",
      image: "http://www.leovinyls.com/images/sprots_thumb.jpg",
    },
    {
      id: 1,
      name: "Garment Industry",
      image: "http://www.leovinyls.com/images/garment-thumb.jpg",
    },
    {
      id: 1,
      name: "Upholstery Industry",
      image: "http://www.leovinyls.com/images/upholstery-thumb.jpg",
    },
  ];
  return (
    <div className="py-12 lg:px-24 px-4">
      <h1 className="text-4xl font-semibold text-gray-700/90 mb-4">Category</h1>
      <div className="w-full py-4 flex items-center    overflow-x-scroll scrollbar-hide  border-l-4    ">
        {category.map((item) => (
          <div
            className="w-[11rem] h-[9rem] p-2 flex flex-col items-center   justify-start gap-2  "
            key={item.id}
          >
            <div className="bg-red-950 h-[3rem] md:h-[5rem] aspect-square rounded-full overflow-hidden ">
              <img
                src={item.image}
                alt=""
                className="w-full h-full scale-150 rounded-full object-cover  "
              />
            </div>
            <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 w-[80%]     ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
    