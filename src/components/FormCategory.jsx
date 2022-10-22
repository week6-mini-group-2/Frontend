import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/formCategory.scss";

// import required modules
import { Pagination } from "swiper";

const Category = () => {
  // const [categoryId, setCategoryId] = usestate("");

  // const idChangeHandler = (e) => {
  //   setCategoryId(e.target.value);
  // };

  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide value="1">Slide 1</SwiperSlide>
        <SwiperSlide value="2">Slide 2</SwiperSlide>
        <SwiperSlide value="3">Slide 3</SwiperSlide>
        <SwiperSlide value="4">Slide 4</SwiperSlide>
        <SwiperSlide value="5">Slide 5</SwiperSlide>
        <SwiperSlide value="6">Slide 6</SwiperSlide>
        <SwiperSlide value="7">Slide 7</SwiperSlide>
        <SwiperSlide value="8">Slide 8</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
