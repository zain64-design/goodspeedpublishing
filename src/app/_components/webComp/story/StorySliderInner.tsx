"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import ImageComp from "@/app/_components/ui/Image";
import Text from "@/app/_components/ui/Text";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { StoryBookData } from "@/app/_types";

type Props = {
  story: StoryBookData[];
};
export default function StorySliderInner({ story }: Props) {
  const data = story ?? [];
  return (
    <div className="relative">
      <div className="4xl:max-w-310 6xl:max-w-345 mx-auto lg:max-w-200 xl:max-w-220 2xl:max-w-260">
        <Swiper
          className="story-slider"
          modules={[Navigation, A11y]}
          navigation={{
            prevEl: ".story-button-prev",
            nextEl: ".story-button-next",
          }}
          spaceBetween={40}
          speed={1000}
          grabCursor={true}
          slidesPerView={2}
          slidesPerGroup={2}
          centeredSlides={false}
          slidesPerGroupSkip={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {data?.map(({ id, title, img }) => (
            <SwiperSlide key={id}>
              <div className="items-center md:pt-10 lg:pt-20 xl:pt-23.25">
                <div className="p-4 text-center">
                  <Text
                    as="p"
                    className="text-black-text-100 font-playfair 4xl:text-5xl mb-2 text-lg font-bold capitalize italic sm:text-2xl md:mb-6 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                  >
                    {title}
                  </Text>
                  <ImageComp
                    src={img}
                    width={665}
                    height={430}
                    placeholder="blur"
                    sizes="(max-width: 575px) 290px, (max-width: 767px) calc(100vw - 104px), (max-width: 991px) 290px, (max-width: 1199px) 340px, (max-width: 1399px) 380px, (max-width: 1599px) 460px, (max-width: 1799px) 560px, 665px"
                    alt="story book"
                    className="mx-auto h-auto w-full max-w-[665px] drop-shadow-[-5px_5px_5px_rgba(0,0,0,0.70)]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        aria-label="Prev"
        className="story-button-prev 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 border-secondary bg-secondary xl:text-black-text-100 4xl:text-3xl 6xl:text-4xl hover:bg-secondary! hover:border-secondary bs-transition absolute top-1/2 right-auto left-0 z-99 mx-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 text-sm text-white hover:text-white sm:h-8 sm:w-8 md:mx-0 md:h-10 md:w-10 md:text-base lg:h-12 lg:w-12 xl:h-16 xl:w-16 xl:border-black xl:bg-transparent! xl:text-xl 2xl:h-20 2xl:w-20 2xl:text-2xl"
      >
        <FaArrowLeft />
      </button>
      <button
        aria-label="Next"
        className="story-button-next 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 border-secondary bg-secondary xl:text-black-text-100 4xl:text-3xl 6xl:text-4xl hover:bg-secondary! hover:border-secondary bs-transition absolute top-1/2 right-0 left-auto z-99 mx-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 text-sm text-white hover:text-white sm:h-8 sm:w-8 md:mx-0 md:h-10 md:w-10 md:text-base lg:h-12 lg:w-12 xl:h-16 xl:w-16 xl:border-black xl:bg-transparent! xl:text-xl 2xl:h-20 2xl:w-20 2xl:text-2xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
