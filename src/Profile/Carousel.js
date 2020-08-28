import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination]);

export default function Carousel(props) {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      speed={700}
    >
      {props.imgList.map((img, i) => (
        <SwiperSlide key={`slide-${i}`}>
          <img
            style={{ width: "100%", height: "95%", objectFit: "contain" }}
            src={`${img.imgURL}`}
            alt={`Slide ${i}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
