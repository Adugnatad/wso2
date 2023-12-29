import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../config.ts";

export default function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASEURL}/api/sliders?populate=*`).then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <Swiper slidesPerView={1} autoplay={{ delay: 3000 }} modules={[Autoplay]}>
      {data?.map((slide: any, index: any) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[#1a1a1a] min-h-screen flex flex-col justify-center text-white p-8">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                // src="src\assets\bg-dark.svg"
                src={
                  slide?.attributes?.img?.data
                    ? BASEURL + slide?.attributes?.img?.data[0]?.attributes.url
                    : ""
                }
                alt="tech partnership"
              />
              <div className="max-w-6xl z-10 mb-[15%]">
                <header className="mb-2">
                  <h1 className="text-sm text-orange-600 font-light uppercase">
                    {/* Api docs */}
                    {slide?.attributes.title}
                  </h1>
                </header>
                <main className="max-w-3xl">
                  <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
                    {slide?.attributes.subtitle}
                  </h2>
                  <p className="text-xl md:text-3xl mb-8 font-light">
                    {slide?.attributes.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/apis"
                      className="bg-orange-600 px-3 py-1 rounded-[50px] text-lg text-white"
                    >
                      Learn more
                    </a>
                    {/* <button className="bg-transparent border px-3 rounded-[50px] text-lg border-white text-white">
              View documentation
            </button> */}
                  </div>
                </main>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>{Slider2}</SwiperSlide>
      <SwiperSlide>{Slider3}</SwiperSlide> */}
    </Swiper>
  );
}
