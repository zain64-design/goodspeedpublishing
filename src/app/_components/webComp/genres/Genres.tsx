import Text from "@/app/_components/ui/Text";
import { CurveLine } from "@/app/_components/ui/Icons";
import GenresTabs from "@/app/_components/webComp/genres/GenresTabs";

export default function Genres() {
  return (
    <section className="py-6.25 md:py-12.5">
      <div className="mx-auto px-4 text-center md:container">
        <div className="4xl:p-14 relative z-1 overflow-hidden rounded-[30px] bg-white p-3.5 sm:p-5 md:rounded-[62px] lg:p-8 xl:p-10 2xl:p-11">
          <Text
            as="span"
            animate
            className="text-mid relative inline-block content-center text-center text-[14px] font-medium tracking-[1.12px] capitalize sm:text-[18px] md:text-[28px]"
          >
            <CurveLine className="absolute -top-2 right-0 left-0 z-[-1] mx-auto block max-h-8 max-w-8 sm:max-h-12 sm:max-w-12 md:max-h-16.25 md:max-w-16.25" />{" "}
            From fresh voices to powerful stories!
          </Text>
          <Text
            as="h2"
            animate
            className="text-mid 4xl:tracking-[-4.8px] 4xl:text-[86px] mt-4 mb-4 text-2xl leading-normal font-extrabold tracking-[-2px] capitalize sm:text-4xl md:mt-8 md:mb-8.75 md:text-[54px] lg:tracking-[-3px] xl:text-[64px] 2xl:text-[74px] 2xl:leading-21.5"
          >
            range of genres we cater
          </Text>
          <GenresTabs />
        </div>
      </div>
    </section>
  );
}
