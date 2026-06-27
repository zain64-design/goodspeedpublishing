'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import ImageComp from '@/app/_components/ui/Image'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { IllustrationBookData } from '@/app/_types'

type Props = {
  illustration: IllustrationBookData[]
}

export default function IllustrationSliderInner({illustration}: Props) {
    const data = illustration ?? []
  return (
    <div className="relative">
            <Swiper
                className="illustration-slider mt-6 sm:mt-10 md:mt-16.75 mask-[linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
                modules={[Navigation, Pagination, A11y]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: '.illustration-button-prev',
                    nextEl: '.illustration-button-next',
                }}
                spaceBetween={20}
                grabCursor={true}
                // allowTouchMove={false}
                speed={500}
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
                {data?.map(({ id, img },index) => (
                    <SwiperSlide className='' key={id}>
                        <div className="ct-w relative">
                            {/* <ImageComp src={img} fill sizes="(max-width: 991px) 33vw, 20vw" className='sm:object-fill' alt="illustration" preload={index === 0} /> */}
                            <ImageComp src={img} width={390} height={490} placeholder='blur' sizes="(max-width: 767px) 100vw, 390px" className='object-fill object-center w-full max-h-[490px] rounded-xl md:rounded-2xl' alt="illustration" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button aria-label="Prev" className="illustration-button-prev z-99 absolute mx-2 md:mx-0 right-auto left-0 md:left-14.25 top-[30%] w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-white bg-white text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-primary hover:text-mid hover:border-primary cursor-pointer bs-transition">
                <FaArrowLeft />
            </button>
            <button aria-label="Next" className="illustration-button-next z-99 absolute mx-2 md:mx-0 left-auto right-0 md:right-14.25 top-[30%] w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 4xl:w-22 4xl:h-22 6xl:w-26.5 6xl:h-26.5 rounded-full border-2 border-white bg-white text-black-text-100 text-sm md:text-base xl:text-xl 2xl:text-2xl 4xl:text-3xl 6xl:text-4xl flex items-center justify-center hover:bg-primary hover:text-mid hover:border-primary cursor-pointer bs-transition">
                <FaArrowRight />
            </button>
        </div>
  )
}