import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "antd";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "./style.scss";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
SwiperCore.use([Navigation, Thumbs]);

function ImageProduct(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { images } = props;
  return (
    <div className="detail-product__img">
      <div className="swiper-sub">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesVisibility={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="imageProduct" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-main">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper2"
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item} alt="imageProduct" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ImageProduct;
