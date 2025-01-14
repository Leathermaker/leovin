import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';


const RoundedButtonSlider:React.FC = () => {
  const buttons = [1, 2, 3, 4];


//   <Swiper
//   spaceBetween={50}
//   slidesPerView={3}
//   onSlideChange={() => console.log('slide change')}
//   onSwiper={(swiper) => console.log(swiper)}
// >
//   <SwiperSlide>Slide 1</SwiperSlide>
//   <SwiperSlide>Slide 2</SwiperSlide>
//   <SwiperSlide>Slide 3</SwiperSlide>
//   <SwiperSlide>Slide 4</SwiperSlide>
//   ...
// </Swiper>

  return (
    <div className=' w-full absolute flex justify-center top-16 '>
    <div className="lg:flex hidden items-center gap-3  w-fit  p-4 rounded-[2rem]   shadow-sm  bg-white border  px-5 ">
    {buttons.map((_, index) => (
      <div
        key={index}
        className="h-12  ring-4 ring-blue-100   aspect-square bg-gray-200 rounded-full "
      ></div>
    ))}
  </div>
  </div>

  )
}

export default RoundedButtonSlider
