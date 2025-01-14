import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface PageHeroSectionProps {
  title: string;
}

const PageHeroSection: React.FC<PageHeroSectionProps> = ({ title }) => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      modules={[Pagination, Autoplay]} // Add Autoplay module
      className=" h-[12rem] md:h-[32rem] relative overflow-hidden"
    >
      <h1 className="text-white md:text-[5vw] text-2xl z-10 font-bold motion-preset-focus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-jakarta">
        {title}
      </h1>

      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://www.leatherfairind.com/assets/images/tennery.png"
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://vonbaer.com/cdn/shop/articles/pu-leather-vs-faux-leather.jpg?v=1687801109"
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://mahileather.com/cdn/shop/articles/IMG_6502_d96e39f7-7782-4296-a001-2291336ebb98.jpg?v=1554988015"
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />
        <img
          src="https://media.istockphoto.com/id/1317599209/photo/a-young-apprentice-in-a-boot-workshop-prepares-leather-for-further-use-on-a-large-table.jpg?s=612x612&w=0&k=20&c=62S8AgwWKv5nbVVA93W_VkB4fcQfYEPA68xNycVc_d0="
          alt="image"
          className="h-full w-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default PageHeroSection;