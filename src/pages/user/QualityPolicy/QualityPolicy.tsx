import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import PageHeroSection from "../../../components/PageHeroSection";
import { Policies } from "./components";

const QualityPolicy: React.FC = () => {
  // Use the useScroll hook to get scroll progress
  const { scrollYProgress } = useScroll();

  // Transform the scroll progress into a y-axis movement
  const y = useTransform(scrollYProgress, [0, 1], [-50, -200]); // Adjust the range for desired effect

  return (
    <div>
      <div className="">
        <PageHeroSection title="Quality Policy" />
      </div>
      <div className="h-auto relative bg-white min-h-[40rem] md:mx-12 mx-2">
        <motion.div
          style={{ y }} // Apply the y-axis transformation
          className=" bg-white/60 backdrop-blur-lg rounded-lg border-t shadow-sm border-white"
        >
          <Policies />
        </motion.div>
      </div>
    </div>
  );
};

export default QualityPolicy;