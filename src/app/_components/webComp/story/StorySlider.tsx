'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import ImageComp from '@/app/_components/ui/Image'
import Text from '@/app/_components/ui/Text'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import beforeBook from '@public/images/books/before-book.webp'
import afterBook from '@public/images/books/after-book.webp'

type Props = {}

const slides = [
  { id: 1, img: beforeBook, title: "before" },
  { id: 2, img: afterBook, title: "after" },
  { id: 3, img: beforeBook, title: "before" },
  { id: 4, img: afterBook, title: "after" },
]

export default function StorySlider({ }: Props) {
  const ref = useRef<SwiperClass | null>(null)
  return (
    <>
      {/* <div className="relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (ref.current = swiper)}
          spaceBetween={24}
          grabCursor={true}
          slidesPerView={1}
        >
          {slides.map(({id,title,img}) => (
            <SwiperSlide key={id}>
              <div className="md:max-w-140 lg:max-w-200 xl:max-w-240 2xl:max-w-280 4xl:max-w-300 6xl:max-w-330 mx-auto grid grid-cols-2 gap-6 lg:gap-x-8 xl:gap-x-8 2xl:gap-x-8 4xl:gap-x-10 6xl:gap-x-18.5 items-center md:pt-10 lg:pt-20 xl:pt-23.25 bg-no-repeat bg-[position:top_50px_center] md:bg-size-[151px,67px] lg:bg-size-[170px,77px] xl:bg-size-[303px,87px] md:bg-[url('/images/book-slider-elem.webp')]">
                <div className="text-center">
                  <Text as="p" className="text-black-text-100 capitalize font-playfair italic font-bold sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 4xl:text-5xl mb-2 md:mb-6">{title}</Text>
                  <ImageComp src={img} width={464} height={300} alt="Before" className="w-full" />
                </div>
                <div className="text-center">
                  <Text as="p" className="text-black-text-100 capitalize font-playfair italic font-bold sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 4xl:text-5xl mb-2 md:mb-6">{title}</Text>
                  <ImageComp src={img} width={464} height={300} alt="After" className="w-full" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button aria-label="Prev" onClick={() => ref.current?.slidePrev()} className="z-99 absolute mx-2 md:mx-0 right-1/2 md:right-auto bottom-[-15px] sm:top-[-15px] md:left-0 md:top-1/2 md:-translate-y-1/2 w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-black bg-transparent text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
          <FaArrowLeft />
        </button>
        <button aria-label="Next" onClick={() => ref.current?.slideNext()} className="z-99 absolute mx-2 md:mx-0 left-1/2 md:left-auto bottom-[-15px] sm:top-[-15px] md:right-0 md:top-1/2 md:-translate-y-1/2 w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-black bg-transparent text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
          <FaArrowRight />
        </button>
      </div> */}
      <div className="relative">
        <div className="lg:max-w-200 xl:max-w-220 2xl:max-w-260 4xl:max-w-310 6xl:max-w-345 mx-auto">
          <Swiper
          className="ct-arrow"
          modules={[Navigation]}
          onSwiper={(swiper) => (ref.current = swiper)}
          spaceBetween={40}
          grabCursor={true}
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={0}
          breakpoints={{
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                420: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                576: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1200: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1400: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1600: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1820: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            }}
        >
          {slides.map(({id,title,img}) => (
            <SwiperSlide key={id}>
              <div className="items-center md:pt-15 lg:pt-20 xl:pt-23.25">
                <div className="text-center">
                  <Text as="p" className="text-black-text-100 capitalize font-playfair italic font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 4xl:text-5xl mb-2 md:mb-6">{title}</Text>
                  <ImageComp src={img} width={665} height={430} alt="Before" className="w-full max-h-166.25 h-auto mx-auto object-contain object-center" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <button aria-label="Prev" onClick={() => ref.current?.slidePrev()} className="z-99 absolute mx-2 md:mx-0 right-auto left-0 top-1/2 md:-translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-black bg-transparent text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
          <FaArrowLeft />
        </button>
        <button aria-label="Next" onClick={() => ref.current?.slideNext()} className="z-99 absolute mx-2 md:mx-0 left-auto right-0 top-1/2 md:-translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-black bg-transparent text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
          <FaArrowRight />
        </button>
      </div>
    </>
  )
}