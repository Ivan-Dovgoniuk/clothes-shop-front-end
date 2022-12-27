import { Swiper,SwiperSlide} from "swiper/react";
import banner from "../../img/Banner.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {Pagination,Autoplay} from "swiper";



export default function Slider() {


  return (
    <>
      <div className="container mb-8 hidden sm:block mt-10">
        <Swiper 
            pagination={true} 
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} 
            modules={[Pagination,Autoplay]}>
              <SwiperSlide className="relative">
                      <div className="absolute left-8 top-20">
                          <h2 className={"mb-5"}>
                            Быть на стиле - значит быть первым
                          </h2>
                          <h3 className={"text-left text-sm mb-20"}>
                            -20% летняя  распродажа
                          </h3>
                          <a className={"bg-[#7984C0] w-40 rounded-[12px] h-[48px] text-white px-3 items-center flex justify-center hover:shadow-lg cursor-pointer"}>
                            Подробнее
                          </a>
                      </div>
                      <div  style={{width:"100%",height:"400px"}}>
                          <img src={banner}/>
                      </div>  
              </SwiperSlide>
              <SwiperSlide className="relative">
                      <div className="absolute left-8 top-20">
                          <h2 className={"mb-5"}>
                            Быть на стиле - значит быть первым
                          </h2>
                          <h3 className={"text-left text-sm mb-20"}>
                            -20% летняя  распродажа
                          </h3>
                          <a className={"bg-[#7984C0] w-40 rounded-[12px] h-[48px] text-white px-3 items-center flex justify-center hover:shadow-lg cursor-pointer"}>
                            Подробнее
                          </a>
                      </div>
                      <div  style={{width:"100%",height:"400px"}}>
                          <img src={banner}/>
                      </div>  
              </SwiperSlide>
              <SwiperSlide className="relative">
                      <div className="absolute left-8 top-20">
                          <h2 className={"mb-5"}>
                            Быть на стиле - значит быть первым
                          </h2>
                          <h3 className={"text-left text-sm mb-20"}>
                            -20% летняя  распродажа
                          </h3>
                          <a className={"bg-[#7984C0] w-40 rounded-[12px] h-[48px] text-white px-3 items-center flex justify-center hover:shadow-lg cursor-pointer"}>
                            Подробнее
                          </a>
                      </div>
                      <div  style={{width:"100%",height:"400px"}}>
                          <img src={banner}/>
                      </div>  
              </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}



               
