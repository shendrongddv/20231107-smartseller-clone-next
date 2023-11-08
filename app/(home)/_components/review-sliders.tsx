"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { dataReviews } from "../data";

export const ReviewSliders = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      loop
      autoplay={{
        delay: 5000,
      }}
      pagination
      // effect="fade"
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1140: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      }}
      className="AAA w-full"
    >
      {dataReviews?.map((item) => (
        <SwiperSlide key={item.id} className="BBB max-md:px-4">
          <ReviewCard
            id={item.id}
            name={item.name}
            isMale={item.isMale}
            institutionName={item.institution.name}
            institutionPosition={item.institution.position}
            review={item.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Component
type ReviewCardProps = {
  id: number;
  name: string;
  isMale: boolean;
  institutionName: string;
  institutionPosition: string;
  review: string;
};
export const ReviewCard = ({
  id,
  name,
  isMale,
  institutionName,
  institutionPosition,
  review,
}: ReviewCardProps) => {
  return (
    <div className="flex h-full flex-col items-start gap-6 overflow-hidden rounded-2xl bg-background p-4 md:p-6">
      {/* # */}
      <figure className="h-10 w-auto">
        <Image
          src={`https://img.logoipsum.com/21${id}.svg`}
          alt="Logo"
          width={40}
          height={40}
          className="h-full w-auto"
        />
      </figure>

      {/* # */}
      <p className="text-foreground">&apos;{review}&apos;</p>

      {/* # */}
      <div className="mt-auto flex items-center justify-start gap-4">
        {/* ## */}
        <figure className="h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={`https://randomuser.me/api/portraits/${
              isMale ? "men" : "women"
            }/${id}.jpg`}
            alt="Logo"
            width={40}
            height={40}
            className="h-full w-full"
          />
        </figure>

        {/* ## */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-foreground">{institutionName}</h3>
          <span className="text-sm">
            <span className="font-semibold">{name}</span>,&nbsp;
            {institutionPosition}
          </span>
        </div>
      </div>
    </div>
  );
};
