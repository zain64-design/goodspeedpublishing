import Text from "@/app/_components/ui/Text";
import { CurveLine } from "@/app/_components/ui/Icons";
import PortfolioSlider from "@/app/_components/webComp/portfolio/PortfolioSlider";

export default function Portfolio() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 text-center md:container">
        <Text
          as="span"
          animate
          className="text-mid relative inline-block text-center text-[18px] font-medium tracking-[1.12px] uppercase md:text-[28px]"
        >
          <CurveLine className="absolute -top-2 right-0 left-0 z-[-1] mx-auto block max-h-8 max-w-8 sm:max-h-12 sm:max-w-12 md:max-h-16.25 md:max-w-16.25" />{" "}
          our portfolio
        </Text>
        <Text
          as="h2"
          animate
          className="text-mid 4xl:tracking-[-4.8px] 4xl:text-[86px] mt-4 mb-2 text-2xl leading-normal font-extrabold tracking-[-2px] sm:text-4xl md:mt-8 md:text-[54px] lg:tracking-[-3px] xl:text-[64px] 2xl:mb-8.75 2xl:text-[74px] 2xl:leading-21.5"
        >
          Entice Readers' Minds with Stunning Book Covers
        </Text>
        <PortfolioSlider />
      </div>
    </section>
  );
}
