import React from "react";
// import axios from "axios";
// import api from "../shared/Api";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "../css/category.scss";
import styled from "styled-components";

const Category = ({ setCategoryId }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <StTitle>플로깅</StTitle>
        <img
          src="https://n5j8d3h2.rocketcdn.me/wp-content/uploads/2020/06/Plogging-concept.jpg"
          alt="category"
          onClick={() => setCategoryId("1")}
        />
      </SwiperSlide>
      <SwiperSlide value={2}>
        <StTitle>텀블러 재사용</StTitle>
        <img
          src="https://img.hankyung.com/photo/201912/99.21263281.1.jpg"
          alt="category"
          onClick={() => setCategoryId("2")}
        />
      </SwiperSlide>
      <SwiperSlide value={3}>
        <StTitle>페트병 라벨 제거</StTitle>
        <img
          src="https://news.imaeil.com/photos/2020/06/11/2020061114012468124_l.png"
          alt="category"
          onClick={() => setCategoryId("3")}
        />
      </SwiperSlide>
      <SwiperSlide value={4}>
        <StTitle>박스 테이프 제거</StTitle>
        <img
          src="https://cdn.imweb.me/upload/S201808015b611f03dd013/e807469343fe1.png"
          alt="category"
          onClick={() => setCategoryId("4")}
        />
      </SwiperSlide>
      <SwiperSlide value={5}>
        <StTitle>장바구니 사용</StTitle>
        <img
          src="http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2017/07/24/20170724000924_0.jpg"
          alt="category"
          onClick={() => setCategoryId("5")}
        />
      </SwiperSlide>
      <SwiperSlide value={6}>
        <StTitle>미사용 플러그 뽑기</StTitle>
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MDNfMjIw/MDAxNTI1MzM1OTkzNjA4.HayuuRA56WttDT7WME0_eDGaFLNQxp68-m2zsKXISSkg.V515xS_1aNDYAQPZ1WW0fEe1CRgFrNuuY4Yt8CxqObIg.JPEG.safeppy/yaytg521092.jpg?type=w800"
          alt="category"
          onClick={() => setCategoryId("6")}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;

const StTitle = styled.div`
  background: white;
  color: var(--grid-color);
  width: 90%;
  top: 0;
  margin: 0.5em 0em 0.3em;
  padding: 0.5em;
  box-shadow: 0em 0em 0.3em lightgray;
  border-radius: var(--radius-small);
`;
