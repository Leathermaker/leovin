import React from "react";

const Partner:React.FC = () => {
  const partners = [
    {
      name: "Mr. T.R. Sikka",
      avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      number: "+91-98143-60970",
    },
    {
      name: "Mr. Narinder Sikka",
      avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      number: "+91-98142-60970",
    },
    {
      name: "Mr. Pankaj Sikka",
      avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      number: "+91-98140-60970",
    },
    {
      name: "Mr. Tarun Sikka",
      avatar: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      number: "+91-9815400034",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
        <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl text-center font-bold text-gray-800 ">OUR PARTNERS</h1>
        <div className="w-[12rem] h-1 bg-blue-500"/>
        </div>
     
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full  py-12 px-4 sm:px-8 lg:px-16 xl:px-32">
      {partners.map((partner, index) => (
        <div
          key={`PARTNERS${index}`}
          className="flex flex-col items-center justify-center sm:p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
        >   
          {/* Image container */}
          <div className="bg-white w-full  sm:w-[14rem] h-[14rem] overflow-hidden rounded-lg">
            <img
              src={partner.avatar}
              alt={partner.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Partner details */}
          <div className="text-center mt-4">
            <h1 className="text-lg font-bold text-gray-800">{partner.name}</h1>
            <p className="text-sm text-gray-600">{partner.number}</p>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default Partner;