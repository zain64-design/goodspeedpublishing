'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ImageComp from '@/app/_components/ui/Image'
import { StaticImageData } from "next/image"

type LogoItem = {
    id: number, name: string, src: string | StaticImageData
}

type Props = {
    logos: LogoItem[]
}

export default function BrandLogo({ logos }: Props) {
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={6.3}
                spaceBetween={24}
                breakpoints={{
                    0: {
                        slidesPerView: 2.6,
                    },
                    576: {
                        slidesPerView: 3.6,
                    },
                    768: {
                        slidesPerView: 3.6,
                    },
                    992: {
                        slidesPerView: 3.6,
                    },
                    1200: {
                        slidesPerView: 4.3,
                    },
                    1400: {
                        slidesPerView: 5.3,
                    },
                    1600: {
                        slidesPerView: 6.3,
                    },
                    1820: {
                        slidesPerView: 6.3,
                    },
                }}
                centeredSlides={true}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}

                speed={3500}
                loop
                // allowTouchMove={false}
                className=' overflow-hidden
    [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]'
            >
                {logos.concat(logos).map((l, idx) => (
                    <SwiperSlide key={`${l.id}-${idx}`} className="!flex items-center justify-center bg-white rounded-2xl md:rounded-3xl px-6 py-4 sm:px-6 sm:py-11">
                        <ImageComp src={l.src} width={192} height={40} alt={l.name} className="max-w-20 h-7 sm:max-w-30 sm:h-8 lg:max-w-48 lg:h-10 w-auto object-contain" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}