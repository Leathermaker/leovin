import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import leatherImage from '../../../../assets/images/leatheriamge2.png'
const VideoSection: React.FC = () => {
  return (
    <div className="py-32 md:px-24 px-4   ">
      <div
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${leatherImage})`, // Replace with your image path
            backgroundSize: "cover", // Ensures the image covers the entire div
            backgroundPosition: "center", // Centers the image
          }}
       className="bg-leatherBanner  relative h-[25rem] w-full rounded-3xl flex justify-center items-center ">
         <div className="bg-white bg-cover object-cover rounded-full h-24 aspect-square flex justify-center items-center">
         <BsFillTriangleFill size={35} className="rotate-90 text-yellow-500 "   />
         </div>

      </div>


    </div>
  );
};

export default VideoSection;
