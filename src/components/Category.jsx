import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/category.scss";

// import required modules
import { Pagination } from "swiper";

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide onClick={onclick}>Slide 1</SwiperSlide>
        <SwiperSlide onClick={onclick}>Slide 2</SwiperSlide>
        <SwiperSlide onClick={onclick}>Slide 3</SwiperSlide>
        <SwiperSlide onClick={onclick}>Slide 4</SwiperSlide>
        <SwiperSlide onClick={onclick}>Slide 5</SwiperSlide>
        <SwiperSlide onClick={onclick}>Slide 6</SwiperSlide>
        <SwiperSlide onClick={onclick}>Slide 7</SwiperSlide>
        <SwiperSlide onClick={onclick}>Slide 8</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
