'use client'
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { gsap, useGSAP } from '@/app/_libs/gsap'
import type { Tab } from '@/app/_types'

type Props = {
    tabs: Tab[]
    children: (activeIndex: number, contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>) => React.ReactNode
}

export default function NavTabs({ tabs, children }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const navRef = useRef<HTMLDivElement>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scroll = (direction: 'left' | 'right') => {
        const nav = navRef.current;
        if (!nav) return;
        nav.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' });
    };
    useGSAP(() => {
        const activeEl = contentRefs.current[activeIndex]
        if (!activeEl) return

        gsap.set(activeEl, { opacity: 0 })
        gsap.to(activeEl, { opacity: 1, duration: 1, ease: 'power1.out' })
    }, [activeIndex])

    return (
        <>
            <div className="relative">
                <button aria-label="Previous slide" onClick={() => scroll('left')} className="h-full w-4 bg-white absolute -left-1 top-1/2 -translate-y-1/2 z-10 md:hidden">
                    <FaChevronLeft />
                </button>
                <div ref={navRef} className="mb-8 md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-18.75 w-full 2xl:max-w-[1400px] mx-auto scroll-smooth overscroll-[contain_auto] [&::-webkit-scrollbar]:hidden overflow-x-auto overflow-y-hidden md:overflow-x-visible md:overflow-y-visible px-6 md:px-0" style={{ scrollbarWidth: 'none' }}>
                    <div className="flex justify-center flex-wrap gap-2 md:gap-4 w-max md:w-auto">
                        {tabs?.map(({ id, label }, index) => (
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
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <button aria-label="Next slide" onClick={() => scroll('right')} className="h-full w-4 bg-white absolute -right-1 top-1/2 -translate-y-1/2 z-10 md:hidden">
                    <FaChevronRight />
                </button>
            </div>

            {children(activeIndex, contentRefs)}

        </>
    )
}