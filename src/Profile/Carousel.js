import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination]);

function Carousel(props) {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      speed={700}
    >
      {props.imgList.map((img, i) => (
        <SwiperSlide key={`slide-${i}`}>
          <img
            style={{ width: "100%", height: "95%", objectFit: "contain" }}
            src={img}
            alt={`Slide ${i}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
