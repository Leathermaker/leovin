import React from "react";

const GoogleMapEmbed: React.FC = () => {
  return (
    <div className="w-full  overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.5420601399546!2d75.50961547626935!3d31.344017755832677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a4570e23f4c03%3A0xaa3ec2e57b93fd4e!2sLeo%20Vinyls!5e0!3m2!1sen!2sin!4v1736505932688!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Leo Vinyls Location"
      />
    </div>
  );
};

export default GoogleMapEmbed;