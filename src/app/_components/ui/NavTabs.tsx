'use client'
import { Activity, useState, useRef } from 'react';
import type { GenreItem } from '@/app/_types'
import Text from '@/app/_components/ui/Text'
import CustomBtn from '@/app/_components/ui/CustomBtn'
import { FiArrowRight } from "react-icons/fi";
import ImageComp from '@/app/_components/ui/Image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { gsap, useGSAP } from '@/app/_libs/gsap'

type Props = {
    genres?: GenreItem[]
}

export default function NavTabs({ genres }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scroll = (direction: 'left' | 'right') => {
        const nav = navRef.current;
        if (!nav) return;
        nav.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
    };
    const data = genres ?? [];
    useGSAP(() => {
        const activeEl = contentRefs.current[activeIndex]
        if (!activeEl) return

        gsap.set(activeEl, { opacity: 0 })
        gsap.to(activeEl, { opacity: 1, duration: 1, ease: 'power1.out' })
    }, [activeIndex])

    return (
        <>
            <div className="relative">
                <button onClick={() => scroll('left')} className="h-full w-4 bg-white absolute -left-1 top-1/2 -translate-y-1/2 z-10 md:hidden">
                    <FaChevronLeft />
                </button>
                <div ref={navRef} className="mb-8 md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-18.75 w-full 2xl:max-w-[1400px] mx-auto scroll-smooth overscroll-[contain_auto] [&::-webkit-scrollbar]:hidden overflow-x-auto overflow-y-hidden md:overflow-x-visible md:overflow-y-visible px-6 md:px-0" style={{ scrollbarWidth: 'none' }}>
                    <div className="flex justify-center flex-wrap gap-2 md:gap-4 w-max md:w-auto">
                        {data?.map(({ id, category }, index) => (
                            <button
                                key={id}
                                onClick={() => setActiveIndex(index)}
                                className={[
                                    'px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 2xl:px-6 2xl:py-2.5 h-[35px] sm:h-[40px] md:h-[46px] 2xl:h-[48px] 4xl:h-[52px]',
                                    'border border-grey-border-200 rounded-full shrink-0',
                                    'capitalize text-xs sm:text-sm md:text-base 2xl:text-lg 4xl:text-xl font-medium text-grey-text-200',
                                    'cursor-pointer transition-all duration-300 ease-in-out leading-none',
                                    'hover:text-mid-50 hover:bg-primary hover:border-primary',
                                    activeIndex === index ? 'text-mid-50 font-semibold bg-primary border-primary' : '',
                                ].join(' ')}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <button onClick={() => scroll('right')} className="h-full w-4 bg-white absolute -right-1 top-1/2 -translate-y-1/2 z-10 md:hidden">
                    <FaChevronRight />
                </button>
            </div>

            {data?.map(({ id, title, info, thumbnail, category }, index) => (
                <Activity key={id} mode={activeIndex === index ? 'visible' : 'hidden'}>
                    <div ref={(el) => { contentRefs.current[index] = el }} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="text-left">
                            <Text as='h3' className='text-mid-50 font-bold capitalize md:tracking-[-2px] sm:text-[30px] sm:leading-9 md:text-[36px] md:leading-10 lg:text-[40px] lg:leading-12 xl:text-[56px] xl:leading-14.75 md:mb-4.5 lg:mb-5 xl:mb-7.25'>{title}</Text>
                            <Text className='text-grey-text-300 text-xs sm:text-sm md:text-base leading-5 md:leading-7 xl:text-lg lg:leading-7 2xl:text-xl 2xl:leading-8 4xl:text-[22px] 4xl:leading-9!'>{info}</Text>
                            <div className="flex flex-row justify-center sm:justify-start flex-wrap gap-4 flex-1 w-full mt-6 md:mt-10 2xl:mt-12.75">
                                <CustomBtn label="book free consultation" buttonClass="btn-primary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[240px] xl:max-w-[270px] 2xl:max-w-[292px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg" icon={<FiArrowRight className="text-sm xl:text-base 2xl:text-xl" />} />
                                <CustomBtn label="Chat For 35% OFF" buttonClass="btn-secondary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[232px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg" />
                            </div>
                        </div>
                        {thumbnail && (
                            <ImageComp src={thumbnail} width={670} height={435} preload className='object-contain max-h-108.75 mx-auto max-w-full reflect-below' alt={`image-${category}`} />
                        )}
                    </div>
                </Activity>
            ))}

        </>
    )
}