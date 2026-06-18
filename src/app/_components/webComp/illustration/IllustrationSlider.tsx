'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import ImageComp from '@/app/_components/ui/Image'
import illustration1 from '@public/images/illustration/illustration-1.webp'
import illustration2 from '@public/images/illustration/illustration-2.webp'
import illustration3 from '@public/images/illustration/illustration-3.webp'
import illustration4 from '@public/images/illustration/illustration-4.webp'
import illustration5 from '@public/images/illustration/illustration-5.webp'
import illustration6 from '@public/images/illustration/illustration-6.webp'
import illustration7 from '@public/images/illustration/illustration-7.webp'
import illustration8 from '@public/images/illustration/illustration-8.webp'
import illustration9 from '@public/images/illustration/illustration-9.webp'
import { twMerge } from 'tailwind-merge'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const portfolioBooks = [
    { id: 1, img: illustration1 },
    { id: 2, img: illustration2 },
    { id: 3, img: illustration3 },
    { id: 4, img: illustration4 },
    { id: 5, img: illustration5 },
    { id: 6, img: illustration6 },
    { id: 7, img: illustration7 },
    { id: 8, img: illustration8 },
    { id: 9, img: illustration9 },
    { id: 10, img: illustration1 },
    { id: 11, img: illustration2 },
    { id: 12, img: illustration3 },
    { id: 13, img: illustration4 },
    { id: 14, img: illustration5 },
    { id: 15, img: illustration6 },
    { id: 16, img: illustration7 },
    { id: 17, img: illustration8 },
    { id: 18, img: illustration9 },
    { id: 19, img: illustration1 },
    { id: 20, img: illustration2 },
    { id: 21, img: illustration3 },
    { id: 22, img: illustration4 },
    { id: 23, img: illustration5 },
    { id: 24, img: illustration6 },
    { id: 25, img: illustration7 },
    { id: 26, img: illustration8 },
    { id: 27, img: illustration9 },
]

export default function IllustrationSlider() {
    return (
        <div className="relative">
            <Swiper
                className="illustration-slider mt-10 md:mt-16.75 mask-[linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]"
                modules={[Navigation, A11y, Pagination]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: '.illustration-button-prev',
                    nextEl: '.illustration-button-next',
                }}
                spaceBetween={20}
                grabCursor={true}
                speed={1200}
                slidesPerView={'auto'}
                loop={true}
                centeredSlides={true}
                slidesPerGroupSkip={2}
            >
                {portfolioBooks.map(({ id, img },index) => (
                    <SwiperSlide className='w-auto!' key={id}>
                        <div className="ct-w relative">
                            <ImageComp src={img} fill sizes="390px" alt="illustration" preload={index === 0} />
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