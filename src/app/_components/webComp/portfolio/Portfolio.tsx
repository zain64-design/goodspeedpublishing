import dynamic from 'next/dynamic'
import Text from "@/app/_components/ui/Text"
import { CurveLine } from "@/app/_components/ui/Icons"
import PortfolioSlider from '@/app/_components/webComp/portfolio/PortfolioSlider'
import {portfolioData} from "@/app/_components/webComp/portfolio/PortfolioData"

export default function Portfolio() {
  return (
    <section className="py-6.25 md:py-12.5">
        <div className="md:container mx-auto px-4 text-center">
            <Text as="span" animate className="relative text-center text-mid font-medium uppercase text-[18px] md:text-[28px] tracking-[1.12px] inline-block"><CurveLine className="max-h-8 max-w-8 sm:max-h-12 sm:max-w-12 md:max-h-16.25 md:max-w-16.25 block absolute left-0 right-0 -top-2 mx-auto z-[-1]"/> our portfolio</Text>
            <Text as="h2" animate className="text-mid tracking-[-2px] lg:tracking-[-3px] 4xl:tracking-[-4.8px] font-extrabold leading-normal mt-4 md:mt-8 mb-2 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 2xl:mb-8.75">Entice Readers' Minds with Stunning Book Covers</Text>
            <PortfolioSlider portfolio={portfolioData}/>
        </div>
    </section>
  )
}