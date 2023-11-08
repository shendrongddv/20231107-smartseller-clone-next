"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { dataPromoSlide } from "../data";

export const PromoSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      loop
      autoplay={{
        delay: 5000,
      }}
      pagination
      effect="fade"
      slidesPerView={1}
      spaceBetween={0}
      className="AAA"
    >
      {dataPromoSlide?.map((item) => (
        <SwiperSlide key={item.id} className="BBB">
          <div className="CCC">
            <figure className="aspect-h-16 aspect-w-9 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-100 md:aspect-h-8 md:aspect-w-16">
              <Image
                src={`/slides/${item.media.desktop}`}
                priority
                alt="Desktop Image"
                width={1140}
                height={597}
                className="hidden h-auto w-full object-cover md:flex"
              />

              <Image
                src={`/slides/${item.media.mobile}`}
                priority
                alt="Mobile Image"
                width={640}
                height={1138}
                className="flex h-auto w-full object-cover md:hidden"
              />
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
