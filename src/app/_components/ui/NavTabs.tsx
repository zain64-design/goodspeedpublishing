'use client'
import { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import type { GenreItem } from '@/app/_types'
import Text from '@/app/_components/ui/Text'
import CustomBtn from '@/app/_components/ui/CustomBtn'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ImageComp from './Image';

type Props = {
    genres?: GenreItem[]
}

// Scroll button icon — pt mein pass hoga
const PrevIcon = () => <FiChevronLeft className="text-base text-mid-50" />
const NextIcon = () => <FiChevronRight className="text-base text-mid-50" />

export default function NavTabs({ genres }: Props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const data = genres ?? []

    return (
        <TabView
            scrollable
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            pt={{
                root: { className: 'ct-tabs' },
                navContainer: { className: 'mb-18.75 max-w-[1400px] mx-auto relative overflow-hidden px-3' },
                navContent: {
                    className: 'overflow-x-auto overflow-y-hidden scroll-smooth overscroll-[contain_auto] relative [&::-webkit-scrollbar]:hidden',
                    style: { scrollbarWidth: 'none' }
                },
                nav: { className: 'flex gap-4' },
                prevButton: {
                    className: 'absolute top-0 left-0 h-full w-13 flex items-center justify-center border-0! bg-white! cursor-pointer transition-all duration-300 ease-in-out hover:bg-white! hover:border-white [&>svg]:hover:text-secondary shrink-0 z-10 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]',
                },
                nextButton: {
                    className: 'absolute top-0 right-0 h-full w-13 flex items-center justify-center border-0! bg-white! cursor-pointer transition-all duration-300 ease-in-out hover:bg-white! hover:border-white [&>svg]:hover:text-secondary shrink-0 z-10 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]',
                },
            }}
        >
            {data?.map(({ id, title, category, info, thumbnail }) => (
                <TabPanel
                    header={category}
                    key={id}
                    pt={{
                        // li element
                        header: { className: 'shrink-0' },
                        // actual clickable anchor/button
                        headerAction: {
                            className: [
                                'px-6 py-2.5 h-[52px] inline-block',
                                'border border-grey-border-200 rounded-full',
                                'content-center capitalize text-xl font-medium text-grey-text-200',
                                'cursor-pointer transition-all duration-300 ease-in-out',
                                'hover:text-mid-50 hover:bg-primary hover:border-primary',
                                // active state — p-highlight class aa jaati hai li pe, isiliye parent selector
                                activeIndex === data.findIndex(g => g.id === id)
                                    ? 'text-mid-50 bg-primary border-primary'
                                    : '',
                            ].join(' ')
                        },
                        headerTitle: { className: 'leading-none' },
                        content: { className: 'p-0' },
                    }}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-left">
                            <Text as='h3' className='text-mid-50 font-bold capitalize md:tracking-[-2px] lg:text-[40px] lg:leading-12 xl:text-[56px] xl:leading-14.75 lg:mb-5 xl:mb-7.25'>{title}</Text>
                            <Text className='text-grey-text-300 text-xs sm:text-sm md:text-base leading-5 md:leading-7 xl:text-lg lg:leading-7 2xl:text-xl 2xl:leading-8 4xl:text-[22px] 4xl:leading-9!'>{info}</Text>
                            <div className="flex flex-row justify-center sm:justify-start flex-wrap gap-4 flex-1 w-full mt-6 md:mt-10 2xl:mt-12.75">
                                <CustomBtn label="book free consultation" buttonClass="btn-primary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[240px] xl:max-w-[270px] 2xl:max-w-[292px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg" icon={<FiArrowRight className="text-sm xl:text-base 2xl:text-xl" />} />
                                <CustomBtn label="Chat For 35% OFF" buttonClass="btn-secondary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[232px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg" />
                            </div>
                        </div>
                        {thumbnail && <ImageComp src={thumbnail} width={670} height={435} className='object-contain max-h-108.75 mx-auto max-w-full reflect-below' alt={`image-${category}`} />}
                    </div>
                </TabPanel>
            ))}
        </TabView>
    )
}