import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Slider1 from "./slider/slider1";
import Slider2 from "./slider/slider2";
import Slider3 from "./slider/slider 3";

export default function Carousel() {
  return (
    <Swiper
      //   spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
    >
      <SwiperSlide>{Slider1}</SwiperSlide>
      <SwiperSlide>{Slider2}</SwiperSlide>
      <SwiperSlide>{Slider3}</SwiperSlide>
    </Swiper>
  );
}
