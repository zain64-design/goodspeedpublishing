'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'
import ImageComp from '@/app/_components/ui/Image'
import Text from '@/app/_components/ui/Text'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { StoryBookData } from '@/app/_types'

type Props = {
  story: StoryBookData[]
}
export default function StorySliderInner({story}: Props) {
    const data = story ?? []
  return (
    <div className="relative">
        <div className="lg:max-w-200 xl:max-w-220 2xl:max-w-260 4xl:max-w-310 6xl:max-w-345 mx-auto">
          <Swiper
            className="story-slider"
            modules={[Navigation, A11y]}
            navigation={{
              prevEl: '.story-button-prev',
              nextEl: '.story-button-next',
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
              }
            }}
          >
            {data?.map(({ id, title, img }) => (
              <SwiperSlide key={id}>
                <div className="items-center md:pt-15 lg:pt-20 xl:pt-23.25">
                  <div className="text-center p-4">
                    <Text as="p" className="text-black-text-100 capitalize font-playfair italic font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 4xl:text-5xl mb-2 md:mb-6">{title}</Text>
                    <ImageComp src={img} width={477} height={311} sizes="(max-width: 767px) 100vw, 420px" alt="story book" className="w-full max-h-166.25 h-auto mx-auto object-contain object-center drop-shadow-[-5px_3px_9px_rgba(0,0,0,0.80)]" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button aria-label="Prev" className="story-button-prev z-99 absolute mx-2 md:mx-0 right-auto left-0 top-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-black bg-transparent text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
          <FaArrowLeft />
        </button>
        <button aria-label="Next" className="story-button-next z-99 absolute mx-2 md:mx-0 left-auto right-0 top-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-black bg-transparent text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
          <FaArrowRight />
        </button>
      </div>
  )
}