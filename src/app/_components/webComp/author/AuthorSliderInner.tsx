"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Controller } from "swiper/modules";
import ImageComp from "@/app/_components/ui/Image";
import Text from "@/app/_components/ui/Text";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CommaBefore, CommaAfter } from "@/app/_components/ui/Icons";
import TrustPilotReview from "@public/images/trustpilot-review.webp";
import type { AuthorItem } from "@/app/_types";

type Props = {
  author?: AuthorItem[];
};
export default function AuthorSliderInner({ author }: Props) {
  const data = author ?? [];
  return (
    <>
      <div className="4xl:max-w-130 6xl:max-w-144.25 w-[85%] sm:max-w-70 md:max-w-70 lg:max-w-70 xl:max-w-90 2xl:max-w-110">
        <Swiper
          modules={[Navigation, A11y, Controller]}
          autoHeight={true}
          slidesPerView={1}
          touchRatio={0}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          navigation={{
            prevEl: ".author-button-prev",
            nextEl: ".author-button-next",
          }}
          className=""
        >
          {data?.map(({ id, authorThumbnail }) => (
            <SwiperSlide key={id}>
              {authorThumbnail && (
                <ImageComp
                  width={577}
                  height={504}
                  sizes="(max-width: 576px) 50vw, (max-width: 991px) 50vw, (max-width: 1399px) 360px, 577px"
                  src={authorThumbnail}
                  preload
                  className="mx-auto block max-h-126 max-w-full object-contain"
                  alt="author"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex-1">
        <Text
          as="h3"
          animate
          className="4xl:text-[80px] 4xl:leading-20.5 6xl:text-[94px] 6xl:leading-24 text-2xl leading-6.5 font-black tracking-[7.4px] text-transparent uppercase [-webkit-text-fill-color:mid] [-webkit-text-stroke:1px_grey] sm:text-3xl sm:leading-7.5 md:text-[48px] md:leading-13 xl:text-[56px] xl:leading-14 2xl:text-[62px] 2xl:leading-16"
        >
          success spotlight
        </Text>
        <div className="4xl:pt-23.5 6xl:pt-26.25 flex flex-wrap items-start justify-center gap-2 pt-10 md:justify-between md:gap-0 lg:pt-10 xl:pt-12 2xl:pt-16">
          <div className="group 4xl:max-w-xl 6xl:max-w-2xl relative mx-auto w-full max-w-115 lg:max-w-90 xl:max-w-110 2xl:max-w-134.5">
            <CommaBefore className="4xl:h-18 6xl:h-20.5 4xl:-top-30 6xl:-top-32.5 absolute -top-13 bottom-auto left-0 h-7 lg:-top-13 lg:h-9 xl:-top-16 xl:h-11 2xl:-top-21 2xl:h-14" />
            <Swiper
              modules={[Navigation, A11y, Controller]}
              slidesPerView={1}
              touchRatio={0}
              spaceBetween={10}
              loop={true}
              speed={1000}
              navigation={{
                prevEl: ".author-button-prev",
                nextEl: ".author-button-next",
              }}
              className=""
            >
              {data?.map(({ id, desc, authorName }) => (
                <SwiperSlide key={id}>
                  <Text
                    as="p"
                    className="4xl:text-[42px] 4xl:leading-13.5 6xl:text-[48px] 6xl:leading-15 text-lg leading-6 font-bold tracking-[-1px] text-white sm:text-[22px] sm:leading-8 md:text-[24px] md:leading-8.5 md:tracking-[-1.4px] lg:text-[28px] lg:leading-9.5 xl:text-[32px] xl:leading-10.5 2xl:text-[38px] 2xl:leading-12"
                  >
                    {desc}
                  </Text>
                  <Text
                    as="span"
                    className="right-dash mt-5.5 inline-flex items-center gap-3 text-xs leading-5 font-normal tracking-[1.4px] text-white uppercase md:text-sm lg:text-base 2xl:text-lg"
                  >
                    {authorName}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
            <CommaAfter className="4xl:h-13 6xl:h-15 absolute top-auto right-3.75 bottom-10 ml-auto h-4 lg:h-6 xl:h-8 2xl:h-10" />
            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                aria-label="Prev"
                className="author-button-prev hover:bg-secondary hover:border-secondary bs-transition z-99 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent text-sm text-white hover:text-white xl:h-10 xl:w-10 xl:text-xl xl:opacity-0 xl:group-hover:opacity-100"
              >
                <FaArrowLeft />
              </button>
              <button
                aria-label="Next"
                className="author-button-next hover:bg-secondary hover:border-secondary bs-transition z-99 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent text-sm text-white hover:text-white xl:h-10 xl:w-10 xl:text-xl xl:opacity-0 xl:group-hover:opacity-100"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <ImageComp
            src={TrustPilotReview}
            width={238}
            height={320}
            className="4xl:max-w-55 6xl:max-w-59.5 h-auto max-w-42 object-contain lg:max-w-32 xl:max-w-42 2xl:max-w-52"
            alt="review"
          />
        </div>
      </div>
    </>
  );
}
