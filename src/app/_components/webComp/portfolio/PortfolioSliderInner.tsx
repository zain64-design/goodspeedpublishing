"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import ImageComp from "@/app/_components/ui/Image";
import Text from "@/app/_components/ui/Text";
import { twMerge } from "tailwind-merge";
import type { PortfolioBookData } from "@/app/_types";

type Props = {
  portfolio: PortfolioBookData[];
};

export default function PortfolioSliderInner({ portfolio }: Props) {
  const data = portfolio ?? [];
  return (
    <Swiper
      className="books-slider"
      modules={[A11y, Autoplay]}
      spaceBetween={40}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={500}
      slidesPerView={5}
      centeredSlides={true}
      slidesPerGroupSkip={0}
      breakpoints={{
        0: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2.8,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 5,
        },
        1800: {
          slidesPerView: 5,
        },
      }}
    >
      {data?.map(({ id, title, img }) => (
        <SwiperSlide key={id}>
          <div className="item-main scale-[.7] pt-12.5 transition-transform duration-500 ease-in-out sm:pt-22">
            <div
              className={twMerge(
                `bg-ct 4xl:rounded-[58px] 6xl:rounded-[63px] mb-0 rounded-[15px] shadow-[inset_-7px_-1.5px_14.1px_0_rgba(0,0,0,0.15)] sm:mb-7.5 sm:rounded-[30px] md:rounded-[40px] xl:mb-10 xl:rounded-[46px] 2xl:rounded-[50px]`,
              )}
            >
              <div className="overlay-shadow relative rotate-20">
                <ImageComp
                  src={img}
                  width={370}
                  height={585}
                  placeholder="blur"
                  sizes="(max-width: 991px) 33vw, 250px"
                  alt="portfolio book"
                  className="max-w-auto mx-auto max-h-110 object-contain object-center drop-shadow-[5px_8px_5px_rgba(0,0,0,0.30)] lg:max-h-146.25"
                />
              </div>
            </div>
            <Text
              as="span"
              className="text-black-text-100 bg-primary-200 inline-flex min-h-10 w-full max-w-40 content-center items-center justify-center rounded-full p-2 text-xs font-semibold capitalize sm:min-h-12 sm:max-w-55 sm:text-base md:min-h-18.25 md:max-w-66.75 md:text-xl 2xl:text-2xl"
            >
              {title}
            </Text>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
