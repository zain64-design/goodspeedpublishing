"use client";
import Text from "@/app/_components/ui/Text";
import CustomBtn from "@/app/_components/ui/CustomBtn";
import { FiArrowRight } from "react-icons/fi";

type Props = {};

export default function StatsInfo({}: Props) {
  return (
    <>
      <Text
        as="span"
        animate
        className="text-primary-50 mb-2 block text-sm font-normal tracking-[4px] uppercase sm:mb-4.25 sm:text-base md:text-lg"
      >
        Ready When You Are
      </Text>
      <Text
        as="h3"
        animate
        className="4xl:text-[70px] 4xl:leading-20 6xl:text-[81px] 6xl:leading-23 mb-2 text-2xl leading-normal font-bold tracking-[-1.639px] text-white sm:text-4xl md:text-[54px] xl:text-[64px] 2xl:mb-9.75 2xl:text-[68px] 2xl:leading-19.5"
      >
        Our team helps you reach the{" "}
        <Text as="span" className="text-primary-50 italic">
          finish line
        </Text>
        .
      </Text>
      <Text
        as="p"
        animate
        className="text-grey-text-400 4xl:text-[23px] text-xs leading-5 font-normal sm:text-sm md:text-base xl:text-lg xl:leading-7 2xl:text-[21px] 2xl:leading-8.75"
      >
        Editors, designers, marketers. One studio, one shared goal: your book in
        the hands of readers who love it.
      </Text>
      <div className="mt-6 flex w-full flex-1 flex-row flex-wrap justify-center gap-4 sm:justify-start md:mt-10 2xl:mt-12.75">
        <CustomBtn
          label="book free consultation"
          buttonClass="btn-primary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[240px] xl:max-w-[270px] 2xl:max-w-[292px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg"
          icon={<FiArrowRight className="text-sm xl:text-base 2xl:text-xl" />}
        />
        <CustomBtn
          label="Chat For 35% OFF"
          buttonClass="btn-secondary inline-flex items-center h-[50px] xl:h-[60px] 2xl:h-[71px] xs:max-w-[200px] sm:max-w-[230px] md:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[232px] flex-row-reverse justify-center gap-[11px] text-xs xl:text-base 2xl:text-lg"
        />
      </div>
    </>
  );
}
