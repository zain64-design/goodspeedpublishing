import Text from "@/app/_components/ui/Text"
import { CurveLine } from "@/app/_components/ui/Icons"
import PortfolioSlider from "@/app/_components/webComp/portfolio/PortfolioSlider"

type Props = {}

export default function Portfolio({}: Props) {
  return (
    <section className="py-6.25 md:py-12.5">
        <div className="md:container mx-auto px-4 text-center">
            <Text as="span" className="text-center text-mid font-medium uppercase text-[18px] md:text-[28px] tracking-[1.12px] inline-flex items-center justify-center"><CurveLine className="max-h-12 max-w-12 md:max-h-16.25 md:max-w-16.25 absolute z-[-1]"/> our portfolio</Text>
            <Text as="h2" className="text-mid tracking-[-2px] lg:tracking-[-3px] 4xl:tracking-[-4.8px] font-extrabold leading-normal mt-8 mb-2 text-2xl sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:text-[74px] 4xl:text-[86px] 2xl:leading-21.5 2xl:mb-8.75">Entice Readers' Minds with Stunning Book Covers</Text>
            <PortfolioSlider/>
        </div>
    </section>
  )
}