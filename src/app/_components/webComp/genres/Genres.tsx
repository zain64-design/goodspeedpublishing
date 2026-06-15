// import React, { useState } from 'react';
// import { TabView, TabPanel } from 'primereact/tabview';
import Text from "@/app/_components/ui/Text"
import { CurveLine } from "@/app/_components/ui/Icons"
import NavTabs from "../../ui/NavTabs"
import {GenresData} from './GenresData'

type Props = {}

export default function Genres({ }: Props) {
    return (
        <section className='py-6.25 md:py-12.5'>
            <div className="md:container mx-auto px-4 text-center">
                <div className="relative z-1 bg-white rounded-[30px] md:rounded-[62px] p-3.5 sm:p-5 lg:p-8 xl:p-10 2xl:p-11 4xl:p-14 overflow-hidden">
                    <Text as="span" className="text-center text-mid font-medium uppercase text-[18px] md:text-[28px] tracking-[1.12px] inline-flex items-center justify-center"><CurveLine className="max-h-12 max-w-12 md:max-h-16.25 md:max-w-16.25 absolute z-[-1]" /> From fresh voices to powerful stories!</Text>
                    <Text as="h2" className="text-mid capitalize tracking-[-2px] lg:tracking-[-3px] 4xl:tracking-[-4.8px] font-extrabold leading-normal mt-8 mb-4 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 md:mb-8.75">range of genres we cater</Text>
                    <NavTabs genres={GenresData}/>
                </div>
            </div>
        </section>
    )
}