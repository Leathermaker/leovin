import React from "react";
import { FiChevronsUp } from "react-icons/fi";

const ScrollToTop: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 sm:bottom-10 sm:right-10 right-5 z-50">
    
      <div
        onClick={handleScrollToTop}
        className="bg-blue-100 rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out relative"
      >
        <FiChevronsUp />
      </div>
    </div>
  );
};

export default ScrollToTop;