import React from "react";
import image from "../../../../assets/images/aboutimage.png";
import { motion, useInView } from "motion/react";

const AboutImageSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false });
  return (
    <div ref={containerRef} className=" relative">
      <motion.div 
      initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }} 
        className="     flex items-center justify-center   ">
        {isInView && (
          <img src={image} alt="image" />  
        )}
        {isInView && (
          <h1 className="absolute text-[4rem] font-bold top-4 -z-30 motion-scale-in-[0.2] motion-translate-x-in-[0%] motion-translate-y-in-[96%] motion-opacity-in-[10%] text-blue-950">
            ABOUT US
          </h1>
        )}
      </motion.div>
    </div>
  );
};

export default AboutImageSection;
