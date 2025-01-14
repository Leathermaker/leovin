import React from "react";
import CountUp from "react-countup";
import { motion, useInView } from "motion/react";

const AnalyticSection: React.FC = () => {
  // Use Framer Motion's useInView hook
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-24 px-4 md:px-8 lg:px-16"
    >
      {/* Project Completed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center bg-red-200/10 p-6 rounded-lg shadow-md"
      >
        <h1 className="text-6xl text-red-500 font-bold">
          {isInView && <CountUp end={12} duration={2} />}K+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Project Completed</p>
      </motion.div>

      {/* Industry Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center bg-blue-200/10 p-6 rounded-lg shadow-md"
      >
        <h1 className="text-6xl text-pink-500 font-bold">
          {isInView && <CountUp end={20} duration={2} />}+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Industry Experience</p>
      </motion.div>

      {/* Happy Clients */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center justify-center bg-green-200/10 p-6 rounded-lg shadow-md"
      >
        <h1 className="text-6xl text-green-500 font-bold">
          {isInView && <CountUp end={10} duration={2} />}K+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Happy Clients</p>
      </motion.div>

      {/* Awards Winner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col items-center justify-center bg-purple-200/10 p-6 rounded-lg shadow-md"
      >
        <h1 className="text-6xl text-purple-500 font-bold">
          {isInView && <CountUp end={132} duration={2} />}+
        </h1>
        <p className="text-gray-700 text-lg mt-2">Awards Winner</p>
      </motion.div>
    </div>
  );
};

export default AnalyticSection;