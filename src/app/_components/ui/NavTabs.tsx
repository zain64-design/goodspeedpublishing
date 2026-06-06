'use client'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { TabView, TabPanel } from 'primereact/tabview'
import type { TabItem } from '@/app/_types'

type Props = {
    tabs: TabItem[]
    defaultIndex?: number
    className?: string
}

export default function NavTabs({ tabs, defaultIndex = 0, className }: Props) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex)

    return (
        <>
            {/* Mobile */}
            {/* <div className={`block md:hidden ${className}`}>
                <TabView
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                    scrollable
                >
                    {tabs.map(({ id, title, category , content }) => (
                        <TabPanel key={id} header={title}>
                            {content}
                        </TabPanel>
                    ))}
                </TabView>
            </div> */}

            {/* Desktop */}
                <TabView
                className={twMerge(className)}
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                >
                    {tabs.map(({ id, title, content }) => (
                        <TabPanel key={id} header={title}>
                            {content}
                        </TabPanel>
                    ))}
                </TabView>
        </>
    )
}