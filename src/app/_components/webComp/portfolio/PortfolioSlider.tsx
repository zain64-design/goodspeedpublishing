'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import ImageComp from '@/app/_components/ui/Image'
import Text from '@/app/_components/ui/Text'
import portfolio1 from '@public/images/portfolio/portfolio-1.webp'
import portfolio2 from '@public/images/portfolio/portfolio-2.webp'
import portfolio3 from '@public/images/portfolio/portfolio-3.webp'
import portfolio4 from '@public/images/portfolio/portfolio-4.webp'
import portfolio5 from '@public/images/portfolio/portfolio-5.webp'
import { twMerge } from 'tailwind-merge'

type Props = {}

const portfolioBooks = [
    { id: 1, img: portfolio1, title: "sylvia johnson" },
    { id: 2, img: portfolio2, title: "sandra martinez" },
    { id: 3, img: portfolio3, title: "lisa renee" },
    { id: 4, img: portfolio4, title: "W.B. potocka" },
    { id: 5, img: portfolio5, title: "gary linn" },
    { id: 6, img: portfolio1, title: "sylvia johnson" },
    { id: 7, img: portfolio2, title: "sandra martinez" },
    { id: 8, img: portfolio3, title: "lisa renee" },
    { id: 9, img: portfolio4, title: "W.B. potocka" },
    { id: 10, img: portfolio5, title: "gary linn" },
]

export default function PortfolioSlider({ }: Props) {
    return (
         <Swiper
                className="books-slider"
                modules={[A11y, Autoplay]}
                spaceBetween={40}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
                {portfolioBooks.map(({ id, title, img }) => (
                    <SwiperSlide key={id}>
                        <div className="transition-transform duration-500 ease-in-out item-main scale-[.7] pt-12 sm:pt-22">
                            <div className={twMerge(`bg-ct shadow-[inset_-7px_-1.5px_14.1px_0_rgba(0,0,0,0.15)] rounded-[15px] sm:rounded-[30px] md:rounded-[40px] xl:rounded-[46px] 2xl:rounded-[50px] 4xl:rounded-[58px] 6xl:rounded-[63px] mb-0 sm:mb-7.5 xl:mb-10`)}>
                            <div className="overlay-shadow relative rotate-20">
                                <ImageComp src={img} width={370} height={585} sizes="(max-width: 991px) 33vw, 250px" alt="portfolio book" className="max-w-auto max-h-110 lg:max-h-146.25 mx-auto object-contain object-center drop-shadow-[5px_8px_5px_rgba(0,0,0,0.30)]" />
                            </div>
                        </div>
                        <Text as="span" className="inline-flex text-black-text-100 capitalize justify-center items-center font-semibold p-2 content-center text-xs sm:text-base md:text-xl 2xl:text-2xl rounded-full w-full min-h-10 max-w-40 sm:min-h-12 sm:max-w-55 md:max-w-66.75 md:min-h-18.25 bg-primary-200">{title}</Text>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    )
}