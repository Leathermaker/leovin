import React from "react";
import Address from "./components/Address";
import ContactForm from "./components/ContactForm";
import GoogleMapEmbed from "./components/GoogleMapEmbed";
import Partner from "./components/Partner";
import PageHeroSection from "../../../components/PageHeroSection";
import { motion, useScroll, useTransform } from "motion/react"; // Ensure you're using "framer-motion"

const Contact: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Transform the scroll progress into a y-axis movement
  const y = useTransform(scrollYProgress, [0, 1], [-50, -300]); // Adjust the range for desired effect

  return (
    <div>
      <div className="h-fit">
        <PageHeroSection title={"CONTACT US"} />
      </div>
      <div className="relative bg-white md:mx-12 mx-2">
        {/* Apply the parallax effect to the container */}
        <motion.div
          style={{ y }} // Apply the y-axis transformation
          className="bg-white/60 backdrop-blur-lg rounded-lg border-t shadow-sm border-white w-full p-2"
        >
          <Address />
          <Partner />
          <ContactForm />
          <GoogleMapEmbed />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;