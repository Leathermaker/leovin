import React from "react";

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Fire",
      price: 100,
      image: "http://www.leovinyls.com/products/fire.jpg",
      description: "This is product 1",
    },
    {
      id: 2,
      name: "Crush",
      price: 200,
      image: "http://www.leovinyls.com/products/crush.jpg",
    },
    {
      id: 3,
      name: "87''",
      price: 100,
      image: "http://www.leovinyls.com/products/fire.jpg",
      description: "This is product 3",
    },
    {
      id: 4,
      name: "Kitkat",
      price: 200,
      image: "http://www.leovinyls.com/products/crush.jpg",
    },
    {
      id: 5,
      name: "87''TWO TONE",
      price: 100,
      image: "http://www.leovinyls.com/products/87_two_tone.jpg",
      description: "This is product 5",
    },
    {
      id: 6,
      name: "Croco",
      price: 200,
      image: "http://www.leovinyls.com/products/croco.jpg",
    },
    {
      id: 7,
      name: "HOCKENIUM",
      price: 100,
      image: "http://www.leovinyls.com/products/hockenium.jpg",
      description: "This is product 7",
    },
    {
      id: 8,
      name: "NIMBUS",
      price: 200,
      image: "http://www.leovinyls.com/products/nimbus_2_new_1.jpg",
    },
    {
      id: 9,
      name: "HOCKENIUM",
      price: 100,
      image: "http://www.leovinyls.com/products/hockenium1.jpg",
      description: "This is product 1",
    },
    {
      id: 10,
      name: "ROYALLE",
      price: 200,
      image: "http://www.leovinyls.com/products/royalle_footwear.jpg",
    },
    {
      id: 11,
      name: "WINDERMERE",
      price: 100,
      image: "http://www.leovinyls.com/products/windermere_footwear.jpg",
      description: "This is product 3",
    },
    {
      id: 12,
      name: "ROYALLE",
      price: 200,
      image: "http://www.leovinyls.com/products/cedro.jpg",
    },
    {
      id: 13,
      name: "CREDO",
      price: 100,
      image: "http://www.leovinyls.com/products/cedro.jpg",
      description: "This is product 5",
    },
    {
      id: 14,
      name: "OMEGA",
      price: 200,
      image: "http://www.leovinyls.com/products/omega_furnishing.jpg",
    },
    {
      id: 15,
      name: "BREMOR",
      price: 100,
      image: "http://www.leovinyls.com/products/bremor_furnishing.jpg",
      description: "This is product 7",
    },
    {
      id: 16,
      name: "LAMA",
      price: 200,
      image: "http://www.leovinyls.com/products/lama_footware.jpg",
    },
    {
      id: 17,
      name: "SILKMAT",
      price: 200,
      image: "http://www.leovinyls.com/products/silkymat_shoes_upholsery.jpg",
    },
    {
      id: 18,
      name: "DIAMOND",
      price: 200,
      image: "http://www.leovinyls.com/products/pvc_cloth.jpg",
    },
  ];

  return (
    <div className="pb-12 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="text-3xl sm:text-4xl font-semibold text-gray-700/90 pb-8 sm:pb-12 flex items-center ">
      <h1 className="flex items-center ">
      Products
       
      </h1>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={`PRODUCT_${index}`} className="relative group">
            {/* Image container */}
            <div className="bg-red-400 h-56 md:h-64 lg:h-72 overflow-hidden rounded-lg relative">
              {/* Overlay */}
              <div className="bg-black/50 rounded-2xl md:group-hover:top-[8rem] top-[18rem] z-40 absolute h-full w-full  left-0  duration-300"></div>
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform scale-125 group-hover:scale-150 transition-transform duration-300"
              />
            </div>
            {/* Product name */}
            <div className="absolute -bottom-4 left-4 shadow-lg w-[8rem] py-2 rounded-full text-center bg-blue-950 text-white z-50 md:group-hover:bottom-24 duration-300 group-hover:bg-blue-200 group-hover:text-blue-950 ">
              <p>{product.name.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
