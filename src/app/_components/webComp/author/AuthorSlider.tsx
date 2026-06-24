'use client'
import type { AuthorItem } from '@/app/_types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y, Controller } from 'swiper/modules';
import ImageComp from '@/app/_components/ui/Image'
import Text from '@/app/_components/ui/Text'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CommaBefore, CommaAfter } from '@/app/_components/ui/Icons'
import TrustPilotReview from "@public/images/trustpilot-review.webp"

type Props = {
    author?: AuthorItem[]
}

export default function AuthorSlider({ author }: Props) {
    const data = author ?? []
    return (
        <>
            <div className="w-[85%] sm:max-w-70 md:max-w-70 lg:max-w-70 xl:max-w-90 2xl:max-w-110 4xl:max-w-130 6xl:max-w-144.25">
                <Swiper
                    modules={[Navigation, A11y, Thumbs, Controller]}
                    autoHeight={true}
                    slidesPerView={1}
                    touchRatio={0}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    speed={1000}
                    navigation={{
                        prevEl: '.author-button-prev',
                        nextEl: '.author-button-next',
                    }}
                    className=""
                >
                    {data?.map(({ id, authorThumbnail }) => (
                        <SwiperSlide key={id}>
                            {authorThumbnail && <ImageComp width={577} height={504} sizes="(max-width: 576px) 50vw, (max-width: 991px) 50vw, 360px" src={authorThumbnail} preload className='max-w-full max-h-126 object-contain block mx-auto' alt='author' />}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-full flex-1">
                <Text as="h3" animate className="text-transparent [-webkit-text-stroke:1px_grey] [-webkit-text-fill-color:mid] uppercase tracking-[7.4px] font-black text-2xl leading-6.5 sm:text-3xl sm:leading-7.5 md:text-[48px] md:leading-13 xl:text-[56px] xl:leading-14 2xl:text-[62px] 2xl:leading-16 4xl:text-[80px] 4xl:leading-20.5 6xl:text-[94px] 6xl:leading-24">success spotlight</Text>
                <div className="flex flex-wrap items-start justify-center md:justify-between gap-2 md:gap-0 pt-10 lg:pt-10 xl:pt-12 2xl:pt-16 4xl:pt-23.5 6xl:pt-26.25">
                    <div className="group relative w-full max-w-115 lg:max-w-90 xl:max-w-110 2xl:max-w-134.5 4xl:max-w-xl 6xl:max-w-2xl mx-auto">
                        <CommaBefore className='absolute h-7 lg:h-9 xl:h-11 2xl:h-14 4xl:h-18 6xl:h-20.5 -top-13 lg:-top-13 xl:-top-16 2xl:-top-21 4xl:-top-30 6xl:-top-32.5 bottom-auto left-0' />
                        <Swiper
                            modules={[Navigation, A11y, Thumbs, Controller]}
                            slidesPerView={1}
                            touchRatio={0}
                            spaceBetween={10}
                            loop={true}
                            speed={1000}
                            navigation={{
                                prevEl: '.author-button-prev',
                                nextEl: '.author-button-next',
                            }}
                            className=""
                        >
                            {data?.map(({ id, desc, authorName }) => (
                                <SwiperSlide key={id}>
                                    <Text as="p" className="text-white font-bold text-lg leading-6 sm:text-[22px] sm:leading-8 md:text-[24px] md:leading-8.5 lg:text-[28px] lg:leading-9.5 xl:text-[32px] xl:leading-10.5 2xl:text-[38px] 2xl:leading-12 4xl:text-[42px] 4xl:leading-13.5 6xl:text-[48px] 6xl:leading-15 tracking-[-1px] md:tracking-[-1.4px]">{desc}</Text>
                                    <Text as="span" className='mt-5.5 inline-flex items-center gap-3 text-white text-xs md:text-sm lg:text-base 2xl:text-lg font-light uppercase tracking-[1.4px] leading-5 right-dash'>{authorName}</Text>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <CommaAfter className='ml-auto absolute h-4 lg:h-6 xl:h-8 2xl:h-10 4xl:h-13 6xl:h-15 top-auto bottom-10 right-3.75' />
                        <div className="flex items-center justify-center gap-3 mt-3">
                            <button aria-label="Prev" className="author-button-prev xl:opacity-0 xl:group-hover:opacity-100 z-99 h-7 w-7 xl:h-10 xl:w-10 rounded-full border-2 border-white bg-transparent text-white text-sm xl:text-xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
                                <FaArrowLeft />
                            </button>
                            <button aria-label="Next" className="author-button-next xl:opacity-0 xl:group-hover:opacity-100 z-99 h-7 w-7 xl:h-10 xl:w-10 rounded-full border-2 border-white bg-transparent text-white text-sm xl:text-xl flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary cursor-pointer bs-transition">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <ImageComp src={TrustPilotReview} width={238} height={320} className="max-w-42 object-contain lg:max-w-32 xl:max-w-42 2xl:max-w-52 4xl:max-w-55 6xl:max-w-59.5 h-auto" alt="review" />
                </div>
            </div>
        </>
    )
}