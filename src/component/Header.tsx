import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import Button from "../component/Button";


import slide1 from '../img/11 (1).svg';
import slide2 from '../img/11.svg';
import slide3 from '../img/Untitled-1 2.svg';


const Header: React.FC = () => {

  return (
    <header className="w-full h-dvh relative bg-black">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
         }}
        loop
        modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img className="w-full h-dvh object-cover" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-dvh object-cover" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-dvh object-cover" src={slide3} alt="" />
        </SwiperSlide>
      </Swiper>
        <div className="bg-[#F8F200] absolute right-0 md:right-4 2xl:right-36 -bottom-16 lg:bottom-0 z-50 p-10 lg:p-14 banner flex flex-col text-center items-center lg:items-start lg:text-start gap-5">
          <h1 className="text-3xl leading-8 lg:text-5xl max-w-[484px] font-medium font-arch">
            Доступно на всех платформах
          </h1>
          <Button label="Узнать больше"/>
        </div>
    </header>
  );
};

export default Header;
