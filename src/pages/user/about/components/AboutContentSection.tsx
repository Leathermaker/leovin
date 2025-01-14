import React from "react";
const AboutContentSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-7 lg:ps-12 ">
      <h1 className="text-blue-950 font-bold lg:text-[2.4vw] text-3xl lg:leading-[3rem]">
      Pioneering Excellence in PVC 
        <br />
        Leather Cloth Since 1995.
      </h1>

      <div className="text-gray-500 lg:text-xl text-sm ">
        <h1 className="mb-5">
          Leo Vinyls, established in 1995, is a leading manufacturer, exporter,
          and supplier of premium PVC Leather Cloth, also known as synthetic or
          artificial leather. With an annual turnover of approximately 30 crores
          and two dedicated PVC units, we specialize in producing high-quality
          vinyl that combines elegance, durability, and a leather-like
          appearance. Our products are widely used across industries, including
          sports (soccer balls, gloves), automotive (car upholstery), consumer
          goods (bags, belts, sofa sets), footwear, and furnishings, offering
          versatile and stylish solutions.
        </h1>
        <h1>
          {"  "}
          Known for their wear resistance and consistency, our PVC leather
          products cater to diverse applications, ensuring customer
          satisfaction. From sports equipment like rugby balls and boxing gloves
          to stylish car seat covers and carry bags, our vinyl adds a touch of
          class and functionality. At Leo Vinyls, we continue to lead the
          industry by delivering durable, high-grade synthetic leather that
          meets the demands of modern design and utility.
        </h1>
      </div>
{/* 
      <div className="py-4 border-b w-fit  border-gray-800/20">
        <h1 className="text-blue-950 text-xl  md:text-3xl">Annette Black</h1>
        <p className="text-gray-500 text-sm md:text-xl mt-2">
          CEO & Founder of Manit
        </p>
      </div>

      <div>
        <img src={signature} alt="Signature" />
      </div> */}
    </div>
  );
};

export default AboutContentSection;
