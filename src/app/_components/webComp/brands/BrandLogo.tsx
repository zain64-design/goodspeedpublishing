'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import ImageComp from '@/app/_components/ui/Image'
import { LogoItem } from '@/app/_types'

type Props = {
    logos: LogoItem[]
}

export default function BrandLogo({ logos }: Props) {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={8.3}
            spaceBetween={24}
            breakpoints={{
                0: {
                    slidesPerView: 2.8,
                },
                420: {
                    slidesPerView: 3.8,
                },
                576: {
                    slidesPerView: 3.6,
                },
                768: {
                    slidesPerView: 3.8,
                },
                992: {
                    slidesPerView: 4.6,
                },
                1200: {
                    slidesPerView: 5.3,
                },
                1400: {
                    slidesPerView: 6.3,
                },
                1600: {
                    slidesPerView: 7.3,
                },
                1820: {
                    slidesPerView: 8.3,
                },
            }}
            centeredSlides={true}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={3500}
            loop
            allowTouchMove={false}
            className=' overflow-hidden
    mask-[linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]'
        >
            {logos.map(({id, name, src}) => (
                <SwiperSlide key={id} className="flex! items-center justify-center bg-white rounded-xl sm:rounded-2xl md:rounded-3xl px-6 py-4 sm:px-4 sm:py-8 md:px-6 md:py-11">
                    <ImageComp src={src} width={192} height={40} alt={name} className="max-w-20 h-6 sm:max-w-30 sm:h-8 lg:max-w-48 lg:h-9 w-auto object-contain" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}