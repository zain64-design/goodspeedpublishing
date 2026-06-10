'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay } from 'swiper/modules'
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
        <>
            <Swiper
                className="books-slider"
                modules={[Navigation, A11y, Autoplay]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                spaceBetween={40}
                grabCursor={true}
                loop={true}
                // autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                speed={1000}
                slidesPerView={5}
                centeredSlides={true}
                slidesPerGroupSkip={0}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
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
                        <div className="transition-all duration-200 ease-in-out item-main scale-[.7] pt-22">
                            <div className={twMerge(`bg-ct transition-all duration-200 ease-in-out shadow-[inset_-7px_-1.5px_14.1px_0_rgba(0,0,0,0.15)] rounded-[63px] mb-[40px]`)}>
                            <ImageComp src={img} width={665} height={430} alt="Before" className="w-full max-h-166.25 rotate-25 h-auto mx-auto object-contain object-center" />
                        </div>
                        <Text as="span" className="inline-flex text-black-text-100 capitalize justify-center items-center font-semibold p-2 content-center text-[24px] rounded-full w-full max-w-66.75 min-h-18.25 bg-primary-200">{title}</Text>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}