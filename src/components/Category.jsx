import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/category.scss";

// import required modules
import { Pagination } from "swiper";

import styled from "styled-components";
import "../css/variable.scss";

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
        <SwiperSlide>
          <StTitle>플로깅</StTitle>
          <img src="https://www.jobaba.net/file/image.do?filePath=qjOcXNAS8yGf1OiG0Ekwo4yICIEbI3zZt3DZ0saUkXop5QEoNyC6geAbHpRYmmKI" />
        </SwiperSlide>
        <SwiperSlide value="2">
          <StTitle>텀블러 재사용</StTitle>
          <img src="https://img.hankyung.com/photo/201912/99.21263281.1.jpg" />
        </SwiperSlide>
        <SwiperSlide onClick={onclick}></SwiperSlide>
        <SwiperSlide onClick={onclick}></SwiperSlide>
        <SwiperSlide onClick={onclick}></SwiperSlide>
        <SwiperSlide onClick={onclick}></SwiperSlide>
        <SwiperSlide onClick={onclick}></SwiperSlide>
        <SwiperSlide onClick={onclick}></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;

const StTitle = styled.div`
  width: 95%;
  background: #e6e6e6;
  top: 0;
  padding: 0.5em;
  border-radius: var(--radius-small);
`;
