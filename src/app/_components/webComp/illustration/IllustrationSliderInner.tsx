"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import ImageComp from "@/app/_components/ui/Image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { IllustrationBookData } from "@/app/_types";

type Props = {
  illustration: IllustrationBookData[];
};

export default function IllustrationSliderInner({ illustration }: Props) {
  const data = illustration ?? [];
  return (
    <div className="relative">
      <Swiper
        className="illustration-slider mt-6 mask-[linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)] sm:mt-10 md:mt-16.75"
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".illustration-button-prev",
          nextEl: ".illustration-button-next",
        }}
        spaceBetween={20}
        grabCursor={true}
        // allowTouchMove={false}
        speed={200}
        // slidesPerView={'auto'}
        slidesPerView={4.8}
        loop={true}
        centeredSlides={true}
        slidesPerGroupSkip={2}
        breakpoints={{
          0: {
            slidesPerView: 2.2,
          },
          420: {
            slidesPerView: 2.6,
          },
          576: {
            slidesPerView: 2.8,
          },
          768: {
            slidesPerView: 3.2,
          },
          992: {
            slidesPerView: 3.6,
          },
          1200: {
            slidesPerView: 3.8,
          },
          1400: {
            slidesPerView: 4.2,
          },
          1600: {
            slidesPerView: 4.6,
          },
          1820: {
            slidesPerView: 4.8,
          },
        }}
      >
        {data?.map(({ id, img }, index) => (
          <SwiperSlide className="" key={id}>
            <div className="ct-w relative">
              {/* <ImageComp src={img} fill sizes="(max-width: 991px) 33vw, 20vw" className='sm:object-fill' alt="illustration" preload={index === 0} /> */}
              <ImageComp
                src={img}
                width={390}
                height={490}
                placeholder="blur"
                sizes="(max-width: 767px) 100vw, 390px"
                className="max-h-[490px] w-full rounded-xl object-fill object-center md:rounded-2xl"
                alt="illustration"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        aria-label="Prev"
        className="illustration-button-prev 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 text-black-text-100 4xl:text-3xl 6xl:text-4xl hover:bg-primary hover:text-mid hover:border-primary bs-transition absolute top-[30%] right-auto left-0 z-99 mx-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-sm sm:h-8 sm:w-8 md:left-14.25 md:mx-0 md:h-10 md:w-10 md:text-base lg:h-12 lg:w-12 xl:h-16 xl:w-16 xl:text-xl 2xl:h-20 2xl:w-20 2xl:text-2xl"
      >
        <FaArrowLeft />
      </button>
      <button
        aria-label="Next"
        className="illustration-button-next 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 text-black-text-100 4xl:text-3xl 6xl:text-4xl hover:bg-primary hover:text-mid hover:border-primary bs-transition absolute top-[30%] right-0 left-auto z-99 mx-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-sm sm:h-8 sm:w-8 md:right-14.25 md:mx-0 md:h-10 md:w-10 md:text-base lg:h-12 lg:w-12 xl:h-16 xl:w-16 xl:text-xl 2xl:h-20 2xl:w-20 2xl:text-2xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
