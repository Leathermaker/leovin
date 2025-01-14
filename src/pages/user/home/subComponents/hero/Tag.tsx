import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";

const Tag: React.FC = () => {
  return (
    <div className="bg-blue-300/30 rounded-full flex items-center gap-2 p-1 w-fit pe-5 hover:-translate-y-2 duration-500 ">
      <div className="bg-blue-700 h-8 aspect-square rounded-full flex items-center justify-center ">
        <FaRegThumbsUp color="white" />
      </div>
      <h1 className="text-black text-xs  md:text-sm ">
        Manufacturer & Exporter of PVC Leather in India
      </h1>
    </div>
  );
};

export default Tag;
