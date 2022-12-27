import { Swiper, SwiperSlide } from "swiper/react";
import type { SliderProps } from "./ProductSlider"

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper";



export default function ProductSlideMobile(props:SliderProps) {


 
  return (

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="max-w-[275px] sm:max-w-[450px] sm:max-h-[400px] lg:max-w-[600px] lg:max-h-[550px]" 
      >
        <SwiperSlide><img src={`${props.image_1}`} /></SwiperSlide>
        <SwiperSlide><img src={`${props.image_2}`} /></SwiperSlide>
        <SwiperSlide><img src={`${props.image_3}`} /></SwiperSlide>
        <SwiperSlide><img src={`${props.image_4}`} /></SwiperSlide>
        <SwiperSlide><img src={`${props.image_5}`} /></SwiperSlide>

      </Swiper>
      

)}